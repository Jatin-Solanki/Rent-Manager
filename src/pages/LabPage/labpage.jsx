import './labpage.css'
import { RenterForm } from '../../components/RenterForm/RenterForm'
export const LabPage=()=>{
    return(
        <>
        <div className="labpage">
            <h1>Rent + Electric Bill </h1>
            <RenterForm></RenterForm>
        </div>
        </>
    )
}