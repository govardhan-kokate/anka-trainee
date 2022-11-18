// import CreateEmployee from './CreateEmployee'
// import axios from 'axios';
// import { useState,useEffect } from 'react';

// const Users =()=>{
//     const [data,setData] = useState([]);
//     useEffect(()=>{
//         axios.get('http://localhost:3000/registration')
//         .then(res=>{
//             console.log(res.data)
//             setData(res?.data?.data)
//         })
//         .catch(err =>{
//             alert('something went wrong')
//         })
//     },[])
//     return(<div>
//       TABLE OF USERS:
//       <table>
//         <tr>
//             <th>ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Birth Date</th>
//             <th>Gender</th>
//             <th>Role</th>
//             <th>Skill</th>
//             <th>About Emp</th>
//         </tr>{
//             data.length > 0 && 
//             data.map((item) =>{
//                 return(
//                     <tbody>
//                         <td>{item.id}</td>
//                         <td>{item.firstname}</td>
//                         <td>{item.lastname}</td>
//                         <td>{item.dateofbirth}</td>
//                         <td>{item.gender}</td>
//                         <td>{item.selectstream}</td>
//                         <td>{item.skill}</td>
//                         <td>{item.selectStream}</td>
//                         <td>{item.bio}</td>

//                     </tbody>
//                 )
//             })
//         }
//       </table>
//         </div>)
// }

// export default Users;



//-----------------------------------------------------------------------
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
      ];
      
    //   function createData(firstname, lastname, dateofbirth) {
    //     return { firstname, lastname, dateofbirth};
    //   }
      

    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [user,setUser] = useState([]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
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
              .map((user,index) => {
                return (
                  <TableRow tabIndex={-1} key={user.id}>
                      <TableCell align="left">{user.id}</TableCell>
                  <TableCell align="left">{user.firstname}</TableCell>
                  <TableCell align="left">{user.lastname}</TableCell>
                  <TableCell align="left">{user.dateofbirth}</TableCell>
                  <TableCell align="left">{user.gender}</TableCell>
                  <TableCell align="left">{user.selectstream}</TableCell>
                  <TableCell align="left">{user.skill}</TableCell>
                  <TableCell align="left">{user.bio}</TableCell>
                  
                  </TableRow>
                );
              })}
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