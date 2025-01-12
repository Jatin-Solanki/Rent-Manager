import { useState } from "react";
import './form.css'
export const RegistrationForm=()=>{
    const[propertyName,setPropertyName]=useState("");
    const[noOfUnits,setNoOfUnits]=useState("");
    const handleInputChange=(e)=>{
        const{name,value}=e.target;
        switch(name){
            case "propertyName":
                setPropertyName(e.target.value);
                break;
            case "noOfUnits":
                setNoOfUnits(e.target.value);
                break;
        }
    }
    const handleFormSubmit=(event)=>
    {
        event.preventDefault();
        const formData={
            propertyName:propertyName,
            noOfUnits:noOfUnits,
        };
        console.log(formData);
    }
    return(
        <>
            <form onSubmit={handleFormSubmit} >
                <div className="container">
                    <label htmlFor="propertyName">
                        <b>Property Name</b>
                    </label>
                    <input type="text"
                            name="propertyName"
                            placeholder="Enter Property Name" 
                            value={propertyName}
                            onChange={handleInputChange}
                    />
                    <br />
                    <label htmlFor="noOfUnits">
                        <b>No. of Units</b>
                    </label>
                    <input type="text"
                            name="noOfUnits"
                            placeholder="Enter No. of Units" 
                            value={noOfUnits}
                            onChange={handleInputChange}
                    />
                </div>
                <button type="submit">
                    Submit
                </button>
                <button className="cancel-button">cancel</button>
            </form>
        </>
    )
}