import { Container, Image, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"


const SectionHero = () => {
    return (
        <section className="s_hero d-flex align-items-center">
            {/* Section Background */}
            <div className="s_bg">
                <Image className="s_bg_img" src={`/img/bg1.jpg` } />
            </div>

            <Container className="">
                <Stack direction="horizontal">
                    <div className="hero_container">
                        <h1 className="s_title mt-5 mb-3">Your Health is our <br/>Top Piority</h1>
                        <p>When you visit Medicare, you’ll gain access to advanced technology, treatments and research that may not be available elsewhere. You can feel confident that you’re being treated by world-renowned experts.</p>
                        
                        <p>
                            <Link className="btn bg-white border-white btn-custom" to={`/contact`}>Contact</Link>
                        </p>
                    </div>
                </Stack>
            </Container>            
        </section>
    )

}


export default SectionHero
