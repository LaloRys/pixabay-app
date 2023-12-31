import React, { Component } from 'react'

class Search extends Component {

   searchRef = React.createRef()

   getData = (e) => {
      e.preventDefault()
      
      //obtenemos el valor del input
      const term = this.searchRef.current.value
      
      //Se envia al componente principal
      this.props.searchData(term)

   }

    
   render() {
        return (
         <form onSubmit={this.getData}>
            <div className='row'>
               <div className='form-group col-md-8'>
                  <input ref={this.searchRef} type="text" className='form-control form-control-lg' placeholder='Busca tu imagen. Ejemplo: Paisaje' />
               </div>
               <div className='form-group col-md-4'>
                  <input type="submit" className='btn btn-lg btn-success btn-block' value="Buscar..." />
               </div>
            </div>
         </form>
        )
    }
}

export default Search