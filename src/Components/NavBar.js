import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputBase from '@material-ui/core/InputBase';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(140),
    padding: theme.spacing(1, 1, 1, 1),
  },

});


class NavBar extends React.Component {
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root} >
      <AppBar position="static">
      <Toolbar>
      <Typography className={classes.subTitle} variant="h6" color="inherint" style={{fontFamily: 'Quicksand'}} >
      {/*<img  width="30%" height="30%" src="https://i.pinimg.com/originals/9d/d1/a0/9dd1a0c90caa865e3718947e2b91d35e.gif"/>*/}
      </Typography>
      
      <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="open drawer"
      >
      
      </IconButton>
      
      <InputBase/>
      
      <Typography className={classes.title} variant="h4" noWrap>
      {this.props.currentUser ? <Button startIcon={<ShoppingCartOutlinedIcon />}variant="outlined" color="inherit" style={{fontFamily: ''}} > <Link to="/carts">Cart</Link></Button> : null} 
      {this.props.currentUser ? <Button startIcon={<AccountBoxOutlinedIcon />} variant="outlined" color="inherit" style={{fontFamily: ''}}> <Link to="/users">Account</Link></Button> : null}
      {this.props.currentUser ? <Button startIcon={<ExitToAppIcon />} variant="outlined" color="inherit" style={{fontFamily: ''}} onClick={this.props.logOut}> <Link to="/">LogOut</Link></Button> : <Button startIcon={<AccountBoxOutlinedIcon />} variant="outlined" color="inherit" style={{fontFamily: ''}}><Link to="/login">Login</Link></Button>}
      {this.props.currentUser ? null : <Button startIcon={<LockOutlinedIcon />} variant="outlined" color="inherit" ><Link to="/register">Register</Link></Button>}
      </Typography>
      </Toolbar>
      </AppBar>
      </div>
  );
}
}
  
export default withStyles(styles)(NavBar);

// <img  width="50%" height="50%" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/40fe277f-9886-433e-9cfb-a905e27e065f/d7savcu-e559cd72-f703-4ade-8fd7-4cf45d8f5e78.gif"/>


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