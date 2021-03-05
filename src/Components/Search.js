// import React, { Component } from 'react'
import React from "react";

const Search = (props) => {
  return (
    <div>

      <br></br>
      <label>
        <strong>Filter by Movie: </strong> <br></br>
        <select onChange={(e) => props.updateFilter(e.target.value)}>
          <option value="All">All</option>
          {props.movies.map(movie => {
            return <option value={movie}> {movie} </option>
          })}
        </select>
      </label>
    </div>
  );
};

export default Search;









//   <label>
//   <strong>Filter By Ghibli Movies:</strong> <br></br>
//   <select onChange={(e) => props.updateFilter(e.target.value)}>
//     <option value="All">All</option>
//     <option value="Ghibli">Ghibli</option>
//     <option value="My Nieghbor Totoro">My Nieghbor Totoro</option>
//     <option value="Ponyo">Ponyo</option>
//     <option value="Princess Mononoke">Princess Mononoke</option>
//     <option value="Howls Moving Castle">Howls Moving Castle</option>
//     <option value="Kiki's Delivery Service">Kiki's Delivery Service</option>
//     <option value="Spirited Away">Spirited Away</option>
//   </select>
// </label>


{/*<label>
        <strong>Search Stocks:</strong>
        <input onChange={(e) => props.updateSearch(e.target.value)} />
      </label> 
<br></br>
      <strong>Sort:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={props.sort === "Alphabetically"}
          onChange={(e) => props.updateSort(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={props.sort === "Price"}
          onChange={(e) => props.updateSort(e.target.value)}
        />
        Price
      </label>
      <label>
        <input
          type="radio"
          value="None"
          checked={props.sort === "None"}
          onChange={(e) => props.updateSort(e.target.value)}
        />
        None
      </label>
      <br /> 
*/}

