import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div id="nav-bar">
        <img className="navbar-pic" src="https://www.pngkey.com/png/full/133-1338872_-hayao-miyazaki-princess-mononoke-ponyo-spirited-away.png" />

        {this.props.currentUser ? <button><Link to="/carts">Cart</Link></button> : null}
        {this.props.currentUser ? <button><Link to="/users">Account</Link></button> : null}
        {this.props.currentUser ? <button onClick={this.props.logOut}><Link to="/">Logout</Link></button> : <button><Link to="/login">Login</Link></button>}
        {this.props.currentUser ? null : <button><Link to="/register">Register</Link></button>}
      </div>
    )
  }
}
export default NavBar;

















  //       {this.props.currentUser ?  <Search filter={this.props.filter} updateFilter={this.props.updateFilter}/> : null }
//        {this.props.currentUser ? <button onClick={this.props.logOut}><Link to="/">Logout</Link></button> && <Search filter={this.props.filter} updateFilter={this.props.updateFilter}/> : <button><Link to="/login">Login</Link></button>} 



