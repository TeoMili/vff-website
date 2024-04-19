import { useState } from "react";
function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleTextareaChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        //check if fields are empty
        if(name == "" || email == "" || message == ""){
            alert("Please complete all fields");
            return;
        }
        console.log(name, email, message);
        alert("Submited");
        
    }

    return(
        <>
        <h1> This is the contact page </h1>
        <form>
            <label> Nume: 
                <input type="text" onChange={handleNameChange}/>
            </label>
            <br />
            <label> Email: 
                <input type="text" onChange={handleEmailChange}/>
            </label>
            <textarea value={message} onChange={handleTextareaChange}/>
            <br />
            <button type="submit" onClick={handleSubmit}> Submit </button>
        </form>
        </>
    )
}

export default Contact;