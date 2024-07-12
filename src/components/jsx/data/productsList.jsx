import { Row, Col, Container } from "react-bootstrap";
import { Price, DiscountedPrice } from "../styled/styled";
import { Link } from "react-router-dom";

function Products(products) {
  return (
        <Container>
            <Row xs="1" sm="2" lg="4">
                {products.map((product) =>
                    <Col key={product.id} className="products-col">
                        <img src= {product['image']['url']} className="list-image"/>
                        <div> {product['title']}</div>
                        <div> 
                            <Price isDiscounted = { product['price'] > product['discountedPrice'] }> { product['price'] } </Price> 
                            { (product['price'] > product['discountedPrice']) ? <DiscountedPrice isDiscounted={ (product['price'] > product['discountedPrice']) }>{ product['discountedPrice'] }</DiscountedPrice> : ''}
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
  );
}

export default Products;