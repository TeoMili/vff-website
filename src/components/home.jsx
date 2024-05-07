import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home(){

    const displayProject = ['EU360'];
    const displayImage = "images/project1/i1.jpg";

    const [displayProjectId, setDisplayProjectId] = useState();

    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    //get the id of the project chosen for display
    const fetchData = async () => {
        try{
            const response = await fetch(`http://localhost:5000/api/home?name=${displayProject}`);
            if(!response.ok){
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setDisplayProjectId(data[0].id);
            fetchDescription(data[0].s_description);
        }catch(error){
            console.error('Error fetching data', error);
        }
    };

    //get the short description for the display project
    const fetchDescription = async (filePath) => {
        try{
            const response = await fetch(filePath);
            if(!response.ok){
                throw new Error("Failed to fetch file");
            }
            const text = await response.text();
            setDescription(text);
        }catch(error){
            console.error('Error fetching description ', error);
        }
    };

    const navigateToInfo = () =>{
        navigate("/proiecte");
    };

    return(
        <>
        <div>
            <table>
                <tr> 
                    <td> <img src={displayImage} width="300px"/> </td>
                    <td>
                        <h1> Cine suntem noi? </h1>
                        <h3> 
                            VFF este o organizatie care se identifica cu deviza "tineri pentru tineri".
                            Scopul principal al ONGului este de a dezvolta proiecte si activitati pentru tineri prin care sa 
                            incurajeze implicarea civica, creativitatea, exprimarea libera, munca in echipa si informarea in legatura
                            cu teme actuale.    
                        </h3>
                    </td>
                </tr>
            </table>
            
        </div>
        <div>
            <h1> {displayProject} </h1>
            <h2> {description} </h2>
            <button onClick={navigateToInfo}> Mai multe informatii </button>

        </div>
        <div>
            <h1> Mică galerie foto </h1>
        </div>
        </>
    )
}

export default Home;