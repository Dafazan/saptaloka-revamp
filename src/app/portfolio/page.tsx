import PortofolioCard from '@/components/cards/PortofolioCard'
import FeaturedProject from '@/components/portfolioComponents/featuredProject'
import LandingPorto from '@/components/portfolioComponents/landingPorto'
import React from 'react'

function Portofolio() {
    return (
        <div className='w-full bg-primary  '>
            <LandingPorto title={'OUR PORTFOLIO'} />
            <FeaturedProject />
        </div>
    )
}

export default Portofolio