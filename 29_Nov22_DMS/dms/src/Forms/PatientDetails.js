import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PatientDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Patient Details
      </Typography>
      <Grid container spacing={3}>
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
            id="aadharnumber"
            label="Aadhar Number"
            fullWidth
            autoComplete="aadharnumber"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="maritalstatus"
            label="Marital Status"
            helperText="choose"
            fullWidth
            autoComplete="Marital Status"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="height"
            label="Height"
            fullWidth
            autoComplete="Height"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="weight"
            label="Weight"
            fullWidth
            autoComplete="Weight"
            variant="standard"
          />
      
       
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="deseases"
            label="Deseases"
            fullWidth
            autoComplete="deseases"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="edd"
            label="
            EDD(Estimated Due Date)
            "
            fullWidth
            autoComplete="edd"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="howmanychildren"
            label="How Many Children"
            fullWidth
            autoComplete="howmanychildren"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="currentMonth"
            label="Current Month"
            fullWidth
            autoComplete="currentMonth"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked color="secondary" name="saveCard" value="yes" />}
            label="Remember these details for next time"
          />
        </Grid>
      </Grid>
   
    </React.Fragment>
  );
}
