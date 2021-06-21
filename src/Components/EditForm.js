import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from "@material-ui/core/styles";

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

class EditForm extends Component {

    state = {
        username: "",
        email: ""
    }

    handleSubmit(e) { 
        e.preventDefault()
        let newInfo = {
            username: this.state.username,
            email: this.state.email
            
        }

        let reqPack = {
            headers: { "Content-Type": "application/json" },
            method: "PATCH",
            body: JSON.stringify(newInfo)
        }

        fetch("http://localhost:3000/users/" + this.props.currentUser.id, reqPack)
            .then(resp => resp.json())
            .then(newInfo => {
                this.props.patchInfo(newInfo) 
                e.target.reset()
            })
    }


    render() {
        const {classes} = this.props

        return (
            <div className="form">
            <div>
         
            
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
                            type="email"
                            onChange={(e) => this.setState({ email: e.target.value })}
                            placeholder="Email@gmail.com"
                            class="form-control"
                            id="emailvalue"
                            name="emailName"
                        />
                        </div>
                     </div>
                                        
                    
                     <Button
                     type="submit"
                     width="50%"
                     variant="contained"
                     color="secondary"
                     className={classes.submit}
                   >
                   Submit
                   </Button>
                      
                     </form>
                  
            </div>
        )
     }
 }
 export default withStyles(styles)(EditForm)