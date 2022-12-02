import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { useRouter } from "next/router";

function Description() {
  const { query } = useRouter();
  const routingIsEmpty = Object.keys(query).length === 0;

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6
      }}
    >
      <Container maxWidth="sm">
        {routingIsEmpty ? (
          <>
            <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
              The Art Institute of Chicago
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Home to a collection of art that spans centuries and the globe, the Art Institute of Chicago is located in the heart
              of the city—and is one of TripAdvisor’s Top US Attractions of 2022.
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
              <Button variant="contained" href="/countPage/1">
                See arts
              </Button>
              <Button variant="outlined" href="https://www.artic.edu/" target="_blank">
                Institute
              </Button>
            </Stack>
          </>
        ) : (
          <>
            <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
              The Art Institute of Chicago
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              The Art Institute of Chicago shares its singular collections with our city and the world. We collect, care for, and
              interpret works of art across time, cultures, geographies, and identities, centering the vision of artists and
              makers.
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
              <Button variant="contained" href="/">
                Home
              </Button>
              <Button variant="outlined" href="https://www.artic.edu/" target="_blank">
                Institute
              </Button>
            </Stack>
          </>
        )}
      </Container>
    </Box>
  );
}

export default Description;
