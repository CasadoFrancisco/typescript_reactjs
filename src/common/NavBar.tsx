import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const NavBar: React.FC<{}> = () => {
  const Navigate = useNavigate()
  return (
    <div>
      <Box sx={{ flexgrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <Container maxWidth="xl">
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography>codrr</Typography>
                </Grid>
                <Grid item>
                  <Stack direction="row" spacing={2} >
                    <Button variant="contained" onClick={()=>Navigate('login')}>Login</Button>
                    <Button variant="outlined">Register</Button>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
