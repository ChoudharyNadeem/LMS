import React from 'react'

function Textbox({name,placeholder, handlChange}) {
  return (
      <div>
   
    
            
    <input type="text" name={name} className='mb-4'   placeholder={placeholder} onChange={handlChange}/>
  
    </div>
  )
}

export default Textbox




