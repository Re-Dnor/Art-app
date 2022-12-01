import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, grey } from "@mui/material/colors";
import Header from "../components/Header/Header";
import Description from "../components/Description/Desription";
import Cards from "../components/Cards/Cards";
import { CardsType, HomeProps } from "../types/data.type";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800]
    },
    secondary: {
      main: teal[800]
    }
  }
});

export default function Home({ cards }: HomeProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Description />
      <Cards list={cards} />
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://api.artic.edu/api/v1/artworks?page=1&limit=20");
  const data = await response.json();

  const cards = data.data.map(({ artist_title, image_id, title }: CardsType) => {
    return { artist_title, image_id, title };
  });

  return {
    props: {
      cards
    }
  };
}
