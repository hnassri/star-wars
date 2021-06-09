import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function PeopleInfo(){
    const { id } = useParams(); 
    const [people, setPeople] = useState();
    const [starships, setStarships] = useState([]);    
    useEffect(() => {
        const fetchPeopleData = async () => {
            const people_all = await axios.get("https://swapi.dev/api/starships/" + id + "/");
            if(people_all.data.starships.length > 0){
                people_all.data.starships.forEach(async (element) => {
                    const data = await axios.get(element);
                    setStarships(arr => [...arr, data.data]);
                });
            }
            setPeople(people_all.data);
        }
        fetchPeopleData(); 
    }, [])
    if(people){
        return(
            <div className="PeopleInfo">
                <ul>
                    <li><h4>Nom: {people.name}</h4></li>
                    <li><h4>Couleur des yeux: {people.eye_color}</h4></li>
                    <li><h4>Année de naissance: {people.birth_year}</h4></li>
                    <li><h4>Genre: {people.gender}</h4></li>
                    <li><h4>Date de création: {people.created}</h4></li>
                    <li><h4>Date d'édition: {people.edited}</h4></li>
                    <li><h4>Starships pilotés: {starships.length === 0 ? "Aucun" : <ul>
                        {starships.map((element, index) => {
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

export default PeopleInfo;