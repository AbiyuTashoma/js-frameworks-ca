import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DisplayPrice from "./price";
import Reviews from "./reviews";
import InCart from "./inCart";
import { inArray } from "./js/inArray";

function DisplayAProduct(product, cart, addProduct, removeProduct) {
    
  return (
        <Container key={product.id} className="main-section">
            <Row xs="1" md="2">
                <Col>
                    <img src= {product['image']['url']} className="list-image" alt=""/>
                </Col>
                <Col className="list-detail">
                    <Row>
                        <div className="product-title"> {product['title']} </div>
                        <div className="product-description"> {product['description']} </div>
                        { DisplayPrice(product['price'], product['discountedPrice'])}
                    </Row>
                    <Row>
                        <div className="mt-2">
                            <Button className="me-3" variant="success" onClick={() => addProduct(product)}>Add to cart</Button>
                            <Button variant="secondary" onClick={() => removeProduct(product) } disabled= {!inArray(cart, product)}>Remove from cart</Button>
                        </div>
                        { InCart(cart, product) }
                        <div className="mt-4">
                            {cart.length ? <Link className="checkout-button" to="/checkout">Checkout</Link> : ""}
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-4">
            { Reviews(product['reviews'])}
            </Row>
        </Container>
  );
}

export default DisplayAProduct;