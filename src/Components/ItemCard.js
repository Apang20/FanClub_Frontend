
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


class ItemCard extends Component {
    render() {
        return (
            <div className="item-card">
                <img className="item-img" src={this.props.item.image} alt={this.props.item.name}></img>
                <h2><b>{this.props.item.name}</b></h2>
                <h3><b>${this.props.item.price}</b></h3>
                <p><b>Description:</b> {this.props.item.description}</p>
                <Button endIcon={<AddShoppingCartIcon/>} variant="contained" color="secondary" onClick={() => (this.props.addToCart(this.props.item, this.props.user))} className="add-btn" >Add to Cart</Button>
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