import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Grid } from "@mui/material";
import { Paper, Avatar, TextField } from "@mui/material";
import "./PatientForm.css";
import { fontWeight } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { Controller } from "react-hook-form";

import { useForm } from "react-hook-form";

export default function BabyRegi() {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm({
        mode: "onTouched",
      });
    
  const [name, setName] = React.useState("Composed TextField");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const paperStyle = { padding: "38px 20px", width: 600, margin: "20px auto" };
  const headerStyle = { margin: 0 ,padding:10};


//   const avtarStyle = { backgroundColor: "#1bbd7e" };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      
<Grid spacing={2}>
<Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Baby Registration Form</h2>
        </Grid>

        <Grid align="center">
          <h4 style={headerStyle}>Personal Information</h4>
        </Grid>

        <Grid>
        <FormControl variant="standard" xs={8}>
          <InputLabel htmlFor="component-simple">Mother Name</InputLabel>
          <Input id="component-simple" label="Mother Name" onChange={handleChange} />
        </FormControl>

      <FormControl variant="standard" xs={4}>
        <InputLabel htmlFor="component-helper">Father Name</InputLabel>
        <Input
          id="component-helper"
          label="Father Name"
          //   onChange={handleChange}
          aria-describedby="component-helper-text"
        />
      </FormControl>
      </Grid>

      <Grid>
      <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Gender</InputLabel>
          <Input id="component-simple" label="Gender"/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel type ="date" htmlFor="component-simple">Weight</InputLabel>
          <Input id="component-simple" label="Weight"/>
        </FormControl>
      </Grid>

      <Grid>
      <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Birth Date & Time</InputLabel>
          <Input id="component-simple" label="Birth Date & Time"/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel type ="date" htmlFor="component-simple">Time</InputLabel>
          <Input id="component-simple" label="Time"/>
        </FormControl>
      </Grid>

      <Grid>
      <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Apgar Score</InputLabel>
          <Input id="component-simple" label="Apgar Score"/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel type ="date" htmlFor="component-simple">Delivery</InputLabel>
          <Input id="component-simple" label="Delivery"/>
        </FormControl>
      </Grid>

      <Grid>
        <FormControl variant="standard" sx={{ minWidth: 410 }}>
          <InputLabel type ="date" htmlFor="component-simple">Vaccination</InputLabel>
          <Input id="component-simple" label="Vaccination"/>
        </FormControl>
      </Grid>

      <Grid align="center">
          <h4 style={headerStyle}>Hospital Information</h4>
        </Grid>

      <Grid>
      <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Hospital Name</InputLabel>
          <Input id="component-simple" label="Hospital Name"/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel type ="date" htmlFor="component-simple">Doctor Name</InputLabel>
          <Input id="component-simple" label="Doctor Name"/>
        </FormControl>
      </Grid>

      
      <Grid>
      <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">State</InputLabel>
          <Input id="component-simple" label="State"/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel type ="date" htmlFor="component-simple">City</InputLabel>
          <Input id="component-simple" label="City"/>
        </FormControl>
      </Grid>
 
      </Paper>
      </Grid>
    </Box>
   
  );
}
