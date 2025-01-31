import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeers () {
  const [data, setData] = useState([]);
  const[userInput, setUserInput]=useState ('')
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setData(response.data))
  }, []);

  useEffect(()=>{
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${userInput}`)
    .then((response)=>{
      setData (response.data)
    })

  },[userInput])

  return (
    <div>
    <input type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)}></input>
      <p>Search</p>
      <br/>
      <br/>
      {data.map((beer) => (
        <div>
          <Link className="home-link" to={`/beers/${beer._id}`}>
            <img className="beers-image" src={beer.image_url} alt="beerImage" />
            <div>
              <h5>{beer.name}</h5>
              <h5>{beer.tagline}</h5>
              <p>Created By: {beer.contributed_by}</p>
            </div>
            <hr/>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllBeers;
