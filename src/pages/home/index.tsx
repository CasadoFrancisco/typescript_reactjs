import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Stack,
} from "@mui/material";
import React from "react";
import { characters } from "../../api/characters";
import { CardComponent, HeaderComponets } from "../../components";
import { TypeCharacter } from "./inteface/character.interface";

export const HomePage: React.FC<{}> = () => {
  const [count, setCount] = React.useState(1);
  const [page, setPage] = React.useState(1);
  const [allCharacters, setAllCharacters] = React.useState<
    TypeCharacter[] | null
  >(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page })
      .then((r) => {
        setCount(r.data.info.pages);
        setAllCharacters(r.data.results);
        setTimeout(() => setLoading(false), 1500);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container fixed>
      <HeaderComponets
        title="Hola mundo"
        description="Hola mundo Bienvenido a una clase de typescript"
        element={
          <Button fullWidth variant="contained">
            Hola mundo
          </Button>
        }
      />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div>
            {allCharacters ? (
              allCharacters.length !== 0 ? (
                <Grid container spacing={2} direction="row" sx={{ mt: 4,mb:5 }}>
                  {allCharacters.map((character) => (
                    <Grid item xs={3}>
                      <CardComponent
                        image={character.image}
                        key={character.id}
                        status={character.status}
                        species={character.species}
                        name={character.name}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <p>Loading...</p>
              )
            ) : (
              <p>Error al cargar los personajes</p>
            )}
          </div>

          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Pagination
              variant="outlined"
              color="primary"
              count={count}
              page={page}
              onChange={handleChange}
              sx={{mb:3}}
              size="large"
            />
          </Box>
        </>
      )}
    </Container>
  );
};
