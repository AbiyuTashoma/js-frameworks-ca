import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/layout";
import Home from "../pages/home";
import RouteNotFound from "../pages/routeNotFound";
import Cart from "../pages/cart";
import AProduct from "../pages/aProduct";

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/:id" element={<AProduct />} />
                    <Route path="*" element={<RouteNotFound />} />
                </Route>
            </Routes>
        </div>
    );
}

export default AppRoutes; 