
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import axios from 'axios';
import { useState,useEffect } from 'react';
import { Button } from '@mui/material';

const Users=()=>{

    const columns = [{ id: '1', label: 'Id', minWidth: 50 },
        { id: '2', label: 'First Name', minWidth: 100 },
        { id: '3', label: 'Last name', minWidth: 100 },
        {
          id: '4',label: 'Birth Date', minWidth: 100, format: (value) => value.toLocaleString('en-US'),
        },
        { id: '5', label: 'Gender', minWidth:100 },
        { id: '6', label: 'Select Role', minWidth: 100 },  
        { id: '7', label: 'Skill', minWidth:100},
        { id: '8', label: 'About Employee', minWidth: 100 },
        { id: '8', label: 'Action', minWidth: 100 },
      ];
      
    //   function createData(firstname, lastname, dateofbirth) {
    //     return { firstname, lastname, dateofbirth};
    //   }
      

    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [user,setUser] = useState([]);

  const handleChangePage = (event,newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value,10));
    setPage(0);
  };

      useEffect(()=>{
        axios.get('http://localhost:3000/registration')
        .then(res=>{
            console.log(res.data)
            setUser(res?.data)
        })
        .catch(err =>{
            alert('something went wrong')
        })
    },[])



    const userDelete=(id,e)=>{
    // e.preventDefault();
    axios.delete(`http://localhost:3000/registration/${id}`).then(res=>{console.log("Deleted!!!",res)
    this.props.history.push("/Employee");}).catch(err=>console.log(err))
    }

return (
    <div>

<Paper sx={{ width: '100%' }}>
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
              .slice( page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user,index) =>  (
                  <TableRow key={user.id}>
                      <TableCell align="left">{index + 1}</TableCell>
                  <TableCell align="left">{user.firstname}</TableCell>
                  <TableCell align="left">{user.lastname}</TableCell>
                  <TableCell align="left">{user.dateofbirth}</TableCell>
                  <TableCell align="left">{user.gender}</TableCell>
                  <TableCell align="left">{user.selectstream}</TableCell>
                  <TableCell align="left">{user.skill}</TableCell>
                  <TableCell align="left">{user.bio}</TableCell>
                  <TableCell align="left" direction="row" ><Button variant="outlined" onClick={(e)=> userDelete(user.id)} className="space">Delete</Button><Button variant="contained">Update</Button></TableCell>
                  
                  </TableRow>
                )
              )}
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
}
export default Users;