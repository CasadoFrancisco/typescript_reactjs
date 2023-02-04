import { Button, Container } from "@mui/material";
import React from "react";
import { HeaderComponets } from "../../components";
import { useNotification } from "../../context/Notification.context";

export const HomePage: React.FC<{}> = () => {
  return (
    <Container maxWidth="xl">
      <HeaderComponets
        title="Hola mundo"
        description="Hola mundo Bienvenido a una clase de typescript"
        element={<Button fullWidth variant="contained">Hola mundo</Button>}
      />
    </Container>
  );
};
