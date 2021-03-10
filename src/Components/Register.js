
import React, {Component} from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import { withStyles } from "@material-ui/core/styles";
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// import React from 'react'; 
// import Link from '@material-ui/core/Link';
// import { styled } from '@material-ui/core/styles';
import { Redirect, Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../Components/Copyright'

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  avatar: {
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,

  },
  form: {
    width: '40%', 
    marginTop: theme.spacing(1),
    margin: theme.spacing(67)

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    created: false,
    errorMessage: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  createUser = (event) => {
    event.preventDefault();
    // event.target.reset();
    const { firstName, lastName, email, phoneNumber, username, password } = this.state; 

    let user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      username: username,
      password: password
      // created: true

    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        // console.log(response, "Register response")
        //         // if (response.status === "created") {
        //         //   this.setState({ created: true, errorMessage: "" });
        //         // }
      })
      .catch((response) =>
        this.setState({
          errorMessage:
            "Uh-oh! It didn't work...Make sure your server is running!",
        })
      );
  };

  render() {
    const {classes} = this.props

    return (
      <Grid container component="main" className={classes.root}>
<CssBaseline />
<Grid item xs >
  <div className={classes.paper}>
    <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
    </Avatar> <br/>
    <Typography component="h1" variant="h5">
    Register
    </Typography>
    <div>
        {this.state.created ? (
            <Redirect to="/login" />
        ) : (
        <div>
            <div>
              <p>{this.state.errorMessage}</p>
            </div>
        

    <form className={classes.form}
          onSubmit={this.createUser}>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstname"
              autoFocus
              onChange={this.handleChange}
              />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lastname"
            autoFocus
            onChange={this.handleChange}
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            autoComplete="phoneNumber"
            autoFocus
            onChange={this.handleChange}
          />
      <TextField
        variant="outlined"
        // color="#6b7d6c"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        type="username"
        autoComplete="username"
        autoFocus
        onChange={this.handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        // color="#6b7d6c"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={this.handleChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Register
      </Button>
      <Grid container>
          <Button component={Link} to="/login"  color="primary" fullWidth>
            Sign in here after registration!
          </Button>
      </Grid>
      <Box mt={10}>
        <Copyright />
      </Box>
    </form>
    </div>
    )}
    </div>
  </div>
</Grid>
</Grid>

    )
  }
 }
      export default withStyles(styles)(Register)









  
//       <Grid container component="main" maxWidth="xs" className={classes.root}>
// <CssBaseline />
// <Grid item xs={12} sm={8} md={5}  elevation={6} >
//   <div className={classes.paper}>
//     <Avatar className={classes.avatar}>
//       <LockOutlinedIcon />
//     </Avatar>
//     <Typography component="h1" variant="h5">
//       Register
//     </Typography>
//     <div>
//         {this.state.created ? (
//             <Redirect to="/login" />
//         ) : (
//         <div>
//             <div className="please-log-in">
//               <p>{this.state.errorMessage}</p>
//             </div>
//         <br />
//     <form className={classes.form}
//           onSubmit={this.createUser}>
//           <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="firstName"
//               label="First Name"
//               name="firstName"
//               autoComplete="firstname"
//               autoFocus
//               onChange={this.handleChange}
//               />
//             <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="lastName"
//             label="Last Name"
//             name="lastName"
//             autoComplete="lastname"
//             autoFocus
//             onChange={this.handleChange}
//           />
//            <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             onChange={this.handleChange}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="phoneNumber"
//             label="Phone Number"
//             name="phoneNumber"
//             autoComplete="phoneNumber"
//             autoFocus
//             onChange={this.handleChange}
//           />
//       <TextField
//         variant="outlined"
//         color="#6b7d6c"
//         margin="normal"
//         required
//         fullWidth
//         id="username"
//         label="Username"
//         name="username"
//         type="username"
//         autoComplete="username"
//         autoFocus
//         onChange={this.handleChange}
//       />
//       <TextField
//         variant="outlined"
//         color="#6b7d6c"
//         margin="normal"
//         required
//         fullWidth
//         name="password"
//         label="Password"
//         type="password"
//         id="password"
//         autoComplete="current-password"
//         onChange={this.handleChange}
//       />
//       <Button
//         type="submit"
//         fullWidth
//         variant="contained"
//         className={classes.submit}
//       >
//         Register
//       </Button>
//       <Grid container>
//           <Button component={Link} to="/login" href="#" variant="body2">
//             Already have an account? Login here!
//           </Button>
//       </Grid>
//       <Box mt={10}>
//         <Copyright />
//       </Box>
//     </form>
//     </div>
//     )}
//     </div>
//   </div>
// </Grid>
// </Grid>

//     )
//   }
//  }

  //===========================================================================================


                      
  //       <Container component="main" maxWidth="xs">
  // <CssBaseline />
  // <br/>
  // <br/>
  // <div className={classes.paper}>
  //   <Avatar className={classes.avatar}>
    
  //     <LockOutlinedIcon />
  //   </Avatar>
    
  //   <Typography component="h1" variant="h5">
  //     Register
  //   </Typography>
  //   <div>
  //   {this.state.created ? (
  //     <Redirect to="/items" />
  //   ) : (
  //       <div>
  //           <p>{this.state.errorMessage}</p>
  //   </div>

  //   <form onSubmit={this.createUser} className={classes.form}>
  //       <h3>{this.state.error}</h3
        
  
  //             <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="firstName"
  //             label="First Name"
  //             name="firstName"
  //             autoComplete="firstname"
  //             autoFocus
  //             onChange={this.handleChange}
  //             />

  //           <TextField
  //           variant="outlined"
  //           margin="normal"
  //           required
  //           fullWidth
  //           id="lastName"
  //           label="Last Name"
  //           name="lastName"
  //           autoComplete="lastname"
  //           autoFocus
  //           onChange={this.handleChange}
  //         />
  //          <TextField
  //           variant="outlined"
  //           margin="normal"
  //           required
  //           fullWidth
  //           id="email"
  //           label="Email"
  //           name="email"
  //           autoComplete="email"
  //           autoFocus
  //           onChange={this.handleChange}
  //         />
  //         <TextField
  //           variant="outlined"
  //           margin="normal"
  //           required
  //           fullWidth
  //           id="phoneNumber"
  //           label="Phone Number"
  //           name="phoneNumber"
  //           autoComplete="phoneNumber"
  //           autoFocus
  //           onChange={this.handleChange}
  //         />
  //           <TextField
  //           variant="outlined"
  //           margin="normal"
  //           required
  //           fullWidth
  //           id="username"
  //           label="Username"
  //           name="username"
  //           autoComplete="username"
  //           autoFocus
  //           onChange={this.handleChange}
  //         />
  //           <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             name="password"
  //             label="Password"
  //             type="password"
  //             id="password"
  //             autoComplete="current-password"
  //             onChange={this.handleChange}
  //         />
  //           <FormControlLabel
  //             control={<Checkbox value="remember" color="primary" />}
  //             label="Remember me"
  //          />
  //           <Button
  //             type="submit"
  //             fullWidth
  //             variant="contained"
  //             color="primary"
  //             className={classes.submit}
  //             href='/login'>
  //             Register
  //           </Button>
  //           <Grid container>
  //             <Grid item xs>
  //               <Link href="/login" variant="body2">
                  
  //               </Link>
  //             </Grid>
  //             <Grid item>
  //               <Link href="/login" variant="body2">
  //                 {"Already have an account or just registered? Login Here!"}
  //               </Link>
  //             </Grid>
  //           </Grid>
            
  //           </form>
  //           </div>
  //           <Box mt={8} >
  //           </Box>
  //           </Container>

  //     );
  //   };
  // };

  



// import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import Button from '@material-ui/core/Button'

// // import TextField from '@material-ui/core/TextField'


// class Register extends Component {
//   state = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     shippingAddress: "",
//     username: "",
//     password: "",
//     created: false,
//     errorMessage: "",
//   };

//   handleChange = (event) => {
//     const { name, value } = event.target;

//     this.setState({
//       [name]: value,
//     });
//   };

//   createUser = (event) => {
//     event.preventDefault();
//     event.target.reset();
//     const { firstName, lastName, email, phoneNumber, shippingAddress, username, password } = this.state; //firstName, LastName,
//     // console.log(email, "Email")
//     // console.log(phoneNumber, "Phone Number")
//     // console.log(event.target, "Event")

//     let user = {
//       first_name: firstName,
//       last_name: lastName,
//       email: email,
//       phone_number: phoneNumber,
//       shipping_address: shippingAddress,
//       username: username,
//       password: password
//     };

//     fetch("http://localhost:3000/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({ user }),
//     })
//       .then((r) => r.json())
//       .then((response) => {
//         console.log(response, "Register response")
//         // if (response.status === "created") {
//         //   this.setState({ created: true, errorMessage: "" });
//         // }
//       })
//       .catch((response) =>
//         this.setState({
//           errorMessage:
//             "Uh-oh! It didn't work...Make sure your server is running!",
//         })
//       );
//   };

//   render() {
//     return (
//       <div>
//         {this.state.created ? (
//           <Redirect to="/login" />
//         ) : (
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
//                   name="phoneNumber"
//                   placeholder="Phone Number"
//                   onChange={this.handleChange}
//                 />
//                 <br />
//                 <input
//                   type="text"
//                   name="shippingAddress"
//                   placeholder="Shipping Address"
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
//                 <Button variant="outlined" color="primary" type="submit">Submit</Button>

//               </form>
//             </div>
//           )}
//         <br />
//         <br />
//       </div>
//     );
//   }
// }

// export default Register;


// <form onSubmit={this.createUser}>
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
//                   name="phoneNumber"
//                   placeholder="Phone Number"
//                   onChange={this.handleChange}
//                 />
//                 <br />
//                 <input
//                   type="text"
//                   name="shippingAddress"
//                   placeholder="Shipping Address"
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
//         <br />
//         <br />
//       </div>
//     );
//   }
// }

