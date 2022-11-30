import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function BabyInfo() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Baby Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="motherName"
            name="motherName"
            label="Mother name"
            fullWidth
            autoComplete="mother-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fatherName"
            name="fatherName"
            label="Father Name"
            fullWidth
            autoComplete="father-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="gender"
            label="Gender"
            fullWidth
            autoComplete="gender"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dateofbirth"
            name="dateofbirth"
            label="Date of Birth & Time"
            fullWidth
            autoComplete="dateofbirth"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="weight"
            label="Weight"
            fullWidth
            autoComplete="weight"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="apgar-score"
            label="Apgar Score"
            fullWidth
            autoComplete="apgar-score"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="delivery"
            label="Delivery"
            fullWidth
            autoComplete="delivery"
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
