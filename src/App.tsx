import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import MainLayout from "./components/MainLayout/MainLayout";
import store from "./store/store";
import NotFoundPage from "./pages/404/404";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    desktop: true;
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: "dark", // Dark theme
    background: {
      default: "rgb(34, 40, 49)", // Main background
      paper: "rgb(57, 62, 70)", // Secondary background
    },
    primary: {
      main: "rgb(255, 211, 105)", // Primary accent
      contrastText: "rgb(34, 40, 49)", // Text color for primary buttons
    },
    secondary: {
      main: "rgb(238, 238, 238)", // Secondary accent (e.g., for text/icons)
      contrastText: "rgb(34, 40, 49)",
    },
    text: {
      primary: "rgb(238, 238, 238)", // Main text color
      secondary: "rgb(255, 211, 105)", // Secondary text (for highlights)
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      desktop: 720,
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<OrdersPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
