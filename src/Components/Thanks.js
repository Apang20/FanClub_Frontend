import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Copyright from '../Components/Copyright'

// import Feature from './Components/Feature'

const styles = theme => ({
  mainFeaturedPost: {
    position: 'relative',
    // backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(1),
    //backgroundImage: 'url(https://i.imgur.com/VYBxMKp.gif)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 440,
    bottom: 20,
    right: 861,
    left: 10,
    backgroundColor: 'rgba(0,0,0,.7)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5),
    //   padding: theme.spacing(40),
      paddingRight: 0,
      // paddingLeft: 0
    },
  },
});

class Thanks extends React.Component{ 
render(){
    const {classes} = this.props

return (
  <div>
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://64.media.tumblr.com/a8f2bb383f0cc03ebd0e1c76e6add65f/tumblr_nl514kT5p61spui9lo1_540.gifv)`
}}>
{/* Increase the priority of the hero background image */}
{/**/}<div className={classes.overlay} />
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<Grid container>
<Grid item md={6}>
<div className={classes.mainFeaturedPostContent}>
<Typography className={classes.title} component="h1" variant="h3" color="inherit" style={{fontFamily: 'Vidaloka'}}><br/><br/><br/><br/><br/>
<b>Studio Ghibli Fan Club Thanks You for Your Support!</b>
</Typography>

<Typography className={classes.subTitle} variant="h5" color="inherit" style={{fontFamily: 'Quicksand'}} paragraph> <br/> 
Please allow up to 3 weeks for international shipping<br/>
See you again soon!
</Typography>
</div>
</Grid>
</Grid>
</Paper>
<Copyright />
<br/>
</div>
);
}}

export default withStyles(styles)(Thanks)



// import React, { Component } from 'react'
// import Copyright from '../Components/Copyright'
// import Typography from '@material-ui/core/Typography';



// class Thanks extends React.Component {
//   render() {
//     return (

//       <div className="thanks">
//       <Typography gutterBottom variant="h5" component="h1" style={{fontFamily: 'Quicksand'}} >
//       Thank You
//       </Typography>
//         <img className="thanks-pic" src="https://64.media.tumblr.com/a8f2bb383f0cc03ebd0e1c76e6add65f/tumblr_nl514kT5p61spui9lo1_540.gifv" />
//         />

//       </div>
//     )
//   }
// }
// export default Thanks;