import { Row, Col, Container, Button } from "react-bootstrap";
import DisplayPrice from "./price";
import Reviews from "./reviews";

function DisplayAProduct(product) {
  return (
        <Container key={product.id}>
            <Row xs="1" sm="2">
                <Col>
                    <img src= {product['image']['url']} className="list-image" alt="picture"/>
                </Col>
                <Col className="list-detail">
                    <Row>
                        <div className="product-title"> {product['title']} </div>
                        <div className="product-description"> {product['description']} </div>
                        { DisplayPrice(product['price'], product['discountedPrice'])}
                    </Row>
                    <Row>
                        <input type="number" name="quantity" id="quantity" />
                        <Button>Add to cart</Button>
                        <Button>Checkout</Button>
                    </Row>
                </Col>
            </Row>
            { Reviews(product['reviews'])}
        </Container>
  );
}

export default DisplayAProduct;