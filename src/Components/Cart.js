import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CartItem from './CartItem'
import Button from '@material-ui/core/Button'
import AddBoxIcon from '@material-ui/icons/AddBox'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

// import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import { withStyles } from "@material-ui/core/styles";
import Copyright from '../Components/Copyright'

const styles = theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(18),
    // backgroundImage: 'url(https://media.giphy.com/media/AdtvZ8gu9gZ32/giphy.gif)',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',

  },
  heroButtons: {
    // marginTop: theme.spacing(4),
  },
  cardGrid: {
    height: '100%',
    width: '100%',
    position: 'relative',
    display: 'flex',
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(9),
    // backgroundColor: theme.palette.background.paper,
    // backgroundImage: 'url(https://media.giphy.com/media/AdtvZ8gu9gZ32/giphy.gif)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: theme.palette.grey[500],

  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

  },
  cardMedia: {
    paddingTop: '60%', // 16:9 //'56.25%'
  },
  cardContent: {
    flexGrow: 10,
  },
  footer: {
    // backgroundColor: theme.palette.grey[200],
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 9];
// const cards = this.props.carts 

class Cart extends Component {

  state = {
    currentUserData: [],
  }

  componentDidMount() {
    //   fetch("http://localhost:3000/users/" + currentUser.id)
    if (this.props.currentUser) {
      fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
        .then(res => res.json())
        .then(currentUserData => {
          this.setState({ currentUserData })
        })
    }
  }
  
  renderCards = (array) => {
    const {classes} = this.props

    return array.carts.map((cart_item) => ( 
      <Grid item key={cart_item.id} xs={1} sm={1} md={3} >
        <Card className={classes.card} >
          <CardMedia
            className={classes.cardMedia}
            image={cart_item.item.image}
            title={cart_item.item.name}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h1" style={{fontFamily: 'Quicksand'}} >
            {cart_item.item.name}
            </Typography>
            <Typography>
            ${cart_item.item.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" color="" variant="contained" style={{fontFamily: 'Quicksand'}}  endIcon={<DeleteOutlinedIcon />} onClick={() => this.props.removeFromCart(cart_item)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ))

  }

  render() {
    const carts = this.props
    const {classes} = this.props
    return (

      <React.Fragment>
      <CssBaseline />
     
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography  variant="h1" align="center" color="inherint" paragraph style={{fontFamily: 'Quicksand'}}  gutterBottom>
             
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph style={{fontFamily: 'Vidaloka'}}>
              
              
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item> <br/>
                  <Button variant="contained" color="secondary" style={{fontFamily: 'Quicksand'}} >
                  <Link to="/items"> Browse All Items</Link>
                  </Button>
                <br/><br/><br/>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg" color="primary">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {carts ? this.renderCards(carts): null}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
      </React.Fragment>
      );
    }
  }


export default withStyles(styles)(Cart)
      // <div>      
      // <div>
      // <br/>
      // <img className="navbar-pic" src="https://www.pngkey.com/png/full/133-1338872_-hayao-miyazaki-princess-mononoke-ponyo-spirited-away.png" />
      // </div>           
      // <div className="cart-container">
      // <div className="font"> {console.log(this.props.carts)} 
      // <b>{this.props.carts.map(cart => <CartItem cart={cart} key={cart.id} removeFromCart={this.props.removeFromCart} />)}</b>
      // </div>
      // <Button startIcon={<AddBoxIcon/>} variant="outlined" color="primary"><Link to="/items">Add Item</Link></Button>
      // </div>
      //   </div>


      // {cards.map((card) => (
      //   <Grid item key={card} xs={12} sm={6} md={4}>
      //     <Card className={classes.card}>
      //       <CardMedia
      //         className={classes.cardMedia}
      //         image="https://source.unsplash.com/random"
      //         title="Image title"
      //       />
      //       <CardContent className={classes.cardContent}>
      //         <Typography gutterBottom variant="h5" component="h2">
      //           cart item name 
      //         </Typography>
      //         <Typography>
      //           cart item price 
      //         </Typography>
      //       </CardContent>
      //       <CardActions>
      //         <Button size="small" color="primary">
      //           Delete
      //         </Button>
      //       </CardActions>
      //     </Card>
      //   </Grid>
      // ))}

























// class Cart extends Component {

//   state = {
//     currentUserData: [],
//   }

//   componentDidMount() {
//     //   fetch("http://localhost:3000/users/" + currentUser.id)
//     if (this.props.currentUser) {
//       fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
//         .then(res => res.json())
//         .then(currentUserData => {
//           this.setState({ currentUserData })
//         })
//     }
//   }


//   render() {
//     return (
//       <div>      
      
//       <div>
//       <br/>
//       <img className="navbar-pic" src="https://www.pngkey.com/png/full/133-1338872_-hayao-miyazaki-princess-mononoke-ponyo-spirited-away.png" />
//       </div>           
//       <div className="cart-container">
//       <div className="font"> {console.log(this.props.carts)} 
//       <b>{this.props.carts.map(cart => <CartItem cart={cart} key={cart.id} removeFromCart={this.props.removeFromCart} />)}</b>
//       </div>
//       <Button startIcon={<AddBoxIcon/>} variant="outlined" color="primary"><Link to="/items">Add Item</Link></Button>
//       </div>
      
      
      
//         </div>

//     );
//   };
// }
// export default Cart;

















    // {this.props.carts.map(carts => <CartItem carts={carts} currentUser={this.props.currentUser}/>)}
    // render(){
    //     return ( 
    //       <div>
    //       {this.props.currentUser ?
    //         <div>
    //         <h1>Hello, {this.props.currentUser.username}</h1>
    //         <button><Link to="/directory">Add a new plant to my collection!</Link></button>
    //         {this.state.currentUserData.collections && this.state.currentUserData.collections.map(collection => <CollectionCard collection={collection} deleteCollection={this.props.deleteCollection}/>)}
    //         {console.log(this.state.currentUserData.collections)}
    //         </div>
    //         :
    //         <h1>Please login to see your Plant Collection!</h1>
    //       }
    //       </div>
    //     )
    //   }}
      // {this.props.items.map(items => <CartItem items={items} updateCurrentUser={this.props.updateCurrentUser}/>)}

      //{this.props.carts.map(cart => <CartItem cart={cart} updateCurrentUser={this.props.updateCurrentUser}/>)}

      //map in props 
    //   <Route path="/cart" render={() => <Cart currentUser={this.state.currentUser} user={this.state.user} addToCart={this.addToCart} />}/>
      //

// currentUser={this.state.currentUser} user={this.state.user} addToCart={this.addToCart}
// <button onClick={() => (this.props.addToCart(this.props.item))} className="add-btn" >Add me to your cart!</button>

//addToCart={this.addToCart}
// {this.props.items.map(item => <CartItem item={item} addToCart={this.props.addToCart} updateCurrentUser={this.props.updateCurrentUser}/>)}

//  {/*this.props.item.map((item) => <CartItem clickAction = {this.props.addToCart} item={item}/>
//                     clickAction = {this.props.addToCart})*/}

// <button onClick={() => this.props.donateToy(this.props.toy)} className="del-btn">Donate to GoodWill</button>
//  <img src={this.props.item.image} alt={this.props.item.name} className="cart-image" />
//<p>{this.props.toy.likes} Likes </p>
