"use client";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box>
      <AppBar sx={{backgroundColor: "white", boxShadow: "none"}}>
        <Toolbar sx={{ width: "70%", margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{color: "black"}}>Logo</Typography>
          <Box>
          <Button sx={{color: "black"}}>
Sign in</Button>
            <Button sx={{color: "black"}}>Sign up</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
