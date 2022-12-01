import { Container, Typography, Card, Grid, Button, CardActions, CardContent, CardMedia } from "@mui/material";

import { CardsProps } from "../../types/data.type";

function Cards({ list }: CardsProps) {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {list.map((card) => (
          <Grid item key={card.image_id} xs={12} sm={6} md={12}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  py: 10,
                  width: 600,
                  heght: 400
                }}
                image={`https://www.artic.edu/iiif/2/${card.image_id}/full/843,/0/default.jpg`}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h5">
                  {card.title}
                </Typography>
                <Typography>Author is {card.artist_title}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Cards;
