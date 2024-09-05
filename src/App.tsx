import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <AppRouter />
    </>
  );
}

export default App;
