import { Row, Col, Container, Button } from "react-bootstrap";
import DisplayPrice from "./price";
import Reviews from "./reviews";

function DisplayAProduct(product, cart, total, addProduct, removeProduct, clearCart) {
  return (
        <Container key={product.id}>
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
                        <input type="number" name="quantity" id="quantity" />
                        <Button onClick={() => addProduct(product)}>Add to cart</Button>
                        <Button onClick={() => removeProduct(product)}>Remove from cart</Button>
                        <div>Total: {total}</div>
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