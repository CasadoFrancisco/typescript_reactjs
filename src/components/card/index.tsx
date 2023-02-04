import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

type CardProps = {
  image: string;
  name: string;
  status: string;
  species: string;
};

export const CardComponent: React.FC<CardProps> = ({
  image,
  name,
  status,
  species,
}) => {
  return (
    <Card sx={{width:"270px", height:"500px"}}>
      <CardMedia component="img" height="194" image={image} alt="pallea dish" />
      <CardContent>
        <Typography variant="h4" sx={{ mb: 1.5 }}>
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>Especie:{species}</Typography>
        <Typography sx={{ mt: 1.5 }}>Estado:{status}</Typography>
      </CardContent>
      <CardActions sx={{}}>
        <Button fullWidth variant="contained" size="small"  >
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
};
