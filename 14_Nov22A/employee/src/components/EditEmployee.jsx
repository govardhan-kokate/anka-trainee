import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { styled } from '@mui/material/styles';

import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
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

import { Paper, Grid, TextField } from "@mui/material";
import { useState, useEffect } from "react";


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 550,
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UpdateEmployee(props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const [selectedDate, setSelectedDate] = useState();

  const [roles, setRoles] = useState({});
  function formatDate(timestamp) {
    let x = new Date(timestamp);
    let DD = x.getDate();
    let MM = x.getMonth() + 1;
    let YYYY = x.getFullYear();
    return YYYY + "/" + MM + "/" + DD;
  }

  const editOnClose=()=>{
    props.onClose();
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
    props.onClose(); 
   
    req.preventDefault();
    console.log(req, e);
  };

  const onError = (errors, e) => console.log(errors, e);
//-------update data/Edit------------
  const UserData = (user) => {
    axios.put(`http://localhost:3000/registration/${props.employeeData.id}`, req).then((res) => {
      console.log(res);
      props.fetchAPI();
      console.log(res.data);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/roles").then((res) => {
      console.log(res.data);
      setRoles(res.data);
    });
  }, []);


  return (
    <div>
      {/* <Button onClick={handleOpen} variant="contained">
      Add User
      </Button> */}
    
        <Box sx={style}>
          <Typography onClose={editOnClose} id="modal-modal-title" variant="h6" component="h2">
            Edit User: {props.employeeData.firstname} {" "}{ props.employeeData.lastname}
            <IconButton
              aria-label="close"
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
              onClick={editOnClose}
            >
              <CloseIcon />
            </IconButton>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* <CreateEmployee/> */}
            {/* <Box className="modalBox" sx={{position: "absolute", overflowY: "scroll", maxHeight: "90%"}}> */}
            {/* Duis mollis, est non commodo luctus, nisi erat porttitor ligula. */}
           
      <Box sx={{ width: '100%' }}>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
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
        </Grid>
        <Grid item xs={6}>
        <Box />
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
        </Grid>
        <Grid item xs={12}>
        <div className="form-group">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <label htmlFor="dateofbirth">Date of Birth</label>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    // label="For desktop"
                    // inputFormat="dd/MM/yyyy"
                   
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
        </Grid>
        <Grid item xs={0}>
          <Item></Item>
        </Grid>
      </Grid>
      
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
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
        </Grid>
        <Grid item xs={6}>
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

        </Grid>
        <Grid item xs={6}>
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
        </Grid>
        <Grid item xs={6}>
        <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="About Employee"
              style={{height: 70,width:220 }}
              {...register("bio", { required: true })}
            />
            <small className="invalid">
              {errors.bio?.type === "required" && (
                <p>Write something about you.</p>
              )}
            </small>
        </Grid>
      </Grid>
      <Grid item xs={6}>
      <Button type="submit" variant="contained" color="success">
            Submit
        </Button>
      </Grid>
    
     </form>
    </Box>
            {/* </Box> */}
          </Typography>
        </Box>
      
    </div>
  );
}
