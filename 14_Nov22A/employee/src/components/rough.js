
// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import axios from "axios";
// import {useEffect,useState} from "react";

// const User=()=>{
//     const [data,setData] = useState([]);
//     const [search,setSearch] = useState("");
//     useEffect(()=>{
//         axios.get('http://localhost:3000/registration')
//         .then(res=>{
//             console.log(res)
//             console.log(res.data)
//             setData(res?.data?.data)
//         })
//         .catch(err =>{
//             alert('something went wrong')
//         })
//     },[])

//     const columns = [
//         { field: 'id', headerName: 'ID', width: 70 },
//         { field: 'firstname', headerName: 'First name', width: 130 },
//         { field: 'lastname', headerName: 'Last name', width: 130 },
//         { field: 'dateofbirth', headerName: 'Birth Date', width: 130 }


//       ];
      
//     const rows = [
//         { id: 1, firstname: 'Snow', lastname: 'Cerse', dateofbirth: '02/03/2021' },
//         { id: 2, firstname: 'Jon', lastname: 'Cersei', dateofbirth: '04/04/2022' }
//       ];
      
// return(
//     <div style={{ height: 400, width: '100%' }}>
//     User Table
//     <input type="text" placeholder="search here" onChange={(e)=>{
//         setSearch(e.target.value);
//     }}/>

//    {/* {data.filter(item=>{
//         if(search===""){
//             return item
//         }
//         else if(item.name.toLowerCase().includes(search.toLowerCase())){
//          return item
//         }
//     }).map((d)=>{
//           return(
//             <p>
//                 {d.firstname}
//             </p>
//           );
//         })
//     }  */}

    

//  <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />


//     </div>
// )
// }
// export default User; 


//----------------------------create table using mui------------------------------------