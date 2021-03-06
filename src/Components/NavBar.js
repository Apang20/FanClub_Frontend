import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu'
import Typography from '@material-ui/core/Typography'

class NavBar extends React.Component {
  render() {
    return (
      


      <div id="nav-bar">
      <AppBar>
      <Toolbar>
          <IconButton  >
              <MenuIcon />
          </IconButton>
          <Typography variant="h5">
          </Typography>
          <Typography variant="h1" justify="right" textAlign="right"> 
          {this.props.currentUser ? <Button startIcon={<ShoppingCartIcon />} variant="outlined" color="inherit"> <Link to="/carts">Cart</Link></Button> : null}
          {this.props.currentUser ? <Button startIcon={<AccountCircleIcon />} variant="outlined" color="inherit" > <Link to="/users">Account</Link></Button> : null}
          {this.props.currentUser ? <Button startIcon={<ExitToAppIcon />} variant="outlined" color="inherit" onClick={this.props.logOut}> <Link to="/">LogOut</Link></Button> : <Button startIcon={<AccountCircleIcon />} variant="outlined" color="inherit" ><Link to="/login">Login</Link></Button>}
          {this.props.currentUser ? null : <Button startIcon={<AddBoxIcon />} variant="outlined" color="inherit" ><Link to="/register">Register</Link></Button>}
          </Typography>
      </Toolbar>
  </AppBar>

          <img className="navbar-pic" src="https://www.pngkey.com/png/full/133-1338872_-hayao-miyazaki-princess-mononoke-ponyo-spirited-away.png" />

          

        
      </div>
    )
  }
} 
export default NavBar;


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