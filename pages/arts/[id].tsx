import { CardMedia, Card } from "@mui/material";
import { useRouter } from "next/router";

function Art() {
  const { query } = useRouter();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <CardMedia component="img" image={`https://www.artic.edu/iiif/2/${query.id}/full/843,/0/default.jpg`} alt="random" />
    </Card>
  );
}

export default Art;
