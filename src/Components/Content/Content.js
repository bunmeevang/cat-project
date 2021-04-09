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
            <p>Description: {breed.description}</p>
            <p>Adaptability: {breed.adaptability}/5</p>
            <p>Affection level: {breed.affection_level}/5</p>
            <p>Child friendly: {breed.child_friendly}/5</p>
            <p>Dog friendly: {breed.dog_friendly}/5</p>
            <p>Energy level: {breed.energy_level}/5</p>
            <p>Origin: {breed.origin}</p>
            <p>life span: {breed.life_span}</p>

        </div>
    )
}