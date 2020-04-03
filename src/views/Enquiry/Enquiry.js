import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  Card,
  Typography,
  CardContent,
  Select 
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
    },
    formControl:{
        width:'100%'
    }
  }));
const Enquiry = props => {
 const classes = useStyles();
 const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  }
  return (
    <div className='mt-20'> 
    <Card className='contact main-wrapper'>
        <CardContent>
        <h2 className={classes.heading}>How can help you?</h2>
       
        <form className={classes.root} noValidate autoComplete="off">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple" variant="outlined" >Select Site</InputLabel>
            <Select
            native
            value={state.age}
            variant="outlined"
            onChange={handleChange}
            label="Age"
            inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
            }}
            >
            <option aria-label="None" value="" />
            <option value={10}>Kothrud</option>
            <option value={20}>Karve Road</option>
            <option value={30}>Sadashiv Peth</option>
            </Select>
        </FormControl>
           <TextField id="outlined-basic" placeholder="First Name" variant="outlined" fullWidth />
           <TextField id="outlined-basic" placeholder="Last Name" variant="outlined" fullWidth />
           <TextField id="outlined-basic" placeholder="Email" variant="outlined" fullWidth />
           <TextField id="outlined-basic" placeholder="Conatct Number" variant="outlined" fullWidth />
           <TextareaAutosize  rows={6} placeholder="Wirte your message here" className='textarea-style'/>
           <Button variant="contained" color="primary" className={classes.button}>
              Submit
           </Button>
        </form>
        </CardContent>
    </Card>
    </div>
  );
};

Enquiry.propTypes = {
  history: PropTypes.object
};

export default withRouter(Enquiry);
