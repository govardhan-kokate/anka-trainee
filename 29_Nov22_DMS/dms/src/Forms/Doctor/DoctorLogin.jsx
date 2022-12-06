import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Header from "../../NavBar/Header";
import Footer from "../../Footer/Footer";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Anka Technology © "}
      <Link color="inherit" href="/">
        Doctor Management System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function DoctorLogin() {

  const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };

  return (
    <>
      <Header />
      <div style={{ marginTop: "25vh" ,marginBottom: "17vh"}}>
        <Paper elevation={20} style={paperStyle}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 2 }, p: { xs: 2, md: 2 } }}
              >
                <Typography component="h1" variant="h4" align="center">
                  Doctor Login 
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="emailId"
                      label="Enter Registered Email-id"
                      fullWidth
                      autoComplete="emailId"
                      variant="standard"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      id="password"
                      label="password"
                      fullWidth
                      autoComplete="password"
                      variant="standard"
                    />
                  </Grid>
                 
                </Grid>
                <Button sx={{marginTop:"25px"}} variant="contained">Login{" "}</Button>
              </Paper>
              <Copyright />
            </Container>
          </ThemeProvider>
        </Paper>
      </div>
      <Footer/>
    </>
  );
}
