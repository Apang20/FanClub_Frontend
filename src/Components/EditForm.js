import React, { Component } from 'react'

      class EditForm extends Component {

        state = {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            shippingAddress: ""
        }
        
        handleSubmit(e){ //must match up to keys in localhost
            //console.log(e.target, "Event")
            e.preventDefault()
            let newInfo = {
                username: this.state.username,
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                email: this.state.email,
                phone_number: this.state.phoneNumber,
                shipping_address: this.state.shippingAddress
            }
        
            let reqPack = {
                headers: {"Content-Type":"application/json"},
                method: "PATCH",
                body: JSON.stringify(newInfo)
            }
            console.log(this.props, "Current User in Edit")
          
            fetch("http://localhost:3000/users/" + this.props.currentUser.id, reqPack)
            .then(resp => resp.json())
            .then(newInfo => {this.props.patchInfo(this.state) //newInfo
                 e.target.reset()
            })
        }
        
            render() {
                return (
                    <form onSubmit={(e) => this.handleSubmit(e)} class="m-3">
                    
                        <h2 class="text-light">Edit Account Form:</h2>
                        <div class="row">
                                New Username: 
                            <div class="col-sm">
                                <input onChange={(e) => this.setState({username: e.target.value})}id="usernamevalue" name="username" type="text" class="form-control" placeholder="Enter New Username"/>
                            </div>

                            New First Name: 
                            <div class="col-sm">
                                <input onChange={(e) => this.setState({firstName: e.target.value})}id="firstnamevalue" name="firstName" type="text" class="form-control" placeholder="Enter New First Name"/>
                            </div>

                            New Last Name: 
                            <div class="col-sm">
                                <input onChange={(e) => this.setState({lastName: e.target.value})}id="lastnamevalue" name="lastName" type="text" class="form-control" placeholder="Enter New Last Name"/>
                            </div>

                            New Email: 
                            <div class="col-sm">
                                <input onChange={(e) => this.setState({email: e.target.value})}id="emailvalue" name="email" type="text" class="form-control" placeholder="Enter New Email"/>
                            </div>

                            New Phone Number: 
                            <div class="col-sm">
                                <input onChange={(e) => this.setState({phoneNumber: e.target.value})}id="phonenumbervalue" name="phoneNumber" type="text" class="form-control" placeholder="Enter New Phone Number"/>
                            </div>

                            New Shipping Address: 
                            <div class="col-sm">
                                <input onChange={(e) => this.setState({shippingAddress: e.target.value})}id="shippingaddressvalue" name="shippingAddress" type="text" class="form-control" placeholder="Enter New Shipping Address"/>
                            </div>
                        
                        </div>
                        <input class="btn btn-primary mt-2" id="submit" type="submit"/>
                    </form>
                )
            }
        }
        
 export default EditForm; 
//  <div class="col-sm">
//     <input onChange={(e) => this.setState({lastName: e.target.value})}id="lastnamevalue" name="lastname" type="text" class="form-control" placeholder="Enter Last Name"/>
// </div>

        //     render() {
        //         return (
        //             <div className="edit-form">
        //             <h1></h1>

        //             </div>
        //         )
        //     }
        // }



//{this.props.currentUser ? null : <button><Link to="/edit">Edit Account</Link></button>} 
// class Register extends Component {
//     state = {
//       firstName: "",
//       lastName: "",
//       username: "",
//       email: "",
//       password: "",
//       created: false,
//       errorMessage: "",
//     };
  
//     handleChange = (event) => {
//       const { name, value } = event.target;
  
//       this.setState({
//         [name]: value,
//       });
//     };
  
//     createUser = (event) => {
//       event.preventDefault();
//       event.target.reset();
//       const { firstName, lastName, username, email, password } = this.state; //firstName, LastName,
  
//       let user = {
//         first_name: firstName,
//         last_name: lastName,
//         username: username,
//         email: email,
//         password: password,
//       };
  
//       fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({ user }),
//       })
//         .then((r) => r.json())
//         .then((response) => {
//           if (response.status === "created") {
//             this.setState({ created: true, errorMessage: "" });
//           }
//         })
//         .catch((response) =>
//           this.setState({
//             errorMessage:
//               "Uh-oh! It didn't work...Make sure your server is running!",
//           })
//         );
//     };
  
//     render() {
//       return (
//         <div>
//           {this.state.created ? (
//             <Redirect to="/login" />
//           ) : (
//             <div>
//               <div className="please-log-in">
//                 <p>{this.state.errorMessage}</p>
//               </div>
//               <br />
//               <form onSubmit={this.createUser}>
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   onChange={this.handleChange}
//                 />
//                 <br />
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   onChange={this.handleChange}
//                 />
//                 <br />
//                 <input
//                   type="text"
//                   name="email"
//                   placeholder="Email"
//                   onChange={this.handleChange}
//                 />
//                 <br />
//                 <input
//                   type="text"
//                   name="username"
//                   placeholder="Username"
//                   onChange={this.handleChange}
//                 />
//                 <br />
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   onChange={this.handleChange}
//                 />
//                 <br />
//                 <br />
//                 <button type="submit">Submit</button>
//               </form>
//             </div>
//           )}
//           <br />
//           <br />
//         </div>
//       );
//     }
//   }
  
//   export default Register;