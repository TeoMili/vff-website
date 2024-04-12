import React, { useState, useEffect } from "react";
import Project from './project';

function Projects(){

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const response = await fetch('http://localhost:5000/api/data');
            const jsonData = await response.json();
            setData(jsonData);
        }catch(error){
            console.error('Error fetching data: ', error);
        }
    };

    return(
        <>
            <h1> This is the projects page </h1>
            <ul>
                {data.map(item => (
                    <Project key={item.id} name={item.name} description={item.description} />
                ))}
            </ul>
        </>
    );
}

export default Projects;