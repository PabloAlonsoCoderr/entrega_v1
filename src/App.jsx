import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./componentes/footer";
import Nav from "./componentes/Nav";
import Cart_acc from "./contenedores/Cart_acc";
import Details from "./contenedores/Details";
import Home from "./contenedores/Home";
import List from "./contenedores/List";
import MainContext from "./utiles/MainContext";

function App() {
  return (
    <MainContext>
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/cart" element={<Cart_acc />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MainContext>
  );
}

export default App;
