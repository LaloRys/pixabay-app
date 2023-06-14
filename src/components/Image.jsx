import React from 'react'

const Image = (props) => {

   const {largeImageURL, likes, previewURL, tags, webformatURL, views} = props.image

   return (
      <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
         <div className='card'>
            <img src={previewURL} alt={tags} className='card-img-top' />
            <div className='card-body'>
               <p className='card-text fw-light'>{likes} Me Gusta</p>
               <p className='card-text fw-light'>{views} Vistas</p>

               <a href={webformatURL} target='_blank' className='btn btn-info d-block'> Ver imagen</a>
            </div>
         </div>
      </div>
   )
}

export default Image