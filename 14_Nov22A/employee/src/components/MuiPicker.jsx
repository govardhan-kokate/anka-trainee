
import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useForm } from "react-hook-form";

export default function ResponsiveDatePickers() {
  const [value, setValue] = React.useState(dayjs('2022-04-07'));

  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
       
        <DesktopDatePicker
          label="Birth Date"
          value={value}
          minDate={dayjs('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />} {...register("dateofbirth", { required: true })}
        />
          <small className="invalid">
            {errors.dateofbirth?.type === "required" && (
              <p>Birth date is required.</p>
            )}
          </small>
      </Stack>
    </LocalizationProvider>
  );
}
