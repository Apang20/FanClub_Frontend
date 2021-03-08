import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 10,
  },
  cardMedia: {
    width: 160,
  },
});

class Feature extends React.Component {
 render(){
    const {classes} = this.props
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Post Title
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Post Date
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Post Description
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
}

export default withStyles(styles)(Feature)