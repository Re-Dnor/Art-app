export type CardsType = {
  artist_title: string;
  image_id: string;
  title: string;
};

export type HomeProps = {
  cards: CardsType[];
};

export type CardsProps = {
  list: CardsType[];
};
