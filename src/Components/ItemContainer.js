import React, { Component } from 'react'
import ItemCard from './ItemCard'
import Search from './Search'
import MovieContainer from './MovieContainer'
import MoreButton from './MoreButton'
import BackButton from './BackButton'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'


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
                    updateMovieFilter={this.props.updateMovieFilter} />


                    <div className="item-container">
                <Typography variant="h2" component="div">
                    Item Container Message
                </Typography>
                <Typography variant="subtitle1">
                    Item Container Subtitle
                </Typography>

                        <div className="background-img">
                        <div className="more-back-btns">
                        {this.props.limit + 6 < this.props.itemLength ? <MoreButton moreItems={this.props.moreItems} items={this.props.items}/> : null}
                        {this.props.limit == 0 ? null : <BackButton backItems={this.props.backItems} items={this.props.items}/>} 
                        </div>
                        {this.props.items.map(item => <ItemCard item={item} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} updateCurrentUser={this.props.updateCurrentUser} user={this.props.currentUser} />)}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};

export default ItemContainer;
 
// {this.props.items.map(item => <ItemCard item={item} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} updateCurrentUser={this.props.updateCurrentUser} user={this.props.currentUser} />)}
//                         {this.props.limit + 4 < this.props.itemLength ? <MoreButton moreItems={this.props.moreItems} items={this.props.items}/> : null}
//                         {this.props.limit == 0 ? null : <BackButton backItems={this.props.backItems} items={this.props.items}/>} 
//                         {this.props.limit + 4 < this.props.itemLength ? <MoreButton moreItems={this.props.moreItems} items={this.props.items}/> : null}
//                         {this.props.limit == 0 ? null : <BackButton backItems={this.props.backItems} items={this.props.items}/>} 

// <Grid container spacing={4} justify="center">
// <Grid item xs={12} sm={6}>
//     <Paper style={{ hieght: 75, width: 50 }} />
// </Grid>
// </Grid>





