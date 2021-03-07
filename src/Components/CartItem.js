import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';


class CartItem extends Component {
  render() {
    // {console.log(this.props.cart)}
    return (
      <div className="cart-card">
        <h2>{this.props.cart.item.name}</h2>
        <h2><img src={this.props.cart.item.image} style={{ width: "250px" }} /></h2>
        <h2>${this.props.cart.item.price}</h2>
        {/*console.log(this.props.cart.id, "cart item string")*/}
        <Button startIcon={<DeleteIcon/>} variant="outlined"  onClick={() => (this.props.removeFromCart(this.props.cart))} className="del-btn" >Delete</Button>
      </div>


    );
  };
}



export default CartItem;













  //   <button onClick={() => props.removeFromCart(props.cart)} className="del-btn"> Delete </button>
  //   <button onClick={() => props.removeFromCart(props.cart)} className="add-btn"> Add  </button>