import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useForm } from "react-hook-form";
export default function MinHeightTextarea() {

    const {
        register,
        formState: { errors },
      } = useForm({
        mode: "onTouched",
      });

  return (
    <div>
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="About Employee"
      style={{ width: 395 }}  {...register("bio", { required: true })}
    />
    <small className="invalid">
    {errors.bio?.type === "required" && (
      <p>Write something about you.</p>
    )}
  </small>
  </div>

  );
}
