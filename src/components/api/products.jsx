import { Row, Col, Container } from "react-bootstrap";

function Products(products) {
  return (
        <Container>
            <Row xs="1" sm="2" lg="4">
                {products.map((product) =>
                    <Col key={product.id}>
                        <img src= {product['image']['url']} />
                        <div>Title: {product['title']}</div>
                        <div>Price: {product['price']}</div>
                    </Col>
                )};
            </Row>
        </Container>
  );
}

export default Products;