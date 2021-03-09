import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu'
import Typography from '@material-ui/core/Typography'

import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


// import React from 'react';
import { fade, withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const styles = theme => ({
  root: {
    flexGrow: 1,
    // marginTop: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(142),
    padding: theme.spacing(5, 1, 5, 5),
    // marginTop: theme.spacing(2),


    // position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },
    // marginLeft: theme.spacing(0),
    // height: "100%",
    // width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   marginLeft: theme.spacing(0),
    //   width: 'auto',
    // },
    // borderRadius: theme.shape.borderRadius,
  },

  // title: {
  //   flexGrow: 1,
  //   display: 'none',
  //   [theme.breakpoints.up('sm')]: {
  //     display: 'block',
  //   },
  // },
  // search: {
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: fade(theme.palette.common.white, 0.25),
  //   },
  //   marginLeft: theme.spacing(1), 
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(1),
  //     width: 'auto',
  //   },
  // },
  // searchIcon: {
  //   padding: theme.spacing(0, 2),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // inputRoot: {
  //   color: 'inherit',
  // },
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 5),
  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  //   transition: theme.transitions.create('width'),
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     width: '12ch',
  //     '&:focus': {
  //       width: '20ch',
  //     },
  //   },
  // },
});


class NavBar extends React.Component {
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root} >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
       
          <InputBase/>

          <Typography className={classes.title} variant="h4" noWrap>
          {this.props.currentUser ? <Button startIcon={<ShoppingCartOutlinedIcon />}variant="outlined" color="inherit" style={{fontFamily: 'Vidaloka'}} > <Link to="/carts">Cart</Link></Button> : null} 
          {this.props.currentUser ? <Button startIcon={<AccountBoxOutlinedIcon />} variant="outlined" color="inherit" style={{fontFamily: 'Vidaloka'}}> <Link to="/users">Account</Link></Button> : null}
          {this.props.currentUser ? <Button startIcon={<ExitToAppIcon />} variant="outlined" color="inherit" style={{fontFamily: 'Vidaloka'}} onClick={this.props.logOut}> <Link to="/">LogOut</Link></Button> : <Button startIcon={<AccountBoxOutlinedIcon />} variant="outlined" color="inherit" style={{fontFamily: 'Vidaloka'}}><Link to="/login">Login</Link></Button>}
          {this.props.currentUser ? null : <Button startIcon={<LockOutlinedIcon />} variant="outlined" color="inherit" ><Link to="/register">Register</Link></Button>}
          </Typography>
          </Toolbar>
          </AppBar>
          </div>
  );
}
}
  
export default withStyles(styles)(NavBar);



// class NavBar extends React.Component {
//   render() {
//     return (
      
//       <div id="nav-bar">
//       <AppBar position="static" alignItems="right" >
//       <Toolbar alignItems="right">
//           <IconButton alignItems="right" >
//               <MenuIcon />
//           </IconButton>
//           <Typography variant="h5">
//           </Typography>
//           <div className="nav-bar-btns" justify="right" alignItems="right">
//           <Typography variant="h1" textAlign="right"> 
//           {this.props.currentUser ? <Button startIcon={<ShoppingCartOutlinedIcon />}variant="outlined" color="inherit" style={{fontFamily: 'Vidaloka'}} > <Link to="/carts">Cart</Link></Button> : null}
//           {this.props.currentUser ? <Button startIcon={<AccountBoxOutlinedIcon />} variant="outlined" color="inherit" style={{fontFamily: 'Vidaloka'}}> <Link to="/users">Account</Link></Button> : null}
//           {this.props.currentUser ? <Button startIcon={<ExitToAppIcon />} variant="outlined" color="inherit" style={{fontFamily: 'Vidaloka'}} onClick={this.props.logOut}> <Link to="/">LogOut</Link></Button> : <Button startIcon={<AccountBoxOutlinedIcon />} variant="outlined" color="inherit" style={{fontFamily: 'Vidaloka'}}><Link to="/login">Login</Link></Button>}
//           {this.props.currentUser ? null : <Button startIcon={<LockOutlinedIcon />} variant="outlined" color="inherit" ><Link to="/register">Register</Link></Button>}
//           </Typography>
//           </div>
//       </Toolbar>
//   </AppBar>
  
//   </div>

        
        
//     )
//   }
// } 
// export default withStyles(styles)(NavBar)

// <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={open}
//                 onClose={handleClose}
//               >



// export default NavBar;
// <div>
//   <img className="navbar-pic" src="https://www.pngkey.com/png/full/133-1338872_-hayao-miyazaki-princess-mononoke-ponyo-spirited-away.png" />
//   </div>


//        <Button onClick={() => alert('alert message')} size="small" variant="contained" color="primary"> TEST BTN</Button>

// <Button
//         endIcon={<SaveIcon/>}
//          size="small" 
//          variant="contained" "outlined"
//          color="inherit" > 
//          TEST BTN
//          </Button>

//         {this.props.currentUser ?  <Search filter={this.props.filter} updateFilter={this.props.updateFilter}/> : null }
//        {this.props.currentUser ? <button onClick={this.props.logOut}><Link to="/">Logout</Link></button> && <Search filter={this.props.filter} updateFilter={this.props.updateFilter}/> : <button><Link to="/login">Login</Link></button>} 



// class NavBar extends React.Component {
//   render() {
//     return (


//       <div id="nav-bar">
//         <img className="navbar-pic" src="https://www.pngkey.com/png/full/133-1338872_-hayao-miyazaki-princess-mononoke-ponyo-spirited-away.png" />

//         {this.props.currentUser ? <Button startIcon={<ShoppingCartIcon/>} variant="outlined" color="primary"> <Link to="/carts">Cart</Link></Button> : null}
//         {this.props.currentUser ? <Button startIcon={<AccountCircleIcon/>} variant="outlined" color="primary" > <Link to="/users">Account</Link></Button> : null}
//         {this.props.currentUser ? <Button startIcon={<ExitToAppIcon/>} variant="outlined" color="secondary" onClick={this.props.logOut}> <Link to="/">LogOut</Link></Button> : <Button startIcon={<AccountCircleIcon/>} variant="outlined" color="inherint"><Link to="/login">Login</Link></Button>}
//         {this.props.currentUser ? null : <Button startIcon={<AddBoxIcon/>} variant="outlined" color="primary" ><Link to="/register">Register</Link></Button>}


//       </div>
//     )
//   }
// }
// export default NavBar;

// <AppBar position="static">
// <Toolbar>
//   <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//     <MenuIcon />
//   </IconButton>
//   <Typography variant="h6" className={classes.title}>
//     News
//   </Typography>
//   <Button color="inherit">Login</Button>
// </Toolbar>
// </AppBar>