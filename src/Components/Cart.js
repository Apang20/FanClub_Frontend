import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CartItem from './CartItem'
import Button from '@material-ui/core/Button'
import AddBoxIcon from '@material-ui/icons/AddBox'



class Cart extends Component {

  state = {
    currentUserData: [],
  }

  componentDidMount() {
    //   fetch("http://localhost:3000/users/" + currentUser.id)
    if (this.props.currentUser) {
      fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
        .then(res => res.json())
        .then(currentUserData => {
          this.setState({ currentUserData })
        })
    }
  }


  render() {
    return (
      <div>      
    
      <div className="font"> {console.log(this.props.carts)}

                               
      
      <b>{this.props.carts.map(cart => <CartItem cart={cart} key={cart.id} removeFromCart={this.props.removeFromCart} />)}</b>
      </div>

      <br></br><br></br>
        <Button startIcon={<AddBoxIcon/>} variant="outlined" color="primary"><Link to="/items">Add Item</Link></Button><br></br>

        </div>

    );
  };
}
export default Cart;

















    // {this.props.carts.map(carts => <CartItem carts={carts} currentUser={this.props.currentUser}/>)}
    // render(){
    //     return ( 
    //       <div>
    //       {this.props.currentUser ?
    //         <div>
    //         <h1>Hello, {this.props.currentUser.username}</h1>
    //         <button><Link to="/directory">Add a new plant to my collection!</Link></button>
    //         {this.state.currentUserData.collections && this.state.currentUserData.collections.map(collection => <CollectionCard collection={collection} deleteCollection={this.props.deleteCollection}/>)}
    //         {console.log(this.state.currentUserData.collections)}
    //         </div>
    //         :
    //         <h1>Please login to see your Plant Collection!</h1>
    //       }
    //       </div>
    //     )
    //   }}
      // {this.props.items.map(items => <CartItem items={items} updateCurrentUser={this.props.updateCurrentUser}/>)}

      //{this.props.carts.map(cart => <CartItem cart={cart} updateCurrentUser={this.props.updateCurrentUser}/>)}

      //map in props 
    //   <Route path="/cart" render={() => <Cart currentUser={this.state.currentUser} user={this.state.user} addToCart={this.addToCart} />}/>
      //

// currentUser={this.state.currentUser} user={this.state.user} addToCart={this.addToCart}
// <button onClick={() => (this.props.addToCart(this.props.item))} className="add-btn" >Add me to your cart!</button>

//addToCart={this.addToCart}
// {this.props.items.map(item => <CartItem item={item} addToCart={this.props.addToCart} updateCurrentUser={this.props.updateCurrentUser}/>)}

//  {/*this.props.item.map((item) => <CartItem clickAction = {this.props.addToCart} item={item}/>
//                     clickAction = {this.props.addToCart})*/}

// <button onClick={() => this.props.donateToy(this.props.toy)} className="del-btn">Donate to GoodWill</button>
//  <img src={this.props.item.image} alt={this.props.item.name} className="cart-image" />
//<p>{this.props.toy.likes} Likes </p>
