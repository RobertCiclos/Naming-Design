import React from 'react'
import { Link } from 'react-router-dom'
import BtnNext from '../components/buttons/BtnNext'

const Paso5 = () => {
  
  return (
    <section>
      <div>
        <h1 
          className='lg:my-[96px]'>
          ¡Lineamientos finales!
        </h1> 
        <div
          className='mx-auto order-last grid
          w-[316px]
          lg:w-[1003px] lg:grid-cols-[593px_350px]'>
          <img 
            src='./imagenes/cinco.png' alt=''
            className='sm:order-2'/>
          <div
            className='sm:order-1'>
            <Link to='/Paso6'>
              <BtnNext/>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Paso5