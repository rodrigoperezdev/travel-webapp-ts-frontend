import { Header } from "./components/layout/Header";
import { SearchCarousel } from "./components/section/SearchCarousel";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <Header />
      <SearchCarousel />
      <AppRouter />
    </>
  );
}

export default App;
