import { Box } from "@mui/material";
import { cointainer, content, mobileContent } from "./MainLayout.styles";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigaton/Navigation";
import { useDesktopMode } from "../../hooks/useDesktop";

function MainLayout() {
  const isDesktop = useDesktopMode();
  return (
    <Box sx={cointainer}>
      <Box sx={{ backgroundColor: (theme) => theme.palette.background.paper }}>
        <Box sx={isDesktop ? content : mobileContent}>
          <Navigation />
          <Outlet />
          {/* <Footer /> */}
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;
