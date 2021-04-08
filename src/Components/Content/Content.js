import React, {useState, useEffect} from "react";
import { Route, Redirect} from "react-router-dom";
// import Breed from "./Components/Breed/Breed";

export default function Content({breed}) {
if (breed === undefined) {
    return <h1>loading...</h1>
}
    return (
        <div className="content">
            <img alt='text' src={breed.image.url} className="catImage"/>
            <h2>{breed.name}</h2>
            <p>Origin: {breed.origin}</p>
            <p>life span: {breed.life_span}</p>
            <p>Description: {breed.description}</p>

        </div>
    )
}