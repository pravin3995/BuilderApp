import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  Card,
  Typography,
  CardContent
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { Facebook as FacebookIcon, Google as GoogleIcon } from 'icons';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: '8px 0 8px 0',
      },
    },
    button:{
        width:'100%',
        borderRadius:'50px',
        padding:'12px'
    },
    heading:{
        padding:'10px 0',
        textAlign:'center'
    }
  }));
const Contact = props => {

    const classes = useStyles();
 
  return (
   <div className='mt-20'>   
    <Card className='contact main-wrapper'>
        <CardContent>
        <h2 className={classes.heading}>Get In Touch</h2>
        <form className={classes.root} noValidate autoComplete="off">
           <TextField id="outlined-basic" placeholder="First Name" variant="outlined" fullWidth />
           <TextField id="outlined-basic" placeholder="Last Name" variant="outlined" fullWidth />
           <TextField id="outlined-basic" placeholder="Email" variant="outlined" fullWidth />
           <TextField id="outlined-basic" placeholder="Conatct Number" variant="outlined" fullWidth />
           <TextareaAutosize aria-label="minimum height" rows={6} placeholder="Wirte your message here" className='textarea-style w-100'/>
           <Button variant="contained" color="primary" className={classes.button}>
              Submit
           </Button>
        </form>
        </CardContent>
    </Card>
  </div> 
  );
};

Contact.propTypes = {
  history: PropTypes.object
};

export default withRouter(Contact);
