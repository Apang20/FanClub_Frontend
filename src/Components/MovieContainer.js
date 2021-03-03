import React, { Component } from 'react'
import MovieCard  from './MovieCard'
import '../App.css'

export default class MovieContainer extends Component {
    render() {
        return (
            <div className="movie-container">
             <p></p>
            <MovieCard> </MovieCard>
            </div>
        )
    }
}

// <h1> This is my MovieContainer</h1>

// export default class TeamContainer extends Component {
//     render() {
//         return (
//             <div className="border border-warning bg-grey container mt-2 p-3">
//                 <h3 className="text-center text-light"> My team</h3>
//                 <div className="row justify-content-center">
//                     <div className="card-deck">
//                         {this.props.team.map(pokemon => <Card clickAction={this.props.removeFromTeam} pokemon={pokemon} />
//                         )}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
