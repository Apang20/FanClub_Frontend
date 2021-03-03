import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
//import ReactDOM from 'react-dom'
import LoginForm from './LoginForm'
// import Account from './Account'
// import LoginForm from './Components/LoginForm'
//import SignUp from './Components/SignUp'

class NavBar extends React.Component{
    render(){
    return (
      <div id="nav-bar">
      <img className = "navbar-pic" src="https://www.pngkey.com/png/full/133-1338872_-hayao-miyazaki-princess-mononoke-ponyo-spirited-away.png"/>

       {this.props.currentUser ? <button><Link to="/carts">Cart</Link></button> : null} 
       {this.props.currentUser ? <button><Link to="/users">Account</Link></button> : null} 
       {this.props.currentUser ? <button onClick={this.props.logOut}><Link to="/">Logout</Link></button> : <button><Link to="/login">Login</Link></button>} 
       {this.props.currentUser ? null : <button><Link to="/register">Register</Link></button>} 

      </div>
    )
  }}
  export default NavBar; 

  //                  <button onClick={() => (this.props.addToCart(this.props.item))} className="add-btn" >Add me to your cart!</button>
// this.state.currentUser == null ? <LoginForm updateCurrentUser={this.updateCurrentUser} /> : <Redirect to="/items"/>
//logOut={this.logOut