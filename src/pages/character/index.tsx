import {
  Box,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { characters } from "../../api/characters";
import { IdCharacter } from "./interfaces/character.interface";

export const CharacterPage: React.FC<{}> = () => {
  const { id } = useParams();

  const [loading, setLoading] = React.useState<boolean>(true);
  const [character, setCharacter] = React.useState<IdCharacter | null>(null);

  React.useEffect(() => {
    characters
      .getById({ id })
      .then((r) => {
        setCharacter(r.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  });
  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth="xl">
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container columnSpacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography sx={{mt:3}} variant="h1">{character!.name}</Typography>
              <Divider />
              <Typography variant="h6" sx={{mt:4}}>{character!.origin.name}</Typography>
              <Box sx={{ mt: 2 }}>
                {character!.status === "Alive" ? (
                  <Chip
                    color="primary"
                    variant="outlined"
                    label={character!.status}
                  />
                ) : character!.status === "Dead" ? (
                  <Chip
                    label={character!.status}
                    color="error"
                    variant="outlined"
                  />
                ) : character!.status === "unknown" ? (<Chip color="default" variant="outlined" label={character!.status} />) : null
              }
              </Box>
              <Typography variant="h3" sx={{mt:3}}>
                {character!.location.name}
              </Typography>
              <Typography sx={{mt:3}}>
                  {character!.species}
              </Typography>
              <Divider/>
              
            </Grid>
            <Grid item xs={5}>
              <img
                src={character?.image}
                style={{ width: "85%", borderRadius: "0.5em" }}

              />
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};
