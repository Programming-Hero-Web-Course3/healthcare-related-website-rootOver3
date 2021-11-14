import React from 'react'
import SectionHero from '../components/pages/home/SectionHero'
import SectionAbout from '../components/pages/home/SectionAbout'
import SectionServices from '../components/pages/home/SectionServices'

const Home = () => {
    return (
        <>
            <SectionHero />
            <SectionAbout/>
            <SectionServices />
        </>
    )
}

export default Home
