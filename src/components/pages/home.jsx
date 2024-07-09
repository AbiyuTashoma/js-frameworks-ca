import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
  <div>
    Home
    <Container>
      <Row xs="1" sm="2" lg="4">
        <Col>1 of 1</Col>
        <Col>2 of 1</Col>
        <Col>3 of 1</Col>
        <Col>4 of 1</Col>
      </Row>
    </Container>
  </div>);
}

export default Home;