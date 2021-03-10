import React from 'react';
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
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    //backgroundImage: 'url(https://i.imgur.com/VYBxMKp.gif)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 370,
    bottom: 40,
    right: 852,
    left: 50,
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(11), //zooms in on pic
    //   padding: theme.spacing(40),
      paddingRight: 0,
    },
  },
});

class Home extends React.Component{ 
render(){
    const {classes} = this.props

return (
  <div>
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://www.desktopbackground.org/download/2560x960/2011/12/17/313888_studio-ghibli-characters-wallpapers-anime-wallpapers_2560x1600_h.jpg)`
}}>
{/* Increase the priority of the hero background image */}
{<img style={{ display: 'none' }} src={`url(https://data.whicdn.com/images/159503389/original.gif)`} alt={classes.imageText} />}
{/**/}<div className={classes.overlay} />
<br/>
<br/>

<Grid container>
<Grid item md={6}>
<div className={classes.mainFeaturedPostContent}>
<Typography className={classes.title} component="h1" variant="h3" color="primary" style={{fontFamily: ''}}><br/><br/><br/><br/><br/>
<b>Welcome to Ghibli Fan Club!</b>
</Typography>
<Typography className={classes.subTitle} variant="h5" color="inherit" style={{fontFamily: ''}} paragraph> <br/> 
Studio Ghibli films are beloved for many reasons; the strange and fantastical creatures, the richly animated worlds, the oddball humour. 
These characters have won the hearts of many worldwide. 
Here, exclusive members can find rare collection of Ghibli items imported from Tokyo, Japan!
</Typography>
</div>
</Grid>
</Grid>
</Paper>
<br/>
<Copyright />
</div>
);
}}

export default withStyles(styles)(Home)


// <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://cdn.shopify.com/s/files/1/1549/8499/products/il_fullxfull.900638191_iqit_1024x1024.jpg?v=1478316546)`
// <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://i.pinimg.com/564x/eb/fe/12/ebfe125f3f4bdc3b5d3505349f3a7aaa.jpg)`
// <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://media.giphy.com/media/3ohzdHkYXGiemtvCMM/giphy.gif)`

// <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://media.giphy.com/media/YfnALOssX8C1W/giphy.gif)`














// import React, {Component} from 'react';
// import { withStyles } from "@material-ui/core/styles";

// const styles = theme => ({
// });


// class Home extends Component {
// render() {
//     const {classes} = this.props
//     return (

//         );
//     }
// }


// export default withStyles(styles)(Home)





// import React, { Component } from "react";
// class home extends Component {
//     render() {
//         return (
//             <div className="home">
//                 <img className="home-pic" src="https://i0.wp.com/prpldrop.com/wp-content/uploads/2020/09/https___hypebeast.com_image_2020_04_studio-ghibli-free-wallpaper-download-info-01.jpg?w=1170&ssl=1" />

               
//                 </div>
//         );
//     }
// }

// export default home;

// <div className="home-paragraph">
// <img className="background-pic" src="https://i.pinimg.com/originals/4a/53/8c/4a538c7eb58d4d833a08673776e8eb3f.gif" />
