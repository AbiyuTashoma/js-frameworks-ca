import { Row, Col, Container } from "react-bootstrap";
import DisplayPrice from "./price";
import { Link } from "react-router-dom";

function Products(products) {
  return (
        <Container>
            <Row xs="1" sm="2" lg="4">
                {products.map((product) =>
                    <Col key={product.id} className="products-col">
                        <img src= {product['image']['url']} className="list-image"/>
                        <div> {product['title']}</div>
                        { DisplayPrice(product['price'], product['discountedPrice']) }
                    </Col>
                )}
            </Row>
        </Container>
  );
}

export default Products;