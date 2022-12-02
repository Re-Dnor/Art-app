import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, grey } from "@mui/material/colors";
import Header from "../components/Header/Header";
import Description from "../components/Description/Desription";

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[800]
    },
    secondary: {
      main: teal[800]
    }
  }
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Description />
    </ThemeProvider>
  );
}
