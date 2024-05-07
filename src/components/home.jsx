import Project from "./project";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home(){

    const displayProject = ['EU360'];

    const [displayProjectId, setDisplayProjectId] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    //get the id of the project chosen for display
    const fetchData = async () => {
        try{
            const response = await fetch(`http://localhost:5000/api/home?name=${displayProject}`);
            const projectId = await response.json();
            console.log(projectId.id);
            setDisplayProjectId(projectId);
        }catch(error){
            console.error('Error fetching data', error);
        }
    };

    const Navigate = () => {
        console.log("Clicked nav");
        navigate('/projects');
    };


    return(
        <>
        <div>
            <table>
                <tr> 
                    <td> <img src="images/vff-logo.png" width="300px"/> </td>
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
            <h1> Proiecte Recente: </h1>
            <Project projectId={displayProjectId} />
            <button onClick={Navigate}> navigate </button>
        </div>
        <div>
            <h1> Mică galerie foto </h1>
        </div>
        </>
    )
}

export default Home;