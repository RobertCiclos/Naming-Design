import React from 'react'

const Navbar = () => {
  return (
      <section>
        <div 
          className='contenedor invisible
          lg:visible'>
            <div 
              className='border-b-[3px] shadow-md
              lg:h-[100px] lg:px-[165px]   '>
              <nav 
                className=' w-full h-[100px] grid grid-cols-[201px_1fr_237px] items-center'>
                <img src="./svg/logoprincipal.svg" />
                <div 
                  className=''>
                </div>
                <div 
                  className=' flex justify-end'>
                  <button 
                    className='bg-amarilloN flex items-center justify-center
                    w-[173px] h-[40px] rounded-[20px] font-[Poppins] font-bold'>
                    <img src="./svg/btn-icon.svg" />
                    <p 
                      className='ml-[9px] text-[#2B2326]'>Escribenos
                    </p>
                  </button>
                  <img 
                    className='ml-[30px]' src='./svg/icono-idioma.svg'/>
                </div>
              </nav>
            </div>
        </div>
      </section>
    )
}

export default Navbar