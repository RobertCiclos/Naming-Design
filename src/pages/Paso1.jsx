import React from 'react'
import BtnNext from '../components/buttons/BtnNext'
const Paso1 = () => {
  
  return (
    <section>
      <h1 className='pt-[157px] w-[511px] mx-auto'>
        ¡Bienvenido a este espacio de creación rápida!
      </h1>
      <div className='mx-auto'> 
        <div 
          className='grid grid-cols-2 w-[814px] border mx-auto mt-[64px] '>
          <div 
            className=''>
            <h3>
              Quiero un nombre para
            </h3>
            <div 
              className='pb-[40px]'>
              <label 
                className=" flex mt-[13px] accent-[#FF0062] justify-items-center">
                <ul 
                  className='space-y-[6px]  ml-[10px]'>
                  <li 
                    className='flex items-center'>
                    <input type="radio" className=" "/>
                    <span 
                      className="ml-[11px] ">mi idea de negocio o marca personal</span>
                  </li>
                  <li>
                    <input type="radio" className=" "/>
                    <span 
                      class="ml-[11px]">mi mascota o mejor amig@</span>
                  </li>
                  <li>
                    <input type="radio" className=""/>
                    <span 
                      class="ml-[11px]">mi hija o hijo</span>
                  </li>
                  <li>
                    <input type="radio" className="" />
                    <span 
                      class="ml-[11px]">un evento ó celebración</span>
                  </li>
                  <li>
                    <input type="radio" className=""/>
                    <span 
                      class="ml-[11px]">otra acción</span>
                  </li>  
                </ul>
              </label>
            </div>
            <BtnNext/>
          </div>
          <img src="imagenes/uno.png" className='pl-[70px]'/>
          <div>
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default Paso1