import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import { GlobalStyles } from "./components/styles/Globalstyled";
import Footer from "./components/Footer";

const style = {
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#8a1c4a",
  },
  width: "95vw",
  "max-width": "1000px",
  margins: {},
  responsive: "768px",
};
const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
