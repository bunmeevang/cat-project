import React from "react";
import './Content.css'


export default function Content({breed}) {
if (breed === undefined) {
    return <h1>loading...</h1>
}
    return (
        <div className="content">
            <img alt='text' src={breed.image.url} className="catImage"/>
            <h2 className="breedName">{breed.name}</h2>
            <div className="borderBox">
                <p className="catInfo">Description: {breed.description}</p>
                <p className="catInfo">Adaptability: {breed.adaptability}/5</p>
                <p className="catInfo">Affection level: {breed.affection_level}/5</p>
                <p className="catInfo">Child friendly: {breed.child_friendly}/5</p>
                <p className="catInfo">Dog friendly: {breed.dog_friendly}/5</p>
                <p className="catInfo">Energy level: {breed.energy_level}/5</p>
                <p className="catInfo">Origin: {breed.origin}</p>
                <p className="catInfo">life span: {breed.life_span}</p>
            </div>

        </div>
    )
}