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

export default function PatientForm() {

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
      
<Grid>
<Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Patient Registration Form</h2>
        </Grid>

        <Grid align="center">
          <h4 style={headerStyle}>Personal Information</h4>
        </Grid>
      <Grid>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">First Name</InputLabel>
          <Input id="component-simple" label="First Name" onChange={handleChange} />
        </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Last Name</InputLabel>
        <Input
          id="component-helper"
          label="Last Name"
          //   onChange={handleChange}
          aria-describedby="component-helper-text"
        />
      </FormControl>
      </Grid>

      <Grid>
      <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Husband Name</InputLabel>
          <Input id="component-simple" label="Husband Name"/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel type ="date" htmlFor="component-simple">Date Of Birth</InputLabel>
          <Input id="component-simple" label="Date Of Birth"/>
        </FormControl>
      </Grid>

      <Grid>
      <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Email-id</InputLabel>
          <Input id="component-simple" label="Email-id"/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Phone Number</InputLabel>
          <Input id="component-simple" label="Phone Number"/>
        </FormControl>
      </Grid>

      <Grid>
      <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Aadhar Number</InputLabel>
          <Input id="component-simple" label="Aadhar Number"/>
        </FormControl>
        <FormControl variant="standard" className="space">
        <Box sx={{ minWidth: 210 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Marital Status
                </InputLabel>
                <Controller
                  name="selectstatus"
                  id="level"
                  defaultValue={""}
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="level-label"
                      {...field}
                      {...register("selectstream", { required: true })}
                    >
                      <MenuItem value="Developer">Yes</MenuItem>
                      <MenuItem value="Tester">No</MenuItem>
                    </Select>
                  )}
                />
                {/* <small className="invalid">
                  {errors.selectstream?.type === "required" && (
                    <p>Please select your Role.</p>
                  )}
                </small> */}
              </FormControl>
            </Box>
        </FormControl>
      </Grid>

      <Grid>
      <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Height</InputLabel>
          <Input id="component-simple" label="Aadhar Number"/>
        </FormControl>
        <FormControl variant="standard" className="space">
          <InputLabel htmlFor="component-simple">Weight</InputLabel>
          <Input id="component-simple" label="Marital Status"/>
        </FormControl>
      </Grid>

      <Grid>
      <FormControl variant="standard" sx={{ minWidth: 410 }}>
          <InputLabel htmlFor="component-simple">Reason For Registration</InputLabel>
          <Input id="component-simple" label="Aadhar Number"/>
        </FormControl>

        <Grid>
      <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">State</InputLabel>
          <Input id="component-simple" label="State"/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">City</InputLabel>
          <Input id="component-simple" label="City"/>
        </FormControl>
      </Grid>

      <Grid>
    
      <FormControl variant="standard">
        <Box sx={{ minWidth: 210 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                Deseases
                </InputLabel>
                <Controller
                  name="desease"
                  id="level"
                  defaultValue={""}
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="level-label"
                      {...field}
                      {...register("desease", { required: true })}
                    >
                      <MenuItem value="Developer">Desease 1</MenuItem>
                      <MenuItem value="Tester">Desease 2</MenuItem>
                    </Select>
                  )}
                />
                {/* <small className="invalid">
                  {errors.selectstream?.type === "required" && (
                    <p>Please select your Role.</p>
                  )}
                </small> */}
              </FormControl>
            </Box>
        </FormControl>
      <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">EDD(Estimated Due Date)</InputLabel>
          <Input id="component-simple" label="State"/>
        </FormControl>
       
      </Grid>

      <Grid>
      <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">How Many Children</InputLabel>
          <Input id="component-simple" label="How Many Children"/>
        </FormControl>
      <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Current Month</InputLabel>
          <Input id="component-simple" label="Current Month"/>
        </FormControl>
       
      </Grid>

      </Grid>
      </Paper>
      </Grid>
    </Box>
   
  );
}
