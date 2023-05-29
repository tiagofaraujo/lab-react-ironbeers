import React from "react";
import { Link } from "react-router-dom";
import BeersImg from "../assets/beers.png";
import NewBeerImg from "../assets/new-beer.png";
import RandomBeerImg from "../assets/random-beer.png";

function Homepage() {
  return (
    <div>
      <Link className="home-link" to="/beers">
        <img src={BeersImg} alt="" />
        <h3>All Beers</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur lectus in elit finibus eleifend.
        </p>
      </Link>
      <Link className="home-link" to="/new-beer">
        <img src={NewBeerImg} alt="" />
        <h3>New Beer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur lectus in elit finibus eleifend.
        </p>
      </Link>
      <Link className="home-link" to="/random-beer">
        <img src={RandomBeerImg} alt="" />
        <h3>Random Beer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur lectus in elit finibus eleifend.
        </p>
      </Link>
    </div>
  );
}

export default Homepage;
