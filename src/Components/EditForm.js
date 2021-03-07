import React, { Component } from 'react'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'


class EditForm extends Component {

    state = {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        shippingAddress: ""
    }

    handleSubmit(e) { //must match up to keys in localhost
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
            headers: { "Content-Type": "application/json" },
            method: "PATCH",
            body: JSON.stringify(newInfo)
        }
        console.log(this.props, "Current User in Edit")

        fetch("http://localhost:3000/users/" + this.props.currentUser.id, reqPack)
            .then(resp => resp.json())
            .then(newInfo => {
                this.props.patchInfo(this.state) //newInfo
                // e.target.reset()
            })
    }


    render() {
        return (
            <div className="form">
            <div>
            <br/>
      <img className="navbar-pic" src="https://www.pngkey.com/png/full/133-1338872_-hayao-miyazaki-princess-mononoke-ponyo-spirited-away.png" />
      </div>  
            <form onSubmit={(e) => this.handleSubmit(e)} >

                <div className="form">
                    <TextField
                        varient="outlined"
                        color="primary"
                        type="text"
                        onChange={(e) => this.setState({ username: e.target.value })}
                        placeholder="Username"
                        class="form-control"
                        id="usernamevalue"
                        name="username"
                    />

                    <div className="form">
                        <TextField
                            varient="outlined"
                            color="primary"
                            type="text"
                            onChange={(e) => this.setState({ firstName: e.target.value })}
                            placeholder="First Name"
                            class="form-control"
                            id="firstnamevalue"
                            name="firstName"
                        />

                        <div className="form">
                            <TextField
                                varient="outlined"
                                color="primary"
                                type="text"
                                onChange={(e) => this.setState({ lastName: e.target.value })}
                                placeholder="Last Name"
                                class="form-control"
                                id="lastnamevalue"
                                name="lastName"
                            />

                            <div className="form">
                                <TextField
                                    varient="outlined"
                                    color="primary"
                                    type="email"
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                    placeholder="Email@gmail.com"
                                    class="form-control"
                                    id="emailvalue"
                                    name="emailName"
                                />

                                <div className="form">
                                    <TextField
                                        varient="outlined"
                                        color="primary"
                                        type="text"
                                        onChange={(e) => this.setState({ phoneNumber: e.target.value })}
                                        placeholder="Phone Number"
                                        class="form-control"
                                        id="phonenumbervalue"
                                        name="phoneName"
                                    />

                                    <div className="form">
                                        <TextField
                                            varient="outlined"
                                            color="primary"
                                            type="text"
                                            onChange={(e) => this.setState({ shippingAddress: e.target.value })}
                                            placeholder="Shipping Address"
                                            class="form-control"
                                            id="shippingaddressvalue"
                                            name="shippingAddress"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input  class="button" id="submit" type="submit" />
                </form>
                </div>
        )
    }
}

export default EditForm;










// <FormControlLabel>
// <form onSubmit={(e) => this.handleSubmit(e)} class="m-3">

//     <h2 class="text-light">Edit Account Form:</h2> 
//     <div class="row">
//         New Username:
//                 <div class="col-sm">
//             <input onChange={(e) => this.setState({ username: e.target.value })} id="usernamevalue" name="username" type="text" class="form-control" placeholder="Enter New Username" />
//         </div>

//                 New First Name:
//                 <div class="col-sm">
//             <input onChange={(e) => this.setState({ firstName: e.target.value })} id="firstnamevalue" name="firstName" type="text" class="form-control" placeholder="Enter New First Name" />
//         </div>

//                 New Last Name:
//                 <div class="col-sm">
//             <input onChange={(e) => this.setState({ lastName: e.target.value })} id="lastnamevalue" name="lastName" type="text" class="form-control" placeholder="Enter New Last Name" />
//         </div>

//                 New Email:
//                 <div class="col-sm">
//             <input onChange={(e) => this.setState({ email: e.target.value })} id="emailvalue" name="email" type="text" class="form-control" placeholder="Enter New Email" />
//         </div>

//                 New Phone Number:
//                 <div class="col-sm">
//             <input onChange={(e) => this.setState({ phoneNumber: e.target.value })} id="phonenumbervalue" name="phoneNumber" type="text" class="form-control" placeholder="Enter New Phone Number" />
//         </div>

//                 New Shipping Address:
//                 <div class="col-sm">
//             <input onChange={(e) => this.setState({ shippingAddress: e.target.value })} id="shippingaddressvalue" name="shippingAddress" type="text" class="form-control" placeholder="Enter New Shipping Address" />
//         </div>

//     </div>
//     <input class="btn btn-primary mt-2" id="submit" type="submit" />
// </form>
// </FormControlLabel>