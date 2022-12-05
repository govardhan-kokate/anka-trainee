import React,{useState} from "react";
import { AppBar,Tabs,Tab,Toolbar,Button,useMediaQuery,useTheme, Typography} from "@mui/material";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import DrawerComp from "./DrawerComp";
import {Link} from "react-router-dom";

// const PAGES=["Doctor","Patient","Baby","Vaccination"];

const Header = () =>{
  const [value,setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
    return(
      <>
       <AppBar sx={{background:"#063970"}}>
       <Toolbar>
        <VaccinesIcon/>
        {  isMatch ? (
            <>
            <Typography sx={{fontSize:"1.5rem",paddingLeft:"10%"}}>
             MOTHERCARE
            </Typography>
            <DrawerComp/>
            </>
          ):(
            <>
             {/* <Tabs 
                sx={{marginLeft:"auto"}} textColor="inherit" value={value} onChange={(e,value)=>setValue(value)} indicatorColor="secondary">
                  {
                    PAGES.map((page,index)=>(
                      <Tab key={index} label={page} />
                    ))
                  }
             </Tabs>  */}
          
        <Tabs sx={{marginLeft:"auto"}} textColor="inherit" value={value} onChange={(e,value)=>setValue(value)} indicatorColor="secondary">
        {/* <NavLink style={{textDecoration:"none", color:"white"}} to="/DoctorRegi" /> */}
        <Tab label="Doctor" component={Link} to="/DoctorRegi" />
        <Tab label= "Patient" component={Link} to="/PatientRegi"/>
        <Tab label="Baby" component={Link} to="/BabyRegi"/>
        <Tab label="Vaccination" component={Link}/>
        </Tabs>
        
        <Button sx={{marginLeft:"auto"}} variant="contained">Login{" "}</Button>
        <Button sx={{marginLeft:'10px'}} variant="contained">SignUp{" "}</Button>
            </>
          )
        }

       </Toolbar>
    
       </AppBar>
      </>
    )
}

export default Header;