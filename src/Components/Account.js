 import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


      class Account extends Component {
            render() {
                return (
                    <div className="account-page">
                    <h1>Welcome to Your Account Page {this.props.currentUser.username}!</h1>
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