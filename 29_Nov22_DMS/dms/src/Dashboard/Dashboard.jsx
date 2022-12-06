import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";
import Footer from "../Footer/Footer";
import Header from "../NavBar/Header";

const theme = createTheme();

export default function Dashboard() {
  const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };

  return (
    <>
      <Header />
      <div style={{ marginTop: "25vh", marginBottom: "17vh" }}>
        <Paper elevation={20} style={paperStyle}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 2 }, p: { xs: 10, md: 10} }}>
                <Typography component="h1" variant="h4" align="center">
                  Dashboard
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <Button sx={{ marginTop: "25px" }} variant="contained" component={Link} to="/PatientRegi">
                      Register Pregnancy{" "}
                    </Button>
                  </Grid>

                  <Grid item xs={6}>
                    <Button sx={{ marginTop: "25px" }} variant="contained">
                      Register New Born{" "}
                    </Button>
                  </Grid>
                </Grid>

                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <Button sx={{ marginTop: "25px" }} variant="contained">
                      Pregancy History{" "}
                    </Button>
                  </Grid>

                  <Grid item xs={6}>
                    <Button sx={{ marginTop: "25px" }} variant="contained">
                      New Born History{" "}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Container>
          </ThemeProvider>
        </Paper>
      </div>
      <Footer />
    </>
  );
}
