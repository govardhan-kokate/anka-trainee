import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { Button, Dialog } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import UpdateEmployee from "./UpdateEmployee";
import DeleteEmployee from "./DeleteEmployee";
import { useForm } from "react-hook-form";



const EmployeeTable = (props) => {

  const columns = [
    { id: "1", label: "ID", minWidth: 50 },
    { id: "2", label: "FIRST NAME", minWidth: 100 },
    { id: "3", label: "LAST NAME", minWidth: 100 },
    {
      id: "4",
      label: "BIRTH DATE",
      minWidth: 100,
      format: (value) => value.toLocaleString("en-US"),
    },
    { id: "5", label: "GENDER", minWidth: 100 },
    { id: "6", label: "SELECT ROLE", minWidth: 100 },
    { id: "7", label: "SKILL", minWidth: 100 },
    { id: "8", label: "ABOUT EMPLOYEE", minWidth: 100 },
    { id: "9", label: "ACTION", minWidth: 100 },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [user, setUser] = useState([]);

  const [edit, setEdit] = useState([]);
  const [deleteuser, setDeleteUser] = useState([]);

  const [open, setOpen] = useState(false);
  const [openalert, setOpenAlert] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/registration")
      .then((res) => {
        console.log(res.data);
        setUser(res?.data);
      })
      .catch((err) => {
        alert("something went wrong");
      });
  }, []);

  const userOpen = (user) => {
    setEdit(user);
    setOpen(true);
  };

  const userClose = () => {
    setOpen(false);
  };

  const alertOpen = (user) => {
    setDeleteUser(user);
    setOpenAlert(true);
  };

  const alertClose = () => {
    setOpenAlert(false);
  };
  //----------to auto update data----------
  const FetchData = () => {
    axios.get(`http://localhost:3000/registration`).then((res) => {
      console.log(res.data);
      setUser(res?.data);
    });
  };

  const { setValue } = useForm();
  return (

    <div> 
      <Modal
        open={open}
        onClose={userClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      
        <UpdateEmployee
          onClose={userClose}
          employeeData={edit}
          fetchAPI={FetchData}
        ></UpdateEmployee>
      </Modal>

      <Dialog
        open={openalert}
        onClose={alertClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DeleteEmployee
          onClose={alertClose}
          employeeData={deleteuser}
          deleteAPI={FetchData}
        ></DeleteEmployee>
      </Dialog>

      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {user
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                  <TableRow key={user.id}>
                    <TableCell align="left">{index + 1}</TableCell>
                    <TableCell align="left">{user.firstname}</TableCell>
                    <TableCell align="left">{user.lastname}</TableCell>
                    <TableCell align="left">{user.dateofbirth}</TableCell>
                    <TableCell align="left">{user.gender}</TableCell>
                    <TableCell align="left">{user.selectstream}</TableCell>
                    <TableCell align="left">{user.skill}</TableCell>
                    <TableCell align="left">{user.bio}</TableCell>
                    <TableCell align="left" direction="row">
                      <Button
                        variant="outlined"
                        onClick={(e) => alertOpen(user)}
                        className="space">
                        Delete
                      </Button>
                  
                      <Button
                        variant="contained"
                        onClick={() => userOpen(user)}
                      >
                        Update
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 25, 100]}
          component="div"
          count={user.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

  
    </div>
  );
};
export default EmployeeTable;
