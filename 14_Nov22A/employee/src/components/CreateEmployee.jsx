import React from "react";
import Button from '@mui/material/Button';
import MuiPicker from'./MuiPicker';
import MuiSelect from './MuiSelect';
import MuiCheck from './MuiCheck';
import MuiRadio from './MuiRadio';
import MuiTxtArea from './MuiTxtArea';
import Box from '@mui/material/Box';
import './CreateEmployee.css';
import { useForm } from "react-hook-form";

import {Paper,Grid, Avatar, TextField} from '@mui/material';

const Employee =()=>{

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        mode: "onTouched",
      });

    const paperStyle = {padding:'38px 20px',width:400,margin:"20px auto"}
    const headerStyle = {margin:0}  
    const avtarStyle={backgroundColor:'#1bbd7e'}

    const onSubmit = (data) => {
        // data.preventDefault();
        console.log(data);
        //  setTimeout(()=>{
        //   setLoading(false);
        //  },5000)
      };
    

    return(
       <Grid>
        <Paper elevation={20} style={paperStyle}>
         <Grid align='center'>       
            <Avatar style={avtarStyle}></Avatar>
            <h2 style={headerStyle}>Employee Data</h2>
         </Grid>
      
         <form onSubmit={handleSubmit(onSubmit)}>
            <Grid>
            <TextField  fullWidth label='First Name'  {...register("firstname", { required: true, minLength: 2 })}/>
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
     
            <Box sx={{ m: '0.5rem' }} />
            <TextField fullWidth label='Last Name'  {...register("lastname", { required: true, minLength: 2 })}/>
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
            <Box sx={{ m: '0.5rem' }} />
            <MuiPicker />
            <MuiRadio />
            <MuiSelect {...register("selectstream", { required: true })}/>
             <MuiCheck/>
            <MuiTxtArea/>
            </Grid>
            <Button type='submit' variant="contained" color="primary">Submit</Button>
         </form>
        </Paper>
      </Grid>

)
}
export default Employee