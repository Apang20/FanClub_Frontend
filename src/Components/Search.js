// import React, { Component } from 'react'
import { Select } from "@chakra-ui/react"
import React from "react";

const Search = (props) => {
  return (
    <div>

      <br></br>
      <label>
        <h1></h1> <br></br>
        <div className="search">
        <div>
        <img className="navbar-pic" src="https://www.pngkey.com/png/full/133-1338872_-hayao-miyazaki-princess-mononoke-ponyo-spirited-away.png" />
        <br/>
        <br/>
        </div>
        <Select marginLeft="35%" marginRight="35%" color="secondary" variant="flushed" width="large" placeholder="Filter By Ghibli Movie"  onChange={(e) => props.updateFilter(e.target.value)}>
        {props.movies.map(movie => {
          <option value="All">All</option>
            return <option value={movie}> {movie} </option>
          })}
          </Select>

        </div> 
      </label>
    </div>
  );
};

export default Search;

// <select size="large" width="100%" className="select" onChange={(e) => props.updateFilter(e.target.value)}>
//         </select>

// <Autocomplete
//   id="combo-box-demo"
//   options={top100Films}
//   getOptionLabel={(option) => option.title}
//   style={{ width: 300 }}
//   renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
// />







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

