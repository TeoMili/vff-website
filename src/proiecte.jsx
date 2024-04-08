import React, { useState, useEffect } from "react";

function Proiecte(){

    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000')
            .then((response) => response.text())
            .then((data) => {
                setMessage(data);
            })
            .catch((err) => {
                console.log('Error fetching data', err);
            });
    }, []);

    return(
        <>
            <h1> This is the projects page </h1>
            <h1> Data from the server: </h1>
            <p> {message} </p>
        </>
    );
}

export default Proiecte;