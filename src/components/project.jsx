import React, { useState, useEffect } from 'react';

function Project({projectId, onClick}){
    const [data, setData] = useState([]);
    const [shortDescription, setShortDescription] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    //fetch short info about the project from db
    const fetchData = async () => {
        try{
            const response = await fetch(`http://localhost:5000/api/project?id=${projectId}`);
            const projectData = await response.json();
            setData(projectData[0]);
            fetchShortDescription(projectData[0].s_description);

        }catch(error){
            console.error('Error fetching data', error);
        }
    };
    
    const fetchShortDescription = async (filePath) => {
        try{
            const response = await fetch(filePath);
            if(!response.ok){
                throw new Error("Failed to fetch file");
            }
            const text = await response.text();
            setShortDescription(text);
        }catch(error){
            console.error('Error fetching description ', error);
        }
    }

    return(
        <div className = "project" onClick={onClick}>
        <h1> {data.name} </h1>
        <p className="description"> {shortDescription} </p>
        </div>
    )
}

export default Project;