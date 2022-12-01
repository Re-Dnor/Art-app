import { AppBar, Typography, Toolbar } from "@mui/material";

function Header() {
  return (
    <AppBar position="relative" sx={{ height: 300, alignItems: "center", justifyContent: "center" }}>
      <Toolbar>
        <Typography variant="h3" color="white" noWrap>
          Art app
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
