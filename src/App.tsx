import Home from "./Home.tsx";
import Navbar from "./Navbar.tsx";
import { GlobalStyle } from "./styles/AppStyles.ts";
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home/>
    </>
  );
}

export default App;
