import axios from "axios";
import React, {useState, useEffect} from "react";


function PeopleAll() {
    const [people, setPeople] = useState();
    async function fetchPeople(link = "https://swapi.dev/api/people/"){
        const people_all = await axios.get(link);
        setPeople(people_all);
    }
    useEffect(() => {
        fetchPeople(); 
    }, [])
    if(people){
        return(
            <div className="PeopleAll">
                <label>Rechercher un personnage</label>
                <div>
                    <input placeholder="Ex: r2d2" onChange={(e) => fetchPeople("https://swapi.dev/api/people/?search=" + e.target.value)}/>
                </div>
                { people.data.previous !== null && <button onClick={() => fetchPeople(people.data.previous)}>Précédent</button>}
                { people.data.next !== null && <button onClick={() => fetchPeople(people.data.next)}>Suivant</button>}
                { people.data.results.map((element, index) => {
                    return (
                        <h3 key={index}>{element.name}</h3>
                    )
                })}
            </div>
        )
    }

    return null;
    
}

export default PeopleAll;