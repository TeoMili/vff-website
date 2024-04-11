import React, { useState, useEffect } from 'react';

function Proiect({name, description}){
    const [fileContent, setFileContent] = useState("");

    useEffect(() => {
        fetchFileContent(description);
    }, [description]);

    const fetchFileContent = async (filePath) => {
        try{
            const response = await fetch(filePath);
            if(!response.ok){
                throw new Error("Failed to fetch file");
            }
            const text = await response.text();
            setFileContent(text);
        }catch(error){
            console.error('Error fetching description ', error);
        }
    }

    return(
        <div>
        <h1> {name} </h1>
        <p className="description"> {fileContent} </p>
        </div>
    )
}

export default Proiect;