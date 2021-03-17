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
