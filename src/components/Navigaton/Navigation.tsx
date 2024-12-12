import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const ico = () => ({
  width: "20px",
  height: "20px",
  background: "#ff0000",
  borderRadius: "50%",
  animation: "myEffect 2s ease 2s infinite",
});

function Navigation() {
  return (
    <AppBar
      position="static"
      enableColorOnDark
      sx={{
        borderRadius: "10px",
        mb: 2,
        border: "1px white solid",
        background: (theme) => theme.palette.background.default,
      }}
    >
      <Toolbar variant="dense" sx={{ alignItems: "center" }}>
        <Typography
          variant="h6"
          color="white"
          component="div"
          sx={{
            mr: 2,
            flexGrow: 1.5,
            textAlign: "left",
          }}
        >
          STORE LIVE
        </Typography>
        <Box sx={ico}></Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
