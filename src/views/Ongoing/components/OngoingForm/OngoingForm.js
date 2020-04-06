import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Typography

} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const useStyles = makeStyles(() => ({
  root: {},
  resize:{
    fontSize:'14px'
  },
}));

const OngoingForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: 'Shen',
    lastName: 'Zhi',
    email: 'shen.zhi@devias.io',
    phone: '',
    Featured: 'Featured',
    country: 'Pune',
    address:'karve Road',
    BanksLoanProvidedBy:"Banks LoanProvided By",
    SiteType:'Site Type'
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const Featured = [
    {
      value: 'lift backup',
      label: 'Lift Backup'
    },
    {
      value: 'CCTV',
      label: 'CCTV'
    },
    {
      value: 'Water Supply 24 hrs',
      label: 'Water Supply 24 hrs'
    },
    {
      value: 'solar heater',
      label: 'Solar Heater'
    }
  ];
  const BanksLoanProvidedBy = [
    {
      value: ' SBI',
      label: 'SBI'
    },
    {
      value: ' ICICI',
      label: 'ICICI'
    },
    {
      value: ' AXIS',
      label: 'AXIS'
    },
  ];
  const SiteType = [
    {
      value: ' Recidential',
      label: 'Recidential'
    },
    {
      value: ' Commercial',
      label: 'Commercial'
    },
  ]
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
         <CardContent>
           <Typography
              gutterBottom
              variant="h4"
            >
              On Going Project
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
        </CardContent>
        <Divider />
 
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                // helperText="Please specify the first name"
                label="Site name"
                margin="dense"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
                InputProps={{
                  classes: {
                    input: classes.resize
                  },
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                // helperText="Please specify the first name"
                label="Address"
                margin="dense"
                // name="firstName"
                onChange={handleChange}
                required
                // value={values.address}
                variant="outlined"
                InputProps={{
                  classes: {
                    input: classes.resize
                  },
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Featured"
                margin="dense"
                name="Featured"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.Featured}
                variant="outlined"
                InputProps={{
                  classes: {
                    input: classes.resize
                  },
                }}
              >
                {Featured.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            
           <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Amenities"
                margin="dense"
                name="amenities"
                onChange={handleChange}
                required
                // value={values.email}
                variant="outlined"
                InputProps={{
                  classes: {
                    input: classes.resize
                  },
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="supervisor Name "
                margin="dense"
                name="supervisor name"
                onChange={handleChange}
                required
                // value={values.email}
                variant="outlined"
                InputProps={{
                  classes: {
                    input: classes.resize
                  },
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="supervisor Contact Number 1"
                margin="dense"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="supervisor Contact Number 1"
                margin="dense"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
                InputProps={{
                  classes: {
                    input: classes.resize
                  },
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Instagram Link"
                margin="dense"
                name="insta link"
                onChange={handleChange}
                required
                // value={values.email}
                variant="outlined"
                InputProps={{
                  classes: {
                    input: classes.resize
                  },
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="linkedin Link"
                margin="dense"
                name="linkedin link"
                onChange={handleChange}
                required
                // value={values.email}
                variant="outlined"
                InputProps={{
                  classes: {
                    input: classes.resize
                  },
                }}

              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Site Address Link"
                margin="dense"
                name="Site Address link"
                onChange={handleChange}
                required
                // value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Brochure Link"
                margin="dense"
                name="Brochure link"
                onChange={handleChange}
                required
                // value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Banks Loan ProvidedBy"
                margin="dense"
                name="Banks LoanProvide dBy"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.BanksLoanProvidedBy}
                variant="outlined"
              >
                {BanksLoanProvidedBy.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Site Type"
                margin="dense"
                name="Site Type"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.SiteType}
                variant="outlined"
                InputProps={{
                  classes: {
                    input: classes.resize
                  },
                }}
              >
                {SiteType.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Rera Register Number"
                margin="dense"
                name="Rera Register Number"
                onChange={handleChange}
                required
                // value={values.country}
                InputProps={{
                  classes: {
                    input: classes.resize
                  },
                }}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardContent className='upload-file'>
          <Button
              variant="contained"
              component="label"
            ><CloudUploadIcon className='uplaod-icon'/>
              Upload Image
              <input
                type="file"
                style={{ display: "none" }}
              />
          </Button>
        </CardContent>
        <CardContent className='pt-0'>
          <Button
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </CardContent>
      </form>
    </Card>
  );
};

OngoingForm.propTypes = {
  className: PropTypes.string
};

export default OngoingForm;
