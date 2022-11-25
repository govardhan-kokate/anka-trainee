import * as React from "react";
import { useForm } from "react-hook-form";

import {
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import axios from "axios";

const DeleteEmployee = (props) => {
  const {
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const alertClose = () => {
    props.onClose();
  };

  const userDelete = () => {
    axios
      .delete(`http://localhost:3000/registration/${props.employeeData.id}`)
      .then((res) => {
        console.log("Deleted!!", res);
        props.deleteAPI();
        props.onClose();
        console.log(res.data);
      });
  };

  return (
    <div>
      <DialogTitle id="alert-dialog-title">Delete the record?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete the record ? You will not be able to
          edit after deleting.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={alertClose}>Cancel</Button>
        <Button onClick={userDelete} autoFocus>
          ok
        </Button>
      </DialogActions>
    </div>
  );
};
export default DeleteEmployee;
