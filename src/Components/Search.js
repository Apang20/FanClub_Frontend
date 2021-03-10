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
// <img width="8%" height="10%" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ccaa6b40-c9e1-4fca-a714-e73eb7a0d47d/d998yjs-cbde5b99-d8ed-409d-97a3-e2dc4807c12b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvY2NhYTZiNDAtYzllMS00ZmNhLWE3MTQtZTczZWI3YTBkNDdkXC9kOTk4eWpzLWNiZGU1Yjk5LWQ4ZWQtNDA5ZC05N2EzLWUyZGM0ODA3YzEyYi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.jOOwRQ9Nuo_hoherDGrCkFWIcSqg2wL9C0XevdVXKyU"/>


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

