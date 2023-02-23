import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderComponets } from "../../components";


export const InitialPageComponent:React.FC<{}> =()=>{
    const Navigate = useNavigate();
return (
    <Grid xs={12} sx={{mt:20}} >
        <HeaderComponets
    
    title="Bienvenidos"
description="Esta aplicacion, fue echa con TypeScript , Material Ui, Reduxtoolkit..
 "
element={
    <Grid 
    
    container
    direction="column"
    alignItems="center"
    justifyContent="center">
        <Button variant="contained"  onClick={() => Navigate("home")} >
   Pulse para ingresar
  </Button>
    </Grid>
  
}
    />
    </Grid>
    
)
}  


