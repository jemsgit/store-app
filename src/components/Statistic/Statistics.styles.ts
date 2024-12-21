import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export const containerStyles: SxProps<Theme> = {
  color: "white",
  mt: 2,
  mb: 2,
};

export const paperContainerStyles = (isDesktop: boolean): SxProps<Theme> => ({
  flex: isDesktop ? "1" : "1 1 auto",
  display: "flex",
});

export const paperStyles = (
  isLoading: boolean,
  isDesktop: boolean
): SxProps<Theme> => ({
  padding: "12px 20px",
  boxSizing: "border-box",
  flex: isDesktop ? "1" : "1 1 auto",
  textAlign: "left",
  boxShadow: (theme) => `1px 1px 1px 1px ${theme.palette.text.secondary}`,
  background: isLoading ? "linear-gradient(-45deg, #0a171c, #efebda)" : "unset",
  animation: isLoading
    ? "gradient 2s ease infinite"
    : "flip-vertical-left 1s ease",
  backgroundSize: "400% 100%",
});

export const paperValues: SxProps<Theme> = {
  justifyContent: "space-between",
};

export const staticticsStack: SxProps<Theme> = {
  justifyContent: "space-between",
  gap: 3,
};

export const valueStyles: SxProps<Theme> = {
  fontSize: "40px",
  fontWeight: 600,
  color: "#fcff00",
};

export const value2Styles: SxProps<Theme> = {
  fontSize: "40px",
  fontWeight: 600,
  color: "#4dccff",
  textShadow: "4px 1px 11px #0300ff",
};

export const valueStylesMajor: SxProps<Theme> = {
  fontSize: "40px",
  fontWeight: 600,
  color: "black",
  "&>.record": {
    display: "inline-block",
    animation: "scale 4s ease infinite",
  },
};

export const paperStylesMajor = (
  isLoading: boolean,
  isDesktop: boolean
): SxProps<Theme> => ({
  padding: "12px 20px",
  flex: isDesktop ? "1" : "1 1 auto",
  boxSizing: "border-box",
  maxWidth: isDesktop ? "400px" : "unset",
  textAlign: "left",
  boxShadow: (theme) => `1px 1px 1px 1px ${theme.palette.text.secondary}`,
  background: (theme) =>
    isLoading
      ? "linear-gradient(-45deg, #0a171c, #efebda)"
      : theme.palette.text.secondary,
  color: "black",
  animation: isLoading
    ? "gradient 2s ease infinite"
    : "flip-vertical-left 1s ease",
  backgroundSize: "400% 100%",
});
