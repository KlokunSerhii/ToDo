import { Button, Container } from "react-bootstrap";
import CardItem from "./components/CardItem";
import ModalTodo from "./components/Modal";
import { useState } from "react";
import FormSelect from "./components/FormSelect";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {show && <ModalTodo handleClose={handleClose} show={show} />}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        <FormSelect />
        <Button
          variant="success"
          size="sm"
          type="button"
          onClick={handleShow}
        >
          Add
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <CardItem />
      </div>
    </Container>
  );
}
export default App;
