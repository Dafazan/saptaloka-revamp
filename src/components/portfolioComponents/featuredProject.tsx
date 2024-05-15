import React from 'react'
import PortofolioCard from '../cards/PortofolioCard'

function FeaturedProject() {
    return (
        <>
            <div className=''>
                <h2 className='text-blue-light font-extrabold text-[30px] p-[4%]'>FEATURED PROJECTS</h2>

                <div className="md:flex grid grid-cols-1 w-full gap-10 px-[4%]">
                    <PortofolioCard
                        link="/portofolio/#"
                        title="PT TELKOM INFRA SPARE MANAGEMENT"
                        desc="An inventory application for regulating entry and exit of goods
              and cables, also manages inventory in the warehouse at PT Telkom
              Infra."
                        image="/porto1.png"
                    />
                    <PortofolioCard
                        link="/portofolio/#"
                        title="PT TELKOM INFRA SPARE MANAGEMENT"
                        desc="An inventory application for regulating entry and exit of goods
              and cables, also manages inventory in the warehouse at PT Telkom
              Infra."
                        image="/porto1.png"
                    />
                    <PortofolioCard
                        link="/portofolio/#"
                        title="PT TELKOM INFRA SPARE MANAGEMENT"
                        desc="An inventory application for regulating entry and exit of goods
              and cables, also manages inventory in the warehouse at PT Telkom
              Infra."
                        image="/porto1.png"
                    />
                    <PortofolioCard
                        link="/portofolio/#"
                        title="PT TELKOM INFRA SPARE MANAGEMENT"
                        desc="An inventory application for regulating entry and exit of goods
              and cables, also manages inventory in the warehouse at PT Telkom
              Infra."
                        image="/porto1.png"
                    />

                </div>
            </div>
            <div className=''>
                <h2 className='text-blue-light font-extrabold text-[30px] p-[4%]'>OTHER PROJECTS</h2>

                <div className="md:flex grid grid w-full gap-10 px-[4%]">
                    <PortofolioCard
                        link="/portofolio/#"
                        title="PT TELKOM INFRA SPARE MANAGEMENT"
                        desc="An inventory application for regulating entry and exit of goods
              and cables, also manages inventory in the warehouse at PT Telkom
              Infra."
                        image="/porto1.png"
                    />
                    <PortofolioCard
                        link="/portofolio/#"
                        title="PT TELKOM INFRA SPARE MANAGEMENT"
                        desc="An inventory application for regulating entry and exit of goods
              and cables, also manages inventory in the warehouse at PT Telkom
              Infra."
                        image="/porto1.png"
                    />
                    <PortofolioCard
                        link="/portofolio/#"
                        title="PT TELKOM INFRA SPARE MANAGEMENT"
                        desc="An inventory application for regulating entry and exit of goods
              and cables, also manages inventory in the warehouse at PT Telkom
              Infra."
                        image="/porto1.png"
                    />
                    <PortofolioCard
                        link="/portofolio/#"
                        title="PT TELKOM INFRA SPARE MANAGEMENT"
                        desc="An inventory application for regulating entry and exit of goods
              and cables, also manages inventory in the warehouse at PT Telkom
              Infra."
                        image="/porto1.png"
                    />

                </div>
            </div>
        </>
    )
}

export default FeaturedProject