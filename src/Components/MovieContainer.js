import React, { Component } from 'react'
import MovieCard from './MovieCard'
import '../App.css'

export default class MovieContainer extends Component {
    render() {
        return (
            <div className="movie-container">
                {this.props.movies.map(movie => <MovieCard movie={movie} user={this.props.currentUser} updateMovieFilter={this.props.updateMovieFilter} />)}

                {this.props.currentUser ? <h1>Movie Container In MC</h1> : null}
            </div>
        )
    }
}