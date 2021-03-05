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
      <div className="account-page">
        <h1>Welcome to Your Account Page {this.props.currentUser.first_name} {this.props.currentUser.last_name}!</h1><br></br>
        <h2>Username: {this.props.currentUser.username}</h2>
        <h2>Name:  {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h2>
        <h2>Email: {this.props.currentUser.email}</h2>
        <h2>Phone Number: {this.props.currentUser.phone_number}</h2>
        <h2>Shipping Address: {this.props.currentUser.shipping_address}</h2>
        {this.props.currentUser ? <Button variant="outlined" color="primary"><Link to="/edit">Edit Account</Link></Button> : null}

      </div>
    )
  }
}


export default Account; 