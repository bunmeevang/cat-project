import React from "react";
import { Route, Redirect} from "react-router-dom";
// import Breed from "./Components/Breed/Breed";

export default function Content({breed}) {
    return (
        <div className="content">
            <h2>{breed}</h2>
        </div>
    )
}