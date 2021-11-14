import React from 'react'
import SectionContact from '../components/pages/contact/SectionContact'
import PageHeader from '../components/shared/PageHeader'

const Contact = () => {
    return (
        <>
            <PageHeader title="Your Health is our Top Piority" img={`/img/bg2.png`} />
            <SectionContact/>
        </>
    )
}

export default Contact
