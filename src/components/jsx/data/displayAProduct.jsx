import { Row, Col, Container } from "react-bootstrap";
import DisplayPrice from "./price";
import { Link } from "react-router-dom";

function DisplayAProduct(product) {
  return (
        <Container>
            <Row xs="1" sm="2">
                <Col key={product.id} className="products-col">
                    <Link to={'/' + product.id}>
                        <img src= {product['image']['url']} className="list-image"/>
                    </Link>
                </Col>
                <Col className="list-detail">
                    <Col>
                        <div> {product['title']}</div>
                        { DisplayPrice(product['price'], product['discountedPrice'])}
                    </Col>
                    <Col className="view-button-container">
                        <Link to={'/' + product.id} className="view-button">View</Link>
                    </Col>                        
                </Col>
            </Row>
        </Container>
  );
}

export default DisplayAProduct;