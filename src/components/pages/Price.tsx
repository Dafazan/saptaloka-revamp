import React from 'react'
import PriceCard from '../PriceCard'

function Price() {
  return (
    <div>
      <div className="w-full h-full">
      <div className="w-full md:bg-transparent bg-[#2ABDFB] -translate-y-[1px]">
        <div className="h-24 w-full flex items-center justify-center">
          <h3 className="md:text-[28px] text-[18px] font-bold text-[#D8F3FF]">
          WEBSITE PRICELIST
          </h3>
        </div>
        <div className='grid md:grid-cols-4 gap-10 px-[4%] 2xl:px-[13%]'>

       <PriceCard/>

       </div>
       <div className="mt-10 md:mx-0 px-5 text-center w-full flex items-center justify-center">
          <h3 className="md:text-[28px] mt-5 text-[18px] font-bold text-[#D8F3FF]">
          SOFTWARE MULTIPLATFORM PRICELIST
          </h3>
        </div>
       <div className=" mb-5 w-full md:mx-0 px-5 text-center flex items-center justify-center">
          <h3 className="md:text-[16px] text-[10px] font-bold text-[#D8F3FF]">
          Pembuatan Software atau aplikasi multiplatform seperti ERP, E-Commerce, dll
          </h3>
        </div>
        <div className='flex w-full justify-center'>

        
        <div>



        </div>
<a href='https://wa.me/6283873296832' className='px-2 md:w-96 w-10/12 mb-5 py-2 border rounded-md shadow text-md font-bold mx-auto bg-white md:bg-[#2ABDFB] text-center '>Hubungi Admin</a>
        </div>
      </div>
      <div className="w-full h-10 bg-[#2ABDFB] block md:hidden upsharp -translate-y-[2px]"></div>
    </div>
        </div>
  
  )
}

export default Price
