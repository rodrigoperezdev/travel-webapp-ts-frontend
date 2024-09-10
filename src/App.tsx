import { Footer } from "./components/layout/footer/Footer";
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/sidebar/Sidebar";

import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
