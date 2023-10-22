import { Col, Container, Row } from 'react-bootstrap';
import CardItem from './CardItem';
import AddTodo from './AddTodo/AddTodo';

function App() {
  return (
    <Container fluid="md">
      <Row className="justify-content-md-center align-items-center my-5">
        <Col xs={12} md={8}>
          <AddTodo />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <CardItem />
        </Col>
      </Row>
    </Container>
  );
}
export default App;
