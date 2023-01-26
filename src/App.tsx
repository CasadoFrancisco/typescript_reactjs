import { Button, Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./common/NavBar";
import { AppRouter } from "./Router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
