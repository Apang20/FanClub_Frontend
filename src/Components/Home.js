import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Copyright from '../Components/Copyright'



const styles = theme => ({
  mainFeaturedPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 380,
    bottom: 46,
    right: 852,
    left: 50,
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(11), //zooms in on pic
      paddingRight: 0,
    },
  },
});

class Home extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <Paper className={classes.mainFeaturedPost} style={{
          backgroundImage: `url(https://www.desktopbackground.org/download/2560x960/2011/12/17/313888_studio-ghibli-characters-wallpapers-anime-wallpapers_2560x1600_h.jpg)`
        }}>

          {<img style={{ display: 'none' }} src={`url(https://data.whicdn.com/images/159503389/original.gif)`} alt={classes.imageText} />}
          <div className={classes.overlay} />
          <br />
          <br />


          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography className={classes.title} component="h1" variant="h3" color="primary" style={{ fontFamily: '' }}><br /><br /><br /><br /><br />
                  <b>Welcome to Ghibli Fan Club!</b>
                </Typography>
                <Typography className={classes.subTitle} variant="h5" color="inherit" style={{ fontFamily: '' }} paragraph> <br />
Studio Ghibli films are beloved for many reasons; the strange and fantastical creatures, the richly animated worlds, the oddball humour.
These characters have won the hearts of many worldwide.
Here, exclusive members can find rare collection of Ghibli items imported from Tokyo, Japan!
</Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <br />
        <Copyright />
        <br />
      </div>
    );
  }
}

export default withStyles(styles)(Home)


