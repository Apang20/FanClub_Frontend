
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
    {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Studio Ghibli
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      </Typography>

  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.type.white,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
      <div className="footer">
    <div className={classes.root}>
    <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} variant="body2" color="textSecondary" >Studio Ghibli Copyright ©</Paper>
        </Grid>
       
      </Grid>
    </div>
    </div>
  );
}




// theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[100],


// import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary">
//     {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Studio Ghibli
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//       </Typography>

//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '100vh',
//   },
//
//   footer: {
//     padding: theme.spacing(4, 8),
//     textAlign 'center',
//     backgroundColor:
//       theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
//   },
// }));

// export default function StickyFooter() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <footer component="main" className={classes.footer} maxWidth="md">
//         <Container container spacing={3}>
//           <Typography variant="h6" color="inherit"></Typography>
//           <Copyright />
//         </Container>
//       </footer>
//     </div>
//   );
// }









// const Footer = () => {

//     return (
//         <div className="footer">
//             <br></br><br></br><br></br>
//             <h1>Footer</h1>
//         </div>
//     )
// }
