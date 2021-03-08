import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from "@material-ui/core/styles";

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// import { Paper } from '@material-ui/core/';

import Copyright from './Copyright'

  
  const styles = theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '110%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });



class LoginForm extends Component {

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
        const {classes} = this.props

        return (
           
            <Container component="main" maxWidth="xs">
      <CssBaseline />
      <br/>
      <br/>
      <br/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        
          <LockOutlinedIcon />
        </Avatar>
        
        <Typography component="h1" variant="h5">
          Studio Ghibli Login
        </Typography>
        <form onSubmit={this.login} className={classes.form}>
            <h3>{this.state.error}</h3>
              
        {/*<form className={classes.form} noValidate>*/}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={this.handleChange}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Register Here!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8} >
      </Box>
    </Container>

    );
}
}



export default withStyles(styles)(LoginForm)


//     const useStyles = theme => ({
//       '@global': {
//         body: {
//           backgroundColor: theme.palette.common.white,
//         },
//       },
//       paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       },
//       avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//       }
// });

//         <div className={classes.paper}>
// <Avatar className={classes.avatar}>
//   <LockOutlinedIcon />
// </Avatar>
// </div>




// import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import Button from '@material-ui/core/Button'


// class login extends Component {
//     state = {
//         username: "",
//         password: "",
//         error: ""
//     };

//     handleChange = (event) => {
//         const { name, value } = event.target;

//         this.setState({
//             [name]: value,
//         });
//     };

//     login = (event) => {
//         event.preventDefault();
//         event.target.reset();

//         const { username, password } = this.state;
//         const user = { username, password };

//         fetch("http://localhost:3000/login", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ user }),
//         })
//             .then((r) => r.json())
//             .then((response) => {
//                 console.log(response)
//                 if (response.user){
//                     this.props.updateCurrentUser(response.user);
//                     localStorage.token = response.jwt;
//                 }else{
//                     this.setState({error: response.message})
//                     //console.log(response.message)
//                 }
//                 // Dane: 
//                 // localStorage.token = response.jwt;
//                 //Video: 
//                 // if(response.error_message){
//                 // alert(response.error_message)
//                 // }else{
//                 // this.props.updateCurrentUser(response)
//                 // }
//                 //this.props.updateCurrentUser(response);
//             });
//     };

//     render() {
//         return (
//             <div className="form">
//             <h3>{this.state.error}</h3>
//                 <form onSubmit={this.login}>
//                     <br />
//                     <input
//                         type="text"
//                         varient="outlined"
//                         name="username"
//                         placeholder="Username"
//                         onChange={this.handleChange}
//                     />
//                     <br />
//                     <br></br>
//                     <input
//                         type="password"
//                         varient="outlined"
//                         name="password"
//                         placeholder="Password"
//                         onChange={this.handleChange}
//                     />
//                     <br />
//                     <br />
//                     <br />
//                     <Button variant="outlined" color="primary" type="submit">Submit</Button>
//                 </form>
//                 <br />
//                 <br />
//             </div>
//         );
//     }
// }

// export default login;

