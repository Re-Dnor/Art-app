import { Box, Container, Typography, Button, Stack } from "@mui/material";

function Description() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6
      }}
    >
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          The Art Institute of Chicago
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Home to a collection of art that spans centuries and the globe, the Art Institute of Chicago is located in the heart of
          the city—and is one of TripAdvisor’s Top US Attractions of 2022.
        </Typography>
        <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" href="https://www.artic.edu/" target="_blank">
            Visit to Art Institute
          </Button>
          <Button variant="outlined">Secondary action</Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Description;
