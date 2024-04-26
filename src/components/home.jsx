import ProjectPage from "./projectPage";
import { useState, useEffect } from "react";

function Home(){
    const displayProjects = ['EU360', 'Project 1'];
    
    const [data, setData] = useState([]); 

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const projectsData = [];
            for(const project of displayProjects){
                const response = await fetch(`http://localhost:5000/api/home?name=${project}`);
                const projectData = await response.json();
                projectsData.push(projectData[0]);
            }
            setData(projectsData);
        }catch(error){
            console.error('Error fetching data', error);
        }
    };

    const loadFileContent = async (filePath) => {
        try{
            const response = await fetch(filePath);
            if(!response.ok){
                throw new Error("Failed to fetch file contents");
            }
            const description = await response.text();
            return description;
        }catch(error){
            console.error("Error fetching file content", error);
        }
    }

    return(
        <>
        <div>
            <h1> Cine suntem noi? </h1>
            <h3> 
            VFF este o organizatie care se identifica cu deviza "tineri pentru tineri".
            Scopul principal al ONGului este de a dezvolta proiecte si activitati pentru tineri prin care sa 
            incurajeze implicarea civica, creativitatea, exprimarea libera, munca in echipa si informarea in legatura
            cu teme actuale.    
            </h3>
        </div>
            <h1> Proiecte Recente: </h1>
            {data.map(project => (
                <div key={project.id}>
                <ProjectPage projectId={project.id} />
                </div>
            ))}
        <div>
            <h1> Mică galerie foto </h1>
        </div>
        </>
    )
}

export default Home;