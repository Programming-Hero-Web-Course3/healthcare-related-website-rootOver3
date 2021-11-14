import PageHeader from "../components/shared/PageHeader"
import SectionAboutUs from "../components/pages/about/SectionAboutUs"

const About = () => {
    return (
        <div>
            <PageHeader title="Your Health is our Top Piority" img={`/img/bg2.png`} />
            <SectionAboutUs />
        </div>
    )
}

export default About
