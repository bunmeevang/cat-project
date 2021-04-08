import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'

const url = 'https://api.thecatapi.com/v1/breeds';

function Breed() {
    const [ breedUrl, setBreedUrl ] = useState([])

    function fetch_data(){
        fetch(url).then(res=>{
            if(res.ok){
                return res.json();
            }
            throw new Error('Request Failed')
        },networkError=> console.log(networkError.message)
        ).then(jsonRes=>{
            setBreedUrl(jsonRes)
        })
    }

    useEffect(()=>{
        fetch_data()
        }, []);

    return (
        <div>
            <h1>Cat breeds</h1>
            {breedUrl.map((breed, i) => {
                return (
                    <div key={i}>
                        <Link to={`/breed/${breed.id}`}>
                            <h2>Hello</h2>
                        </Link>
                        
                    </div>    
                )
            })}      
        </div>
    )
}

export default Breed