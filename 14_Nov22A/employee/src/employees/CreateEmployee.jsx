import React from "react";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';

import FormControl from '@mui/material/FormControl';


import {Paper,Grid, Avatar, TextField, FormLabel, RadioGroup, FormControlLabel} from '@mui/material';
const Employee =()=>{
    const paperStyle = {padding:'38px 20px',width:350,margin:"20px auto"}
    const headerStyle = {margin:0}  
    const avtarStyle={backgroundColor:'#1bbd7e'}
    return(
    <Grid>
        <Paper elevation={20} style={paperStyle}>
         <Grid align='center'> 
            <Avatar style={avtarStyle}></Avatar>
            <h2 style={headerStyle}>Employee Data</h2>
         </Grid>
         <form>
            
            <TextField  fullWidth label='First Name' />
            <TextField fullWidth label='Last Name' />
            <TextField fullWidth label='Date Of Birth' />
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="geder1" style={{display:'initial'}}>
            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
            <FormControlLabel value="other" control={<Radio/>} label="Other"/>
            </RadioGroup>
            <TextField fullWidth label='Select Role' />
            <TextField fullWidth label='Skills' />
            
            <TextField fullWidth label='About Employee' />
            <Button type='submit' variant="contained" color="primary">Submit</Button>
         </form>
        </Paper>
  
    </Grid>
 
)
}
export default Employee