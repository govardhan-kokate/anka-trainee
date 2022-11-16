import React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
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
import { useState,useEffect } from "react";

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

  const [value, setValue] = React.useState(dayjs("2022-04-07"));

  const onSubmit = (user,e) => {

    UserData(user);
    //data.preventDefault();
   console.log(user,e);

 };

  const onError = (errors, e) =>console.log(errors, e);

  const UserData=(user)=>{
    axios.post(`http://localhost:3000/registration`, user )
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }


  
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

        <form onSubmit={handleSubmit(onSubmit,onError)}>
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

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Birth Date"
                  value={value}
                  minDate={dayjs("2017-01-01")}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <small className="invalid">
                  {errors.dateofbirth?.type === "required" && (
                    <p>Birth date is required.</p>
                  )}
                </small>
              </Stack>
            </LocalizationProvider>

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
{/* const DropDownRole = () => {
  const[role, setRole] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000/skills").then((res) => {
      console.log(res.data);
      setContents(res.data);
    })
  }, []);

  {props.content.df?.map((s) => {
    return <MenuItem value={s.skill}>{s.skill}</MenuItem>;
 })
 } */}



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
            </Box> */}

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
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
export default Employee;
