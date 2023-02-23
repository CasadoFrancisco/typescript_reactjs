import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

type HeaderProps = {
  title: string;
  description: string;
  element?: React.ReactNode | null;
};

export const HeaderComponets: React.FC<HeaderProps> = ({
  title,
  description,
  element,
}) => {
  return (
    <div>
      <Box sx={{ width: "100%", height: "350px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%", width: "100%" }}
          xs={12}
        >
          <Grid item xs={10} sx={{ width: "100%", height: "100%" }}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ width: "100%" }}
              xs={12}
            >
              <Grid
                item
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ mt: 2, height: "100%", width: "100%" }}
              >
                <Typography variant="h1">{title}</Typography>
              </Grid>
              <Grid
                item
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ mt: 2, height: "100%", width: "100%" }}
              >
                <Typography>{description}</Typography>
              </Grid>
              {element !== undefined && (
                <Grid sx={{ mt: 4, width: "100%" }} item>
                  {element}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </div>
  );
};
