import { useState } from "react";
import "./RenterForm.css";
export const RenterForm=()=>{
    const[Name,setName]=useState("");
    const[contact,setContact]=useState("");
    const[member,setMember]=useState("");
    const[rent,setRent]=useState("");
    const[about,setAbout]=useState("");
    const[idProof,setIdProof]=useState("");
    const[policeVerification,setPoliceVerification]=useState("");
    const handleInputChange=(e)=>{
        const{name,value}=e.target;
        switch(name){
            case "Name":
                setName(e.target.value);
                break;
            case "contact":
                setContact(e.target.value);
                break;
            
            case "member":
                setMember(e.target.value);
                break;
            case "rent":
                setRent(e.target.value);
                break;
            case "about":
                setAbout(e.target.value);
                break;
            case "idProof":
                setIdProof(e.target.value);
                break;
            case "policeVerification":
                setPoliceVerification(e.target.value);
                break;
        }
    }
    const handleFormSubmit=(event)=>
    {
        event.preventDefault();
        const formData={
            Name:Name,
            contact:contact,
            member:member,
            rent:rent,
            about:about,
            idProof:idProof,
        };
        console.log(formData);
    }
    return(
        <>
            <form onSubmit={handleFormSubmit} >
                <div className="renter-form">
                    <h2>ADD Renter Details</h2>
                    <label htmlFor="Name">
                        <b>Name</b>
                    </label>
                    <br />
                    <input type="text"
                            name="Name"
                            placeholder="Enter Renter Name" 
                            value={Name}
                            onChange={handleInputChange}
                    />
                    <br />
                    <label htmlFor="contact">
                        <b>Contact</b>
                    </label>
                    <br />
                    <input type="text"
                            name="contact"
                            placeholder="Enter Mobile Number" 
                            value={contact}
                            onChange={handleInputChange}
                    />
                    <br />
                    <label htmlFor="member">
                        <b>Number of Member</b>
                    </label>
                    <br />
                    <input type="text"
                            name="member"
                            placeholder="Enter No. of Members" 
                            value={member}
                            onChange={handleInputChange}
                    />
                    <br />
                    <label htmlFor="rent">
                        <b>Rent Amount</b>
                    </label>
                    <br />
                    <input type="text"
                            name="rent"
                            placeholder="Enter Rent Amount" 
                            value={rent}
                            onChange={handleInputChange}
                    />
                    <br />
                     <label htmlFor="about">
                        <b>About</b>
                    </label>
                    <br />
                    <textarea type="text"  
                            name="about"
                            placeholder="Add Renter Information" 
                            value={about}
                            onChange={handleInputChange}
                    />
                    <br />
                    <label htmlFor="idProof">
                        <b>ID Proof</b>
                    </label>
                    <br />
                    <input type="file"  
                            name="idProof"
                            placeholder="Select File" 
                            value={idProof}
                            onChange={handleInputChange}
                    />
                    <br />
                    <label htmlFor="idProof">
                        <b>Upload Police Verification</b>
                    </label>
                    <br />
                    <input type="file"  
                            name="policeVerification"
                            placeholder="Select File" 
                            value={policeVerification}
                            onChange={handleInputChange}
                    />
                    <div>
                        <button type="submit">
                            Submit
                        </button>
                        <button style={{marginLeft:"10px"}}>cancel</button>
                    </div>
                </div>
                
                    
                
            </form>
        </>
    )
}