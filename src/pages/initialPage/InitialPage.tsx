import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderComponets } from "../../components";


export const InitialPageComponent:React.FC<{}> =()=>{
    const Navigate = useNavigate();
return (
    <Box sx={{mt:20}}>
        <HeaderComponets
    
    title="Bienvenidos"
description="Esta aplicacion, fue echa con TypeScript , Material Ui, Reduxtoolkit..
 "
element={
  <Button fullWidth variant="contained"  onClick={() => Navigate("home")}>
   Pulse para ingresar
  </Button>
}
    />
    </Box>
    
)
}  


