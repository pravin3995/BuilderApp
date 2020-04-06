import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  Notification: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid transparent',

    // '&:hover': {
    //   borderRadius: '15px',
    //   border: '1px solid #c3c3c3',
    //   cursor: 'pointer',
    //   color: '#3f51b5',
    // }
  },
  NotifiactionWrapper:{
    margin: '10px 10px',
    fontFamily: 'sans-serif'

  },
  price:{
    display:'block',
    padding:'0 16px',
    fontSize:'15px'
  },
  title:{
    color:'#000',
    fontSize:'13px'
  },
  Location:{
    fontSize:'13px',
    color:'#546e7a'
  },
  number:{
    fontSize:'13px',
    padding:'16px',
    color:'#546e7a'
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/dashboard">
          <img
            alt="Logo"
            src="/images/logos/logo--white.svg"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton aria-controls="simple-menu" color='inherit' aria-haspopup="true" onClick={handleClick}>
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
           <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <div></div>
                <Card elevation={1} className={classes.NotifiactionWrapper}  onClick={handleClose} >
                  <div className={classes.Notification}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" src="images/home.jpeg" >
                            </Avatar>
                      }
                      title="Aroma Towers"
                        classes={{
                            title:classes.title
                        }}
                      subheader="48 min ago"
                    />
                    <CardContent>
                      <span className={classes.Location}>Kothrud Nal Stop</span>
                    </CardContent>
                    </div>
                    <CardContent className={classes.price}>2 BHK starting from $234</CardContent>
                    <p className={classes.number}>2 New</p>
                  </Card>
                  <Card elevation={1} className={classes.NotifiactionWrapper}  onClick={handleClose} >
                  <div className={classes.Notification}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" src="images/home.jpeg" >
                            </Avatar>
                      }
                      title="Aroma Towers"
                        classes={{
                            title:classes.title
                        }}
                      subheader="48 min ago"
                    />
                    <CardContent>
                      <span className={classes.Location}>Kothrud Nal Stop</span>
                    </CardContent>
                    </div>
                    <CardContent className={classes.price}>2 BHK starting from $234</CardContent>
                    <p className={classes.number}>2 New</p>
                  </Card>
            </Menu>
          
          <IconButton
            className={classes.signOutButton}
            color="inherit"
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
