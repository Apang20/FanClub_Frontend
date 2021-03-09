// import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
// import Feature from './Components/Feature'

const styles = theme => ({
  mainFeaturedPost: {
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(8),
    backgroundImage: 'url(https://i.imgur.com/VYBxMKp.gif)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 500,
    left: 470,
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    marginBottom: theme.spacing(25),
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5),
    //   padding: theme.spacing(40),
      paddingRight: 0,
    },
  },
});

class Account extends Component{ 
  
    state = {
    showForm: false
  }
  
  handleShowForm = () => {
    this.setState({ showForm: !this.state.showForm })
    // console.log(this.state.showForm)
  }
  
render(){
    const {classes} = this.props
    // console.log(this.props.currentUser)
    // debugger 

return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://media.giphy.com/media/AebNPktTHrdYc/giphy.gif)`
}}>
{/* Increase the priority of the hero background image */}
{<img style={{ display: 'none' }} src={`url(https://data.whicdn.com/images/159503389/original.gif)`} alt={classes.imageText} />}
{/**/}<div className={classes.overlay} />

<Grid container spacing={8} justify="center">
<Grid item md={5}>
<div className={classes.mainFeaturedPostContent} container spacing={3} justify="center">
<Typography className={classes.title} justify="center" component="h1" variant="h3" color="inherit" style={{fontFamily: 'Vidaloka'}}><br/><br/>
<b> Ghibli Account Page</b>
</Typography>
<br/>
<Typography className={classes.subTitle} spacing={3} justify="center"variant="h4" color="inherit" style={{fontFamily: 'Quicksand'}} paragraph> <br/> 
<h2><u>Username</u>:           {this.props.currentUser.username}</h2>
<h2><u>Email</u>:              {this.props.currentUser.email}</h2><br/><br/>
{this.props.currentUser ? <Button variant="outlined" color="primary" style={{fontFamily: 'Vidaloka'}}><Link to="/edit">Edit Account</Link></Button> : null}

</Typography>
</div>
</Grid>
</Grid>
</Paper>
);
}}

export default withStyles(styles)(Account)

// <h2><b>Phone Number:</b>  {this.props.currentUser.phone_number}</h2>
// <h2><b>Name: </b>  {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h2>
// <h2><b>Shipping Address: </b> {this.props.currentUser.shipping_address}</h2><br></br>
// {this.props.currentUser.username}













// import React, { Component } from 'react'
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
// import Button from '@material-ui/core/Button'


// class Account extends Component {
  
//   state = {
//     showForm: false
//   }
  
//   handleShowForm = () => {
//     this.setState({ showForm: !this.state.showForm })
//     // console.log(this.state.showForm)
//   }
  
  
//   render() {
//     console.log(this.props.currentUser, "CurrentUser in Account")

//     return (
    
//       <div className="form" style={{fontFamily: 'Vidaloka'}}>
//       <div>
//       <br/>
//       <img className="navbar-pic" src="https://www.pngkey.com/png/full/133-1338872_-hayao-miyazaki-princess-mononoke-ponyo-spirited-away.png" />
//       </div>  
//       <div><h1><b><u>Welcome to Your Account Page!</u></b></h1></div><br></br>

//         <h2><b>Username: </b>{this.props.currentUser.username}</h2>
//         <h2><b>Name: </b>  {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h2>
//         <h2><b>Email: </b> {this.props.currentUser.email}</h2>
//         <h2><b>Phone Number:</b>  {this.props.currentUser.phone_number}</h2>
//         <h2><b>Shipping Address: </b> {this.props.currentUser.shipping_address}</h2><br></br>
//         {this.props.currentUser ? <Button variant="outlined" color="primary" style={{fontFamily: 'Vidaloka'}}><Link to="/edit">Edit Account</Link></Button> : null}

//       </div>
//     )
//   }
// }


// export default Account; 

// className="account-page"
//      <h1>Welcome to Your Account Page {this.props.currentUser.first_name} {this.props.currentUser.last_name}! </h1><br></br>
// <h1><b>Welcome to Your Account Page!</b></h1><br></br>
