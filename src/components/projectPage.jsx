import React, { useState, useEffect } from "react";

function ProjectPage({ projectId, onBackClick }){ 
    const [data, setData] = useState({});
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
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
            fetchShortDescription(jsonData[0].s_description);
            fetchLongDescription(jsonData[0].l_description);

            const imageArray = jsonData.map(row => ({
                id: row.id,
                path: row.image
            }));

            setImages(imageArray); 
            
        }catch(error){
            console.error('Error fetching data: ', error);
        }
    };

    const fetchLongDescription = async (filePath) => {
        try{
            const response = await fetch(filePath);
            if(!response.ok){
                throw new Error("Failed to fetch file contents");
            }
            const description = await response.text();
            setLongDescription(description);
        }catch(error){
            console.error("Error fetching file content", error);
        }
    }

    const fetchShortDescription = async (filePath) => {
        try{
            const response = await fetch(filePath);
            if(!response.ok){
                throw new Error("Failed to fetch file contents");
            }
            const description = await response.text();
            setShortDescription(description);
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
        <br />
        <table>
            <tr> 
            {images[0] && <td> <img src={images[0].path} alt="Main Image"  width="500px"/> </td>}
            <td> 
                <h1> {data.name} </h1> 
                <h2> {shortDescription} </h2>
            </td>    
            </tr>
            <tr>
                <td> <h2> {longDescription} </h2> </td>
            </tr>
        </table>
        <h1> De aici incep pozele: </h1>
        {images.slice(1).map(item => (
            item.path && <img key={item.id} className="project_img" src={item.path} alt={`Image ${item.id}`} />
        ))}
        </>
    )
}

export default ProjectPage;