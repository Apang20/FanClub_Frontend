import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class login extends Component {
    state = {
        username: "",
        password: "",
        error: ""
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    };

    login = (event) => {
        event.preventDefault();
        event.target.reset();

        const { username, password } = this.state;
        const user = { username, password };

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user }),
        })
            .then((r) => r.json())
            .then((response) => {
                console.log(response)
                if (response.user){
                    this.props.updateCurrentUser(response.user);
                    localStorage.token = response.jwt;
                }else{
                    this.setState({error: response.message})
                    //console.log(response.message)
                }
                // Dane: 
                // localStorage.token = response.jwt;
                //Video: 
                // if(response.error_message){
                // alert(response.error_message)
                // }else{
                // this.props.updateCurrentUser(response)
                // }
                //this.props.updateCurrentUser(response);
            });
    };

    render() {
        return (
            <div>
            <h3>{this.state.error}</h3>
                <form onSubmit={this.login}>
                    <br />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <br />
                <br />
            </div>
        );
    }
}

export default login;

