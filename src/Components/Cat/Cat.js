import React,{useState, useEffect} from 'react'
import './Cat.css';

function Cat() {
    const [url, setUrl] = useState('')
    
    useEffect(()=>{
    fetch_data()
    }, []);
    
    function fetch_data(){
        fetch('https://api.thecatapi.com/v1/images/search').then(res=>{
            if(res.ok){
                return res.json();
            }
            throw new Error('Request Failed')
        },networkError=> console.log(networkError.message)
        ).then(jsonRes=>{
            setUrl(jsonRes[0].url)
        })
    }
    return (
        <div className="cat-main">
            <img alt='text' src={url} className="cat-url"/>
            <button className="cat-button" onClick={fetch_data}>Generate Cats</button>
        </div>
    )
}

export default Cat