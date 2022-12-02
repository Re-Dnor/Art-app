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

export type PaginationProps = {
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

export type ParamsType = {
  params: {
    countPage: string;
  };
};
