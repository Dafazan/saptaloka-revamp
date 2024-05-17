import ButtonA from '@/components/button'
import NewsCard from '@/components/cards/NewsCard'
import LandingPort from '@/components/portfolioComponents/landingPorto'
import React from 'react'

function Page() {
    return (
        <>
            <div className='w-full bg-primary ' >
                <LandingPort title={"INFORMATION & NEWS"} />
                <div>
                    <h2 className='text-blue-light font-extrabold text-[30px] p-[4%]'>RECENT POST</h2>
                    <div className='px-[4%] flex gap-5'>
                        <img src="/Rectangle 61.png" alt="" className='w-[401px]' />
                        <div className='text-blue-light flex flex-col h-52 justify-between'>
                            <div>

                                <p className='text-[18px]'>22 Juli 2024</p>
                                <h3 className='text-[24px] font-bold mb-2'>EXPANSI SAPTALOKA FARMTECH KE WILAYAH ASIA TENGGARA</h3>
                                <p className='text-[16px]'>KESUKSESAN SAPTALOKA FARMTECH MEMBUAT KEPUTUSAN BARU UNTUK EKSPANSI KE WILAYAH ASIA TENGGARA. TIDAK HANYA SATU, NAMUN EKSPANSI INI DILAKUKAN DI 3 NEGARA, MALAYSIA, SINGAPURA DAN THAILAND DENGAN MASING-MASING 2 HEADQUARTER.</p>
                            </div>
                            <a href="/about" className=''>
                                <ButtonA text={"READ MORE"} color="#D2F2FF" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='pb-40'>
                    <h2 className='text-blue-light font-extrabold text-[30px] p-[4%]'>OTHER POST</h2>

                    <div className='h-full w-full grid grid-cols-3 gap-10 px-[4%]'>
                        <div className='h-[262px]'>

                            <NewsCard
                                title="PERTEMUAN CEO SAPTALOKA DIGITAL DENGAN BILL GATES"
                                date="04 JANUARY 2025"
                                link="/news/#"
                                image="/porto1.png"
                            />
                        </div>
                        <div className='h-[262px]'>

                            <NewsCard
                                title="PERTEMUAN CEO SAPTALOKA DIGITAL DENGAN BILL GATES"
                                date="04 JANUARY 2025"
                                link="/news/#"
                                image="/porto1.png"
                            />
                        </div>
                        <div className='h-[262px]'>

                            <NewsCard
                                title="PERTEMUAN CEO SAPTALOKA DIGITAL DENGAN BILL GATES"
                                date="04 JANUARY 2025"
                                link="/news/#"
                                image="/porto1.png"
                            />
                        </div>
                        <div className='h-[262px]'>

                            <NewsCard
                                title="PERTEMUAN CEO SAPTALOKA DIGITAL DENGAN BILL GATES"
                                date="04 JANUARY 2025"
                                link="/news/#"
                                image="/porto1.png"
                            />
                        </div>
                        <div className='h-[262px]'>

                            <NewsCard
                                title="PERTEMUAN CEO SAPTALOKA DIGITAL DENGAN BILL GATES"
                                date="04 JANUARY 2025"
                                link="/news/#"
                                image="/porto1.png"
                            />
                        </div>
                        <div className='h-[262px]'>

                            <NewsCard
                                title="PERTEMUAN CEO SAPTALOKA DIGITAL DENGAN BILL GATES"
                                date="04 JANUARY 2025"
                                link="/news/#"
                                image="/porto1.png"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Page