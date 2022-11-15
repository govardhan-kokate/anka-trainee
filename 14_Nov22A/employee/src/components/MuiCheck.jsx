import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import {FormControlLabel} from '@mui/material';
import {Grid} from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import { useForm } from "react-hook-form";


export default function Checkboxes() {
    const {
        register,
        formState: { errors },
      } = useForm({
        mode: "onTouched",
      });

  return (
        <Grid>
         <FormLabel component="legend">Skill</FormLabel>
        <FormControlLabel value="Java" control={<Checkbox/>} label="Java"  {...register("skill", { required: true })}/>
         <FormControlLabel value="NodeJS" control={<Checkbox/>} label="NodeJS"  {...register("skill", { required: true })}/>
         <FormControlLabel value="React" control={<Checkbox/>} label="React"  {...register("skill", { required: true })}/>
         <FormControlLabel value="Android" control={<Checkbox/>} label="Android"  {...register("skill", { required: true })}/>
         <small className="invalid">
            {errors.skill?.type === "required" && (
              <p>Please select your skill.</p>
            )}
          </small>
         </Grid>

  );
}
