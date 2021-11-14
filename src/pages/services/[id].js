import PageHeader from "../../components/shared/PageHeader"
import SingleBody from "../../components/pages/SingleService/SingleBody"
import { useParams } from "react-router-dom"
import { servicesDB } from "../../db/servicesDB"


const SingleService = () => {
    const {id} = useParams()
    const data = servicesDB[id] 

    return (
        <>
            <PageHeader  title={data?.title} img={`/img/bg2.png`} />
            <SingleBody data={data} />
        </>
    )
}

export default SingleService
