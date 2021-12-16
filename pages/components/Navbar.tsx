import React from "react";
import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

const theme = createTheme((theme) => ({
}));

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Typography variant="h4">
          Home
        </Typography>
        <Typography variant="h4">
          Notes
        </Typography>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
