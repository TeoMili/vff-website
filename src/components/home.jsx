import { useState, useEffect } from "react";

function Home({ handleClick }){
    const displayProjects = ["EU360"];

    const [onHome, setOnHome] = useState(true);    

    const displayEU360 = () => {
        console.log("hey");
        setOnHome(false);
    };

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
        <div>
            <h1> Eu360&deg; </h1>
            <h3> 
                Asociația Vacanțe Fără Frontiere lansează seria de evenimente EU360&deg;! 
                Descoperă totul despre UE și pregatește-te pentru alegerile din acest an, 
                participând la discuții interesante și jocuri interactive! <br />
                Alătură-te campaniei noastre de informare și explorează UE din toate unghiurile! 
            </h3>
            <h3> <button onClick={displayEU360}>  Mai multe detalii </button> </h3>
            <h3> Vrei ca Eu360&deg; sa vină și în școala ta? Contact us!</h3>
        </div>
        <div>
            <h1> Mică galerie foto </h1>
        </div>
        </>
    )
}

export default Home;