import React, { Component } from 'react'
import ItemCard from './ItemCard'
import Search from './Search'
import MovieContainer from './MovieContainer'
import MoreButton from './MoreButton'
import BackButton from './BackButton'


class ItemContainer extends Component {
    render() {
        return (
            <div className="search">
                <Search 
                updateFilter={this.props.updateFilter} 
                movies={this.props.movies} 
                movieFilter={this.props.movieFilter} 
                updateMovieFilter={this.props.updateMovieFilter}/>
                
                                                    

                <div className="movie-container">
                    <MovieContainer 
                    movies={this.props.movies} 
                    movieFilter={this.props.movieFilter} 
                    updateMovieFilter={this.props.updateMovieFilter} 
            
                    />
                    <div className="item-container">

                        <div className="background-img">
                        {this.props.limit + 4 < this.props.itemLength ? <MoreButton moreItems={this.props.moreItems} items={this.props.items}/> : null}
                        {this.props.limit == 0 ? null : <BackButton backItems={this.props.backItems} items={this.props.items}/>} 
                            {this.props.items.map(item => <ItemCard item={item} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} updateCurrentUser={this.props.updateCurrentUser} user={this.props.currentUser} />)}
                            {this.props.limit + 4 < this.props.itemLength ? <MoreButton moreItems={this.props.moreItems} items={this.props.items}/> : null}
                        {this.props.limit == 0 ? null : <BackButton backItems={this.props.backItems} items={this.props.items}/>} 
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};

export default ItemContainer;
 








