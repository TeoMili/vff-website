function GameDescription(){
    return(
        <>
        <h1> Welcome to LegisLand! </h1>
        <h3> 
            Bine ați venit în LegisLand - unde elevii devin europarlamentari și votează legi fictive, fără conotații politice.
            <br />
            În acest joc captivant, elevii vor fi repartizați în 5 partide fictive. Acestea sunt complet apolitice! 
            Inspirate din operele marilor autori români, aceste partide amuzante au principii bine stabilite:
            </h3>
            <table id="partide">
                <thead>
                    <tr> 
                        <th>  </th>
                        <th>  Nume Partid </th>
                        <th> Obiective </th>
                        <th> Fondator </th>
                    </tr>
                </thead>
                <tbody>                
                    <tr> 
                        <td> Logo </td>
                        <td> Liga Moara cu Noroc </td> 
                        <td> Animalele sunt mândria noastră! </td>    
                        <td> Nume Persoana </td>
                    </tr>
                    <tr>
                        <td> Logo </td>
                        <td> Partidul Puterea Noastră </td>
                        <td> Iubim poporul nostru! </td>   
                        <td> Nume Persoana </td> 
                    </tr>
                    <tr>
                        <td> Logo </td> 
                        <td> Partidul Glasul Pământului </td>
                        <td> Pentru pământ și agricultori! </td>   
                        <td> Nume Persoana </td>
                    </tr>
                    <tr>
                        <td> Logo </td> 
                        <td> Gruparea Forza Eco-Green </td>
                        <td> Susținem reciclarea si sustenabilitatea! </td>    
                        <td> Nume Persoana </td>
                    </tr>
                    <tr> 
                        <td> Logo </td>
                        <td> Partidul Puterea Voastră </td>
                        <td> Valori pro-europene și progresiste! </td>
                        <td> Nume Persoana </td>
                    </tr>
                </tbody>
            </table>
        <h3>
        Urmează să fie propuse o serie de legi amuzante, iar alegerea elevilor va influența viitorul Uniunii. 
        Fiecare lege votată va avea consecințe importante, pe care ei le vor afla la finalul sesiunii. 
        Vor fi voturile in conformitate cu ideologia partidului? Sau poate credințele proprii vor câștiga?
        </h3>
        <h3>
        La finalul jocului, elevii vor ințelege mai bine importanța Uniunii Europene și a procesului legislativ, 
        mai exact cât si de ce este crucial să fie reprezentate toate vocile, în special a lor, în procesul decizional.
        Haideți să explorăm împreună lumea fascinanta a politicii și să dăm viață ideilor noastre!
        </h3>
        <button> Începe-ți aventura LegisLand! </button>
        </>
    )
}

export default GameDescription;