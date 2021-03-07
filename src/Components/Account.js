import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Button from '@material-ui/core/Button'


class Account extends Component {
  
  state = {
    showForm: false
  }
  
  handleShowForm = () => {
    this.setState({ showForm: !this.state.showForm })
    // console.log(this.state.showForm)
  }
  
  
  render() {
    console.log(this.props.currentUser, "CurrentUser in Account")

    return (
    
      <div className="form">
      <div>
      <br/>
      <img className="navbar-pic" src="https://www.pngkey.com/png/full/133-1338872_-hayao-miyazaki-princess-mononoke-ponyo-spirited-away.png" />
      </div>  
      <div><h1><b><u>Welcome to Your Account Page!</u></b></h1></div><br></br>

        <h2><b>Username: </b>{this.props.currentUser.username}</h2>
        <h2><b>Name: </b>  {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h2>
        <h2><b>Email: </b> {this.props.currentUser.email}</h2>
        <h2><b>Phone Number:</b>  {this.props.currentUser.phone_number}</h2>
        <h2><b>Shipping Address: </b> {this.props.currentUser.shipping_address}</h2><br></br>
        {this.props.currentUser ? <Button variant="outlined" color="primary"><Link to="/edit">Edit Account</Link></Button> : null}

      </div>
    )
  }
}


export default Account; 

// className="account-page"
//      <h1>Welcome to Your Account Page {this.props.currentUser.first_name} {this.props.currentUser.last_name}! </h1><br></br>
// <h1><b>Welcome to Your Account Page!</b></h1><br></br>
