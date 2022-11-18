import React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

import FormLabel from "@mui/material/FormLabel";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import "./CreateEmployee.css";
import { useForm } from "react-hook-form";
import axios from "axios";

import { Paper, Grid, Avatar, TextField } from "@mui/material";
import { useState, useEffect } from "react";

const Employee = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const paperStyle = { padding: "38px 20px", width: 400, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avtarStyle = { backgroundColor: "#1bbd7e" };

  const [selectedDate, setSelectedDate] = React.useState();

  const [roles, setRoles] = useState({});
  function formatDate(timestamp) {
    let x = new Date(timestamp);
    let DD = x.getDate();
    let MM = x.getMonth() + 1;
    let YYYY = x.getFullYear();
    return YYYY + "/" + MM + "/" + DD;
  }

let req;
  const onSubmit = (user, e) => {
    
req={
  firstname: user.firstname,
  lastname:user.lastname,
  dateofbirth: formatDate(selectedDate),
  gender: user.gender,
  selectstream: user.selectstream,
  skill: user.skill,
  selectStream:user.selectStream,
  bio: user.bio
}
    UserData(req);  
    req.preventDefault();
    console.log(req, e);
  };

  const onError = (errors, e) => console.log(errors, e);

  const UserData = (user) => {
    axios.post(`http://localhost:3000/registration`, user).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/roles").then((res) => {
      console.log(res.data);
      setRoles(res.data);
    });
  }, []);

  // const [skills,setSkills] = useState(" ");

  // const SkillData=(skills)=>{
  //   axios.get(`http://localhost:3000/skills`, skills )
  //   .then(res => {
  //     console.log(res);
  //     console.log(res.data);
  //   })

  //   skills.map(skill=>{
  //     <FormLabel key={FormLabel.id} skill={FormLabel.skill}>
  //     {FormLabel.skill}
  //     </FormLabel>
  //   })
  // }

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avtarStyle}></Avatar>
          <h2 style={headerStyle}>Employee Data</h2>
        </Grid>

        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Grid>
            <TextField
              fullWidth
              label="First Name"
              {...register("firstname", { required: true, minLength: 2 })}
            />
            <small className="invalid">
              {errors.firstname?.type === "required" && (
                <p>First name is required.</p>
              )}
            </small>
            <small className="invalid">
              {errors.firstname?.type === "minLength" && (
                <p>Please enter minimun 2 char.</p>
              )}
            </small>

            <Box sx={{ m: "0.5rem" }} />
            <TextField
              fullWidth
              label="Last Name"
              {...register("lastname", { required: true, minLength: 2 })}
            />
            <small className="invalid">
              {errors.lastname?.type === "required" && (
                <p>Last name is required.</p>
              )}
            </small>
            <small className="invalid">
              {errors.lastname?.type === "minLength" && (
                <p>Please enter minimun 2 char.</p>
              )}
            </small>
            <Box sx={{ m: "0.5rem" }} />

            <div className="form-group">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <label htmlFor="dateofbirth">Date of Birth</label>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    // label="For desktop"
                    inputFormat="dd/MM/yyyy"
                   
                    {...register("dateofbirth", { required: "DOB is Required" })}
                    onChange={(newValue) => {
                      console.log(newValue)
                      setSelectedDate(newValue);
                    }}
                    value={selectedDate}
                    maxDate={new Date()}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>

              {errors.dateofbirth && (
                <span className="text-danger"> {errors.dateofbirth.message}</span>
              )}
            </div>

            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Birth Date"
                  name="dateofbirth"
                  value={value}
                  maxDate={new Date()}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  {...register("dateofbirth", { required: true})}
      
                />
                <small className="invalid">
                  {errors.dateofbirth?.type === "required" && (
                    <p>Birth date is required.</p>
                  )}
                </small>
              </Stack>
            </LocalizationProvider> */}

            <FormControl>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="geder1"
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  {...register("gender", { required: true })}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  {...register("gender", { required: true })}
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  {...register("gender", { required: true })}
                />
                <small className="invalid">
                  {errors.gender?.type === "required" && (
                    <p>Gender is required.</p>
                  )}
                </small>
              </RadioGroup>
            </FormControl>
            {/* --------------------------Dropdown-------------------------------- */}

            {/* <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Role
                </InputLabel>

                <Controller
                  name="selectstream"
                  id="level"
                  defaultValue={""}
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="level-label"
                      {...field}
                      {...register("selectstream", { required: true })}
                    >
                    { 
                     roles.map((r)=>{
                      <MenuItem value={r.id}>{r.role}</MenuItem>
                     })
                    }
                    </Select>
                  )}
                />
                <small className="invalid">
                  {errors.selectstream?.type === "required" && (
                    <p>Please select your Role.</p>
                  )}
                </small>
              </FormControl>
            </Box> */}

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Role
                </InputLabel>
                <Controller
                  name="selectstream"
                  id="level"
                  defaultValue={""}
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="level-label"
                      {...field}
                      {...register("selectstream", { required: true })}
                    >
                      <MenuItem value="Developer">Developer</MenuItem>
                      <MenuItem value="Tester">Tester</MenuItem>
                      <MenuItem value="Manager">Manager</MenuItem>
                      <MenuItem value="Team Leader">Team Leader</MenuItem>
                    </Select>
                  )}
                />
                <small className="invalid">
                  {errors.selectstream?.type === "required" && (
                    <p>Please select your Role.</p>
                  )}
                </small>
              </FormControl>
            </Box>

            {/*  --------------------------------- */}
            <FormLabel component="legend">Skill</FormLabel>
            <FormControlLabel
              value="Java"
              control={<Checkbox />}
              label="Java"
              {...register("skill", { required: true })}
            />
            <FormControlLabel
              value="NodeJS"
              control={<Checkbox />}
              label="NodeJS"
              {...register("skill", { required: true })}
            />
            <FormControlLabel
              value="React"
              control={<Checkbox />}
              label="React"
              {...register("skill", { required: true })}
            />
            <FormControlLabel
              value="Android"
              control={<Checkbox />}
              label="Android"
              {...register("skill", { required: true })}
            />
            <small className="invalid">
              {errors.skill?.type === "required" && (
                <p>Please select your skill.</p>
              )}
            </small>
            {/*  --------------------------------- */}

            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="About Employee"
              style={{ width: 395 }}
              {...register("bio", { required: true })}
            />
            <small className="invalid">
              {errors.bio?.type === "required" && (
                <p>Write something about you.</p>
              )}
            </small>
          </Grid>
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </form>
      </Paper>

      <Button variant="contained" color="primary" target="_blank" href="/">
        Show table
      </Button>
    </Grid>
  );
};
export default Employee;
