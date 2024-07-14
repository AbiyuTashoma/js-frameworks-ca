import { Row, Col, Container, Button } from "react-bootstrap";
import DisplayPrice from "./price";

function DisplayAProduct(product) {
  return (
        <Container key={product.id}>
            <Row xs="1" sm="2">
                <Col>
                    <img src= {product['image']['url']} className="list-image"/>
                </Col>
                <Col className="list-detail">
                    <Row>
                        <div> {product['title']} </div>
                        <div> {product['description']} </div>
                        { DisplayPrice(product['price'], product['discountedPrice'])}
                    </Row>
                    <Row>
                        <input type="number" name="quantity" id="quantity" />
                        <Button>Add to cart</Button>
                        <Button>Checkout</Button>
                    </Row>
                </Col>
            </Row>
            <Row>
                <div>Reviews</div>
                <div>
                    { product['reviews'].map((review) =>
                    <div key={review.id}>
                        <div>{review['username']}</div>
                        <div>{review['rating']}</div>
                        <div>{review['description']}</div>
                    </div>
        
                )}</div>
            </Row>
        </Container>
  );
}

export default DisplayAProduct;