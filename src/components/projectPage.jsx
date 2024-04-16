import React, { useState, useEffect } from "react";

function ProjectPage({ projectId, onBackClick }){ 
    const [data, setData] = useState({});
    const [fileContent, setFileContent] = useState("");
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, [projectId]);

    const fetchData = async () => {
        try{
            const response = await fetch(`http://localhost:5000/api/projectData?id=${projectId}`);
            if(!response.ok){
                throw new Error("Failed to fetch project data");
            }
            const jsonData = await response.json();
            setData(jsonData[0]);
            fetchFileContent(jsonData[0].l_description);

            const imageArray = jsonData.map(row => ({
                id: row.id,
                path: row.image
            }));

            setImages(imageArray);
        }catch(error){
            console.error('Error fetching data: ', error);
        }
    };

    const fetchFileContent = async (filePath) => {
        try{
            const response = await fetch(filePath);
            if(!response.ok){
                throw new Error("Failed to fetch file contents");
            }
            const description = await response.text();
            setFileContent(description);
        }catch(error){
            console.error("Error fetching file content", error);
        }
    }

    const handleBackClick = () => {
        onBackClick();
    }

    return(
        <>
        <button onClick={handleBackClick}> Back </button>
        <h1> {data.name} </h1>
        <h2> {fileContent} </h2>
        {images.map(item => (
            <img key={item.id} class="project_img" src={item.path} alt={`Image ${item.id}`}></img>
        ))}
        </>
    )
}

export default ProjectPage;