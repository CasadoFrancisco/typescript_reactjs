import { Button, Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./common/NavBar";
import { Notification } from "./components";
import { NotificationProvider } from "./context/Notification.context";
import { AppRouter } from "./Router";

function App() {
  return (
    <div>
      <NotificationProvider>
        <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      </NotificationProvider>
      
    </div>
  );
}

export default App;
