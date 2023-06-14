import React from 'react'
import Search from './components/Search'
import { Result } from './components/Result'


class App extends React.Component {

  state = {
    term: '',
    image: [],
    page: '',
  }

  scroll = () => {
    const elemet = document.getElementById('top')
    elemet.scrollIntoView('smooth','start')
  }
  

  previousPage = () => {
    let page = this.state.page

    //si la pagina actual es 1, no se puede retroceder

    if(page === 1) return null

    //resta 1 a la pagina actual
    page--

    //agregar el cambio a state

    this.setState({
      page: page
    },() => { 
      this.consultApi(),
      this.scroll()
    })}

  nextPage = () => {
    //leer state de la pagina actual
    let page = this.state.page

    //sumar 1 a la pagina actual
    page++

    //agregar el cambio a state

    this.setState({
      page: page
    },() => { 
      this.consultApi(),
      this.scroll()
    })

  }

  consultApi = () => {
    const term = this.state.term
    const page = this.state.page
    const url = `https://pixabay.com/api/?key=37291360-53c8b33b844bc3ae60c341218&q=${term}&per_page=20&page=${page}`

    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        image: data.hits
      }))
  }


  searchData = (term) => {
    this.setState({
      term: term,
      page: 1
    }, () => {
      this.consultApi()
    })
  }
   

  render() {
    return (
      <div className="app container">
        <div className='p-5 bg-primary mb-4 rounded-3' id='top'>
          <p className='lead text-center'>Bucador de Imagenes</p>
  
          <Search
            searchData= { this.searchData }
          />
  
        </div>

        <div className='row justify-content-center'>
          <Result 
          images = { this.state.image } 
          previousPage = { this.previousPage } 
          nextPage = { this.nextPage }
          />
        </div>
        
      </div>
    )
  }

  
}

export default App