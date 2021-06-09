import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams, Link} from "react-router-dom";

function StarshipInfo(){
    const { id } = useParams(); 
    const [starship, setStarship] = useState();    
    const [pilots, setPilots] = useState([]);    
    useEffect(() => {
        const fetchStarship = async () => {
            const starship = await axios.get("https://swapi.dev/api/starships/" + id + "/");
            if(starship.data.pilots.length > 0){
                starship.data.pilots.forEach(async (element) => {
                    const data = await axios.get(element);
                    setPilots(arr => [...arr, data.data]);
                });
            }
            setStarship(starship.data);
        }
        fetchStarship(); 
    }, [])
    if(starship){
        return(
            <div className="starshipInfo">
                <ul>
                    <li><h4>Nom: {starship.name}</h4></li>
                    <li><h4>Modèle: {starship.model}</h4></li>
                    <li><h4>Fabriquant: {starship.manufacturer}</h4></li>
                    <li><h4>Pilotes du vaisseau: {pilots.length === 0 ? "Aucun" : <ul>
                        {pilots.map((element, index) => {
                            return(
                                <li key={index}>{element.name}</li>
                            )
                        })}
                        </ul>}
                    </h4></li>
                </ul>
            </div>
        )
    }

    return (
        <h1>En cours de chargement</h1>
    );
}

export default StarshipInfo;