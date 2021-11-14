import React from 'react'
import SectionHero from '../components/pages/home/SectionHero'
import SectionAbout from '../components/pages/home/SectionAbout'
import SectionServices from '../components/pages/home/SectionServices'
import SectionNews from '../components/pages/home/SectionNews'
import SectionFeaturedResources from '../components/pages/home/SectionFeaturedResources'

const Home = () => {
    return (
        <>
            <SectionHero />
            <SectionAbout/>
            <SectionServices />
            <SectionNews />
            <SectionFeaturedResources/>
        </>
    )
}

export default Home
