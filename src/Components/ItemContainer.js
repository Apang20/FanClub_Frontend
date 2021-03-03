import React, { Component } from 'react'
import ItemCard  from './ItemCard'
// import ItemDetail  from './ItemDetail'

componentDidMount(){
    if (this.props.currentUser){
      fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
      .then(res => res.json())
      .then(currentUserData => {
      this.setState({currentUserData})
    })
    }
  }

class ItemContainer extends Component {
    render() {
        return(
            <div className="item-container">
            <div className="background-img">
            {this.props.items.map(item => <ItemCard item={item} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} updateCurrentUser={this.props.updateCurrentUser}/>)}
            This is my ItemContainer
            </div>
            </div>
          
            )
    }
}

export default ItemContainer;