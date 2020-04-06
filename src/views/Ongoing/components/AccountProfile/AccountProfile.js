import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  },
  
}));

const AccountProfile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: 'Shen Zhi',
    city: 'Los Angeles',
    country: 'USA',
    timezone: 'GTM-7',
    avatar: '/images/avatars/avatar_11.png'
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography
              gutterBottom
              variant="h4"
            >
              Let's Get In Touch
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
          </div>
        </div>
        </CardContent>
        <Divider />
        <CardContent>
          <div className='details-wrap'>
             <AccountBoxIcon className='icon'/>
             <div>
               <p>+91 9080405000</p>
               <p>+91 9080405000</p>
             </div>
          </div>
          <div className='details-wrap'>
             <AccountBoxIcon className='icon'/>
             <div>
               <p>xyz@gmail.com</p>
               <p>abc@gmail.com</p>
             </div>
          </div>
          <div className='details-wrap mb-0'>
             <AccountBoxIcon className='icon'/>
             <div>
               <p>600 , Congress Ave</p>
               <p>Pune 411030</p>
             </div>
          </div>
     
        </CardContent>
      <Divider />
      </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;
