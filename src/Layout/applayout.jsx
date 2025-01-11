import{Outlet} from "react-router-dom"
import { Navbar } from "../components/Navbar/Navbar"
let titles=[
    {name:"Home",link:"/"},
    {name:"Reminder",link:"/about"},
    {name:"Rent+Electric Bill/Month",link:"/lab"},
    {name:"Expense/Month",link:"/publication"},
    {name:"Previous Renters",link:"/invited"},
]
export const AppLayout=()=>{
    return(
        <>
            <div style={{marginTop:"20px", marginBottom:"20px",textAlign:"center"}}>
                <h1>Rental Management</h1>
            </div>
            <div style={{display:"flex"}}>
                <Navbar titles={titles}/>
                
                <Outlet/>
            </div>
        </>
    )
}