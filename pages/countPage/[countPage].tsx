import Header from "../../components/Header/Header";
import Description from "../../components/Description/Desription";
import Cards from "../../components/Cards/Cards";
import PaginationPage from "../../components/PaginationPage/PaginationPage";
import { theme } from "../index";
import { ThemeProvider } from "@mui/material/styles";
import { CardsType, ParamsType, HomeProps } from "../../types/data.type";

function CurrentPage({ cards }: HomeProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Description />
      <Cards list={cards} />
      <PaginationPage />
    </ThemeProvider>
  );
}

export default CurrentPage;

export async function getServerSideProps({ params }: ParamsType) {
  const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${params.countPage}&limit=5`);
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
