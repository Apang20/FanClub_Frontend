 import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


      class Account extends Component {
            render() {
                console.log(this.props.currentUser, "CurrentUser in Account")

                return (
                    <div className="account-page">
                    <h1>Welcome to Your Account Page!</h1><br></br>
                    <h2>Username: {this.props.currentUser.username}</h2>
                    <h2>Name:  {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h2>
                    <h2>Email: {this.props.currentUser.email}</h2>
                    <h2>Phone Number: {this.props.currentUser.phone_number}</h2>
                    <h2>Shipping Address: {this.props.currentUser.shipping_address}</h2>
                    {this.props.currentUser ? <button><Link to="/edit">Edit Account</Link></button> : null} 

                    </div>
                )
            }
        }
        // {this.props.items.map(item => <ItemCard item={item} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} updateCurrentUser={this.props.updateCurrentUser}/>)}
// const Profile = (props) => {
//return (props.currentUser ?
// <Card>
//     <Card.Content>
//         <Card.Header>{props.currentUser.username}</Card.Header>
        
//         <Card.Description>{props.currentUser.description</Card.Description>
//     </Card.Content>
// </Card> : null
// );
//}

export default Account; 