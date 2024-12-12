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
    primary: {
      light: "#bfd7ff",
      main: "#ffe66d", // The main color is used for primary components like buttons
      dark: "#788bff",
      contrastText: "#ffffff", // Text color on primary components
    },
    secondary: {
      light: "#e2fdff",
      main: "#94b9f2",
      dark: "#292f36",
      contrastText: "#292f36", // Text color on secondary components
    },
    background: {
      default: "#F7FFF7", // Default background color
      paper: "#b0e6ff", // Background color for Paper components
    },
    text: {
      primary: "#343434", // Text color for primary content
      secondary: "#2f3061", // Text color for secondary content
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
