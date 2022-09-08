import React from 'react'

const Footer = () => {
  return (
      <section>
          <div
            className='bg-[#2B2326] grid justify-items-center items-center
            w-full absolute bottom-0 
            h-[180px] lg:h-[116px] '>
            <div
              className='grid items-center order-last justify-items-center
              w-[395px] h-[80px] grid-cols-1 gap-y-[30px]
              lg:w-[1109px] lg:h-[35.21px] lg:grid-cols-[395px_1fr_203px] lg:gap-y-0'>
              <div
                className='flex gap-[15px]
                lg:gap-[6.9px] lg:col-start-3 lg:order-2'>
                <a href='https://pe.linkedin.com/'>
                  <img src='./svg/linkedin.svg' alt=''/>
                </a>
                <a href='https://www.behance.net/'>
                  <img src='./svg/behance.svg' alt=''/>
                </a>
                <a href='https://es-la.facebook.com/'>
                  <img src='./svg/facebook.svg' alt=''/>
                </a>
                <a href='https://dribbble.com/'>
                  <img src='./svg/dribbble.svg' alt=''/>
                </a>
                <a href='https://www.instagram.com/'>
                  <img src='./svg/instagram.svg' alt=''/>
                </a>
              </div>
              <p
                className='font-[Poppins] font-medium text-[14px] text-white lg:order-1 text-center'>
                Todos los derechos reservados © Ciclos Studio 2020
              </p>
              
            </div>
          </div>
      </section>
    )
}

export default Footer