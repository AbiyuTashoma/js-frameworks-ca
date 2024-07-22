import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/layout";
import Home from "../pages/home";
import RouteNotFound from "../pages/routeNotFound";
import AProduct from "../pages/aProduct";
import Checkout from "../pages/checkout";
import Contact from "../pages/contact";

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/:id" element={<AProduct />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<RouteNotFound />} />
                </Route>
            </Routes>
        </div>
    );
}

export default AppRoutes; 