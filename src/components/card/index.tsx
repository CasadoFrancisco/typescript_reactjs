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
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCard } from "../../redux/slices/cart.slice";
import { setItem } from "../../utils/localStorage";

type CardProps = {
  image: string;
  name: string;
  status: string;
  species: string;
  id: number;
};

export const CardComponent: React.FC<CardProps> = ({
  image,
  name,
  status,
  species,
  id,
}) => {
  const [disableBtn, setDisableBtn] = React.useState<boolean>(false);
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  const itemExist = useAppSelector((state) => state.cartReducer);

  React.useEffect(() => {
    itemExist.some((item) => item.id === id)
      ? setDisableBtn(true)
      : setDisableBtn(false);
      setItem('cart', itemExist)
  }, [itemExist, id]);

  const handleAddToCard = () => {
    dispatch(
      addToCard({
        id,
        image,
        name,
        info: status,
      })
    );
  };

  return (
    <Card sx={{ width: "101%" }}>
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
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={() => navigate(`/character/${id}`)}
        >
          Learn more
        </Button>
        <Button
          fullWidth
          variant="outlined"
          size="small"
          disabled={disableBtn}
          onClick={handleAddToCard}
        >
          Add to card
        </Button>
      </CardActions>
    </Card>
  );
};
