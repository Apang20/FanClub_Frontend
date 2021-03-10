import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


function Copyright() {
    return (
      <Typography variant="body1" color="inherit" align="center" style={{fontFamily: ''}}>
        {'Copyright © '}
       
          Ghibli Fan Club
        {' '}
        {new Date().getFullYear()}
        {'. '}
        <Link color="inherit" href="https://lemiapp.com/legal/terms"> Terms of Use & Privacy Policy </Link>
      </Typography>
    );
  }

    export default Copyright; 