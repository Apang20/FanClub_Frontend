// import React from 'react';
import './App.css';
import React, {Fragment} from 'react';
// import { Route, Switch, Redirect, withRouter, Router } from 'react-router-dom'
import { Route, Switch, Link, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Account from './Components/Account'
//import NotFound from './Components/notFound'
import LoginForm from './Components/LoginForm';
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import MovieContainer from './Components/MovieContainer';
import ItemContainer from './Components/ItemContainer';
import FilterBar from './Components/FilterBar';
import Register from './Components/Register'
import NotFound from './Components/NotFound'
import Footer from './Components/Footer'
import Home from './Components/Home'
import EditForm from './Components/EditForm'
// import { render } from 'react-dom';
// import { BrowserRouter as Router, Route } from "react-router-dom";




// const BaseURL = "http://localhost:3000/"
const ItemsURL = "http://localhost:3000/items/"
const CartsURL = "http://localhost:3000/carts/"
const CartItemsURL = "http://localhost:3000/cart_items/"
const UsersURL = "http://localhost:3000/users/"


class App extends React.Component {

  state = {
      currentUser: null, 
      items: [],
      carts: [],
      cart_items: []
  }

    updateCurrentUser = (user) => {
        this.setState({currentUser: user})
    }

    logOut = () => {
        this.setState({currentUser: null})
    }

    componentDidMount() {
        Promise.all([fetch(ItemsURL), fetch(CartsURL), fetch(UsersURL), fetch(CartItemsURL)])
          .then(([res1, res2, res3, res4]) => { 
             return Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]) 
          })
          .then(([items, carts, users, cart_items]) => {
            this.setState({items})
            this.setState({carts})
            this.setState({users})
            this.setState({cart_items})
            console.log(carts, "Carts")
            console.log(cart_items, "Cart_Items")
          });
    }


  addToCart = (item) => { //item is the obj
      let addCart 
    addCart = {
            item_id: item.id,
            cart_id: 3 //grab from backend to make dynamic
    };
    let reqPack = {};
    reqPack.method = "POST"; 
    reqPack.headers = { "Content-Type": "application/json" };
    reqPack.body = JSON.stringify(addCart);

     fetch("http://localhost:3000/cart_items", reqPack) 
        .then(res => res.json())
        .then(res => {
            res.item = item 
            let updateCart = [...this.state.carts, res]
             this.setState({carts: updateCart});
            console.log(res)
        })
    }

    
    removeFromCart = (cart_items) => { 
        console.log(cart_items, "removeFromCart function") 
        
        fetch(CartItemsURL + cart_items.id, {
          method: "DELETE",
        })
        .then(res => res.json())
        .then((res) => { 
          this.setState({
              carts: this.state.carts.filter((filteredCart) => filteredCart != cart_items)
            })
        })
    }

    patchInfo = (newInfo) => {
        this.setState({
             currentUser: {username: newInfo.username}
        })
        // console.log(this.state.currentUser.username, "Current User UserName")
      }



render() {

    return (

        <Fragment>
      <NavBar currentUser={this.state.currentUser} logOut={this.logOut}/>
    <Router/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" render={() => (
            this.state.currentUser == null ? <LoginForm updateCurrentUser={this.updateCurrentUser} /> : <Redirect to="/items"/>
          )}/>
      <Route exact path="/register" component={Register}/>
      <Route path="/carts" render={() => (
          <Cart currentUser={this.state.currentUser} carts={this.state.carts} removeFromCart={this.removeFromCart}/>)}/>
          <Route exact path="/edit" render={() => <EditForm currentUser={this.state.currentUser} patchInfo={this.patchInfo}/>}/>

      <Route exact path="/users" render={() => <Account currentUser={this.state.currentUser}/>}/>
      <Route exact path="/items" render={(props) => (
        <ItemContainer items={this.state.items} addToCart={this.addToCart} updateCurrentUser={this.updateCurrentUser} user={this.state.currentUser}/> )}/>

    </Switch>
    <Router/>
    <MovieContainer/>
    <FilterBar />
    <Footer /> 
    </Fragment>
    
    )
}

}

export default App; 

////   logInUser = (username) => {
//     let current = this.state.users.find(
//       (user) => user.username === username
//       );
//       this.setState({ currentUser: current });
//     };


 //   removeFromCart = (deleteItem) => {
    //     fetch("http://localhost:3000/carts/" + item.id, {method: 'DELETE'})
    //     .then(res => res.json())
    //     .then(() => {
    //       this.setState({
    //         cart: this.state.item.filter((item) => item !== deleteItem)
    //       })
    //     })
    //   }


//If the URL is /login - show the LoginForm (component currentUser is null):(redirect to /porfile if currentUser !null)
//If URL is /pofile with currentUser => Profile : redirect to /login 

    //carts={this.state.carts} items={this.state.items}
    // <Route exact path="/cart" component={Cart} updateCurrentUser={this.updateCurrentUser}/>

    // <Cart cart={this.state.cart}/>
        // <Fragment>
        // <NavBar />
        // <Switch>
        // <Route exact path="/" render={() => <Redirect to="/login"/>} />
        // <Route exact path="/profile" render={() => (
        //     this.state.currentUser ? <Profile currentUser={this.state.currentUser}/> : <Redirect to="/login"/>
        //     )} /> 
        // <Route exact path="/login" render={() => (
        //     this.state.currentUser == null ? <LoginForm updateCurrentUser={this.updateCurrentUser} /> : <Redirect to="/profile"/>
        // )} />

        // </Switch>
        // <MovieContainer/>

        // <Route path="/items" render={routerProps => 
        //     <ItemContainer items={this.state.items}/>}/>

        // <Cart />
        // <FilterBar/>
        
        // </Fragment>
    // export default withRouter(App);
// user={this.state.currentUser} logInUser={this.logInUser} 