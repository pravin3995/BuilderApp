import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import mockData from './data';
// import Image from  '../../../../../public/images/home.jpeg'
const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  image: {
    height: 48,
    width: 48
  },
  square:{
    width:'100px',
    height:'70px',
    borderRadius:0
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const RecentProperties = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [products] = useState(mockData);

  return (
    <div className='recent-properties'>
        <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Recent Properties"
      />
      <Divider />
         <CardContent className={classes.content}>
      <CardHeader
        avatar={ 
          <Avatar aria-label="recipe" className={classes.square} src="images/home.jpeg">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Button variant="contained" color="primary">Rent</Button>
          </IconButton>
        }
        title="005 Farland Street,West Roxbury view"
        subheader="05 Jul 2018, Fergus Douchebag"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      </CardContent>
      <CardContent className={classes.content}>
      <CardHeader
        avatar={ 
          <Avatar aria-label="recipe" className={classes.square} src="images/home.jpeg">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Button variant="contained" color="primary">Rent</Button>
          </IconButton>
        }
        title="005 Farland Street,West Roxbury view"
        subheader="05 Jul 2018, Fergus Douchebag"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      </CardContent>
      <CardContent className={classes.content}>
      <CardHeader
        avatar={ 
          <Avatar aria-label="recipe" className={classes.square} src="images/home.jpeg">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Button variant="contained" color="primary">Rent</Button>
          </IconButton>
        }
        title="005 Farland Street,West Roxbury view"
        subheader="05 Jul 2018, Fergus Douchebag"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      </CardContent>
     
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
        
    </div>
  );
};

RecentProperties.propTypes = {
  className: PropTypes.string
};

export default RecentProperties;
