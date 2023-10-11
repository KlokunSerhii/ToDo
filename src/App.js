import { Button, Container, Form } from "react-bootstrap";
import CardItem from "./components/Card";
import ModalTodo from "./components/Modal";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '10px'
    }}>
      {show && <ModalTodo handleClose={handleClose} show={show} />}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '50px',
        marginBottom: '30px'
      }}>
        <Form.Control style={{ width: '200px' }} type="text" placeholder="Normal text" />
        <Button flex variant="success" size="sm" type='button' onClick={handleShow}>Add</Button>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
      }}>
        <CardItem />
      </div>

    </Container>)
}
export default App;
