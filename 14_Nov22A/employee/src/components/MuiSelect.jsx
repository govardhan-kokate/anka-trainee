import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm } from "react-hook-form";

export default function BasicSelect() {
  const [role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Role"
          onChange={handleChange} {...register("selectstream", { required: true })}>
          <MenuItem value="">Select Stream</MenuItem>
          <MenuItem value={10}>Developer</MenuItem>
          <MenuItem value={20}>Tester</MenuItem>
          <MenuItem value={30}>Manager</MenuItem>
          <MenuItem value={40}>Team Leader</MenuItem>
        </Select>
        <small className="invalid">
            {errors.selectstream?.type === "required" && (
              <p>Please select your Role.</p>
            )}
          </small> 
      </FormControl>

    </Box>
  );
}