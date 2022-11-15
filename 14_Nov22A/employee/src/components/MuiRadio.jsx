import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useForm } from "react-hook-form";


export default function RadioButtonsGroup() {
    const {
        register,
        formState: { errors },
      } = useForm({
        mode: "onTouched",
      });
 
  return (
    <FormControl>
      <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="geder1" style={{display:'initial'}} >
            <FormControlLabel value="female" control={<Radio/>} label="Female" {...register("gender", { required: true })}/>
            <FormControlLabel value="male" control={<Radio/>} label="Male" {...register("gender", { required: true })}/>
            <FormControlLabel value="other" control={<Radio/>} label="Other" {...register("gender", { required: true })}/>
            <small className="invalid">
            {errors.gender?.type === "required" && <p>Gender is required.</p>}
          </small>
            </RadioGroup>  
    </FormControl>
  );
}