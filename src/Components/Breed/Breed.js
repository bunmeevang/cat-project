import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import './Breed.css';

const url = 'https://api.thecatapi.com/v1/breeds';

function Breed() {
    const [ breedUrl, setBreedUrl ] = useState([])

    function fetch_data(){
        fetch(url, {
            headers: {
                'x-api-key': '8ce8c2fe-3566-47a6-80bb-8e8492cc8ac2'
            }
        }).then(res=>{
            if(res.ok){
                return res.json();
            }
            throw new Error('Request Failed')
        },networkError=> console.log(networkError.message)
        ).then(jsonRes=>{
            // console.log(jsonRes)
            setBreedUrl(jsonRes)
        })
    }

    useEffect(()=>{
        fetch_data()
        }, []);

    return (
        <div>
            <h2 className="catBreeds">Cat Breeds</h2>
            <div className="breed2">
            {breedUrl.map((breed, i) => {
                return (
                    <div key={i}>
                        <Link to={`/${breed.id}`} className="breedId">
                            <h2 className="breed">{breed.name}</h2>
                        </Link>
                        
                    </div>    
                )
            })}      
            </div>
        </div>
    )
}

export default Breed