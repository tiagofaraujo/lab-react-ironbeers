import React from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';  

function Beer () {
    const [foundBeer, setFoundBeer] = useState(null); 
    const { beerId } = useParams();

  
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response=>{
             setFoundBeer(response.data)
            })
            .catch(error => {
                console.log(error);
              });
    
          }, [beerId]);
    
    return (
                   <div>
        {foundBeer && <div>
            <img alt="beerDetails" src={foundBeer.image_url}></img>
            <h1>{foundBeer.name}</h1>
            <p>{foundBeer.tagline}</p>
            <p>{foundBeer.first_brewed}</p>
            <p>{foundBeer.attenuation_level}</p>
            <p>{foundBeer.description}</p>
            <p>{foundBeer.contributed_by}</p>
            <Link to="/beers">Back</Link>
            </div>  
            }
    </div>
    );
};

export default Beer;