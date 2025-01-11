import { RegistrationForm } from './form'
import { MdAddHomeWork } from "react-icons/md";
import './homepage.css'
import { useState } from 'react';
export const HomePage=()=>{
    let form_visibility=false;
    let [form_visibility_css,setFormVisibilityCss]=useState("form-closed");
        let handleButtonClick=()=>{
        if(form_visibility==true)
        {
            form_visibility=false;
            setFormVisibilityCss(()=>"form-closed")
            console.log(form_visibility);
            console.log(form_visibility_css);   
        }
        else if(form_visibility==false)
        {
            form_visibility=true;
            setFormVisibilityCss(()=>"form-open")
            console.log(form_visibility);
            console.log(form_visibility_css);
        }
    }
    return(
        <>
        <div className="home">
            <div className="add-property">
                <MdAddHomeWork style={{height:"200px",width:"200px"}} />
                {/* <h1>Home</h1> */}
              <br />
                <button onClick={handleButtonClick} style={{height:"30px" , width:"180px"}}>ADD PROPERTY</button>
            </div>
            <div className={`${form_visibility_css}`}>
                <RegistrationForm/>
            </div>
            
        </div>
        </>
    )
}