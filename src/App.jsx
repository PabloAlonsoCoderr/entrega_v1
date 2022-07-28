import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./componentes/footer";
import Hero from "./componentes/hero";
import Nav from "./componentes/Nav";
import Cart_acc from "./contenedores/Cart_acc";
import Details from "./contenedores/Details";
import List from "./contenedores/List";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero title="SOY EL HERO" />} />
          <Route path="/list" element={<List />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<Cart_acc />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
