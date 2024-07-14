import { Row, Col, Container } from "react-bootstrap";
import DisplayPrice from "./price";
import { Link } from "react-router-dom";

function ProductsList(products) {
  return (
        <Container>
            <Row xs="1" sm="2" lg="3" xxl="4">
                {products.map((product) =>
                    <Col key={product.id} className="products-col">
                        <Link to={'/' + product.id}>
                            <img src= {product['image']['url']} className="list-image"/>
                        </Link>
                        <Row className="list-detail">
                            <Col>
                                <div> {product['title']}</div>
                                { DisplayPrice(product['price'], product['discountedPrice'])}
                            </Col>
                            <Col className="view-button-container">
                                <Link to={'/' + product.id} className="view-button">View</Link>
                            </Col>                        
                        </Row>
                    </Col>
                )}
            </Row>
        </Container>
  );
}

export default ProductsList;