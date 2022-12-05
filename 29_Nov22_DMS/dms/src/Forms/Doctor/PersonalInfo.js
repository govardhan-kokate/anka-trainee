import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';

export default function PersonalInfo() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        
        {/* <Grid item xs={6}>
        <FormLabel id="demo-row-radio-buttons-group-label" >Gender</FormLabel>
      <RadioGroup 
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup> 
        </Grid> */}

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="emailId"
            label="Email Id"
            fullWidth
            autoComplete="emailId"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="phonenumber"
            label="Phone Number"
            fullWidth
            autoComplete="Phone Number"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="password"
            label="password"
            fullWidth
            autoComplete="password"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            checked
            control={
              <Checkbox color="secondary" name="saveInformation" value="yes" />
            }
            label="Use this information for report generation"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
