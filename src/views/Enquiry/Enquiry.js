import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { AccountProfile, EnquiryForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    
  },
  Center:{
    display:'flex',
    justifyContent:'center'
  }
}));

const Enquiry = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        className={classes.Center}
      >
        
        <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          <EnquiryForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default Enquiry;
