import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


function Copyright() {
    return (
      <Typography variant="body1" color="textSecondary" align="center" style={{fontFamily: ''}}>
        {'Copyright © '}
        <Link color="inherit" href="https://lemiapp.com/lemi/the-magic-of-studio-ghibli/studio-ghibli-corporate-office">
          Ghibli Fan Club
        </Link>{' '}
        {new Date().getFullYear()}
        {'. '}
        Terms of Use & Privacy Policy
      </Typography>
    );
  }

    export default Copyright; 