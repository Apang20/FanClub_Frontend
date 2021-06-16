import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';

function Copyright() {
  return (
    <Typography variant="body1" color="inherit" align="center" component="h1" variant="h7">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Studio Ghibli
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(60),
    padding: theme.spacing(6, 0),
  },
});

class Footer extends React.Component {
  render(){
  const { classes, description, title } = this.props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

};

export default withStyles(styles)(Footer)




















