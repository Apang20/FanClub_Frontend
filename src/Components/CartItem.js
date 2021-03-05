import React, { Component } from 'react'

class CartItem extends Component {
  render() {
    // {console.log(this.props.cart)}
    return (
      <div className="cart-item">
        <h2>{this.props.cart.item.name}</h2>
        <h2><img src={this.props.cart.item.image} style={{ width: "400px" }} /></h2>
        <h2>${this.props.cart.item.price}</h2>
        {/*console.log(this.props.cart.id, "cart item string")*/}
        <button onClick={() => (this.props.removeFromCart(this.props.cart))} className="del-btn" > Delete from Cart </button>
      </div>


    );
  };
}



export default CartItem;













  //   <button onClick={() => props.removeFromCart(props.cart)} className="del-btn"> Delete </button>
  //   <button onClick={() => props.removeFromCart(props.cart)} className="add-btn"> Add  </button>