import React, { useState, useEffect } from "react";

function App(){
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
        <div className="App">
            <h1> Data from the server: </h1>
            <p> {message} </p>
        </div>
    );
}

export default App
