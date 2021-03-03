
import React, { Component } from 'react'

        class ItemCard extends Component {
          render() {
              return (
                  <div className="item-card">
                  <img className="item-img" src={this.props.item.image} alt={this.props.item.name}></img>
                  <h2>{this.props.item.name}</h2>
                  <h3>${this.props.item.price}</h3>
                  <p><b>Description:</b> {this.props.item.description}</p>
                  <button onClick={() => (this.props.addToCart(this.props.item))} className="add-btn" >Add me to your cart!</button>
                  </div>
              );
          };
      }
      
      
      export default ItemCard;










        // const ItemCard = ({ item, currentUser, addToCart}) => {


        // {currentUser? <button onClick={() => addToCart(item)}>Add to Shopping Cart</button> : null } 
    
    //   <button onClick={() => props.removeTrans(props.transaction)} className="del-btn"> Delete </button>
    
//     <Card>
//     <Card.Content>
//         <Card.Header>{username}</Card.Header>
        
//         <Card.Description></Card.Description>
//     </Card.Content>
// </Card>