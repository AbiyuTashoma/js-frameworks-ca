import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/methods/layout";
import Home from "./components/pages/home";
import RouteNotFound from "./components/pages/routeNotFound";
import Cart from "./components/pages/cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
