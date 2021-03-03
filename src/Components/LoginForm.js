import React from 'react';
//import { withRouter } from "react-router"
//import { Button, Form, Segment, Message } from "semantic-ui-react";
class LoginForm extends React.Component {

//FAKE AUTH THAT CHECKS USERNAME, NOT PASSWORD
    state = {
        username: "",
        password: ""
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }

    handleLoginSubmit = (e) => {
        e.preventDefault();

        fetch ("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        }).then(res => res.json())
        .then(userData => {
            // if(this.props.currentUser){
          fetch("http://localhost:3000/users/" + userData.id)
            .then(res => res.json()) 
            // .then(res => console.log(res))
            .then(fullData => this.props.updateCurrentUser(fullData)
            )
        })
        // }
      }



    //     }).then (res => res.json())
    //       .then(userData => {

    //           if(userData.error_message){
    //               alert(userData.error_mesage)
    //           }else{
    //               this.props.updateCurrentUser(userData)
    //           }
    //       })
    // };

//     state = {
//         input: ""
//     }
//     handleChange = (event) => {
//         this.setState({input: event.target.value})
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         event.target.reset()
//         this.props.logInUser(this.state.input)
//     }

    render() {
        return (
            <form
            onSubmit={this.handleLoginSubmit}
            size="mini"
            key="mini"
            loading={this.props.authenticatingUser}
            error={this.props.failedLogin}
            >
            <input 
            label="username"
            placeholder="username"
            name="username"
            onChange={this.handleChange}
            value={this.state.username} 
            />
           {/* <div>{this.props.failedLogin ? this.props.error : null}</div> */}
           {this.props.failedLogin && 
           <div>{this.props.error}</div>}
            <input 
            type="password"
            label="password"
            placeholder="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            />
            <button type="submit" value="Submit">Login</button>
        </form>
            // <form onSubmit={(event) => this.handleSubmit(event)}>
            //     <input type="text" placeholder="enter your username" placeholder="enter your password"
            //         onChange={this.handleChange}></input>
            //     <input type="submit"></input>   
            // </form>
        )
    }
}

export default LoginForm;

//-------------------------------------------------------------------

// import React, { Component } from "react";
// import { Redirect } from "react-router-dom";

// class login extends Component {
//   state = {
//     username: "",
//     password: "",
//   };

//   handleChange = (event) => {
//     const { name, value } = event.target;

//     this.setState({
//       [name]: value,
//     });
//   };

//   login = (event) => {
//     event.preventDefault();
//     event.target.reset();

//     const { username, password } = this.state;
//     const user = { username, password };

//     fetch("http://localhost:3000/login", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ user }),
//     })
//       .then((r) => r.json())
//       .then((response) => {
//         localStorage.token = response.jwt;
//         this.props.setCurrentUser(response.user);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.login}>
//           <br />
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             onChange={this.handleChange}
//           />
//           <br />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={this.handleChange}
//           />
//           <br />
//           <br />
//           <button type="submit">Submit</button>
//         </form>
//         <br />
//         <br />
//       </div>
//     );
//   }
// }

// export default login;
