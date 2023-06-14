import React from 'react'

function Pagination(props) {
  return (
    <div className='py-3 justify-content-center'>
         <button onClick={props.previousPage} type='button' className='btn btn-outline-light mr-1'>
            Anterior &larr;
         </button>
         <button onClick={props.nextPage} type='button' className='btn btn-outline-light'>
            Siguiente &rarr;
         </button>
      
      </div>
  )
}

export default Pagination