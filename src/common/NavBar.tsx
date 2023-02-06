import ShoppingCartOutLinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { CartComponents } from "./cart";

export const NavBar: React.FC<{}> = () => {
  const Navigate = useNavigate();
  const items = useAppSelector((state) => state.cartReducer);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleStateViewDrawer = () => {
    setOpen((state) => !state);
  };
  return (
    <div>
      <Box
        sx={{ flexgrow: 1 }}
        position="fixed"
        zIndex={1}
        top="0"
        left="0"
        width="100%"
      >
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
                  <Typography>Rick and Morty App</Typography>
                </Grid>
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <IconButton
                      color="primary"
                      onClick={() => handleStateViewDrawer()}
                    >
                      <Badge color="error" badgeContent={items.length}>
                        <ShoppingCartOutLinedIcon />
                      </Badge>
                    </IconButton>
                  </Stack>
                </Grid>
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      onClick={() => Navigate("login")}
                    >
                      Login
                    </Button>
                    <Button variant="outlined">Register</Button>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
        <CartComponents
          open={open}
          handleStateViewDrawer={handleStateViewDrawer}
        />
      </Box>
    </div>
  );
};
