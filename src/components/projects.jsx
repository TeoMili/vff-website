import React, { useState, useEffect } from "react";
import Project from './project';
import ProjectPage from './projectPage';

function Projects(){

    const [data, setData] = useState([]);
    const [selectedProject, setSelectedProject] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const response = await fetch('http://localhost:5000/api/projects');
            const jsonData = await response.json();
            setData(jsonData);
        }catch(error){
            console.error('Error fetching data: ', error);
        }
    };

    const handleClick = (index) => {
        setSelectedProject(index);
        console.log(index);
    }

    const loadProjects = () => {
        setSelectedProject(0);
    }

    return(
        <>
            {selectedProject === 0 ?
                <>
                <h1> Our Projects </h1>
                    {data.map(item => (
                        <>
                        <Project key={item.id} name={item.name} description={item.s_description} 
                        onClick={() => handleClick(item.id)}
                        /> 
                        <br />
                        </>
                    ))}
                </>
                :
                <ProjectPage projectId={selectedProject} onBackClick={loadProjects} />
            }
        </>
    );
}

export default Projects;