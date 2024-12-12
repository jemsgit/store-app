import { Box } from "@mui/material";

function Footer() {
  const year = new Date().getFullYear();
  return <Box sx={{ mt: 2 }}> Store Live. Все права защищены. {year}</Box>;
}

export default Footer;
