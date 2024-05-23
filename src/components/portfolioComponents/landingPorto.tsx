import React from 'react'

function LandingPort({ title }: { title: String }) {
    return (
        <div className=' bg-black opacity-75 md:flex py-[4%] p-[4%] w-full  justify-between pt-32 pb-52'>
            <h1 className='text-[#2ABDFB] font-extrabold md:text-[62px] text-[35px] my-auto h-full z-10'>{title}</h1>
            <div className='h-full'>
                <img src="/rectangle 61.png" alt="" className='w-[407px]' />
                <img src="/rectangle 63.png" alt="" className='absolute -translate-x-32 -translate-y-32 w-[407px]' />
            </div>
        </div>
    )
}

export default LandingPort