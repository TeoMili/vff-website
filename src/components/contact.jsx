import { useState } from "react";
function Contact(){
    const [textarea, setTextarea] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("Submited");
    }

    return(
        <>
        <h1> This is the contact page </h1>
        <form>
            <label> Nume: 
                <input type="text" />
            </label>
            <br />
            <label> Email: 
                <input type="text" />
            </label>
            <textarea/>
            <br />
            <input type="submit" />
        </form>
        </>
    )
}

export default Contact;