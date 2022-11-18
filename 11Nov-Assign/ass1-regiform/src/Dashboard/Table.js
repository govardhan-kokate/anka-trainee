import React,{useState} from "react";
import "./Table.css";
import data from "./db.json";

const Table =()=>{

    const [regidata,setRegidata] = useState(data);

return(
    <div className="app-container">
      <table>
        <thead>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Date Of Birth</th>
                <th>Gender</th>
                <th>Select Role</th>
                <th>Skills</th>
                <th>About Employee</th>
            </tr>
        </thead>
        <tbody>
            {regidata.map((regidt)=>(
                <tr>
                <td>{regidt.firstName}</td>
                <td>{regidt.lastName}</td>
                <td>{regidt.dateofbirth}</td>
                <td>{regidt.gender}</td>
                <td>{regidt.selectStream}</td>
                <td>{regidt.skills}</td>
                <td>{regidt.aboutemployee}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
)
}

export default Table;