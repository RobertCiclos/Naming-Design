import React from 'react'

const BtnNext = () => {
    
    return (
        <button
            className='grid items-center justify-items-center relative
            border-[#2B2326] rounded-[10px] text-[#2B2326]
            w-[315px] h-[44px] border-[2px]
            sm:w-[360px] sm:h-[50px] sm:border-[2.29px]
            hover:bg-[#2B2326]  hover:text-white'>
            <p
                className='font-[Poppins] font-bold
                text-[18px] sm:text-[19px]
                '>
                Continuar 
            </p>
            <p
                className='font-[Poppins] font-bold absolute
                text-[18px] sm:text-[19px]
                left-[280px] sm:left-[320px]'>
                →
            </p>
        </button>
    )
}

export default BtnNext