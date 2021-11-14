import { Container, Image } from "react-bootstrap"


const PageHeader = (props) => {
    return (
        <section className="section-page-header">
            <div className="s_bg">
                <Image className="s_bg_img" src={props.img} />
            </div>

            <Container>
                <h2 className="s_title">{props.title}</h2>
            </Container>
        </section>
    )
}

export default PageHeader
