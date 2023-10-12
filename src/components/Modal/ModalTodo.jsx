import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/ToDo/slice";

function ModalTodo({ handleClose, show }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const AddTodo = () => {
    dispatch(addToDo({ title, text }));
    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      data-bs-theme="dark"
    >
      <Modal.Header closeButton>
        <Modal.Title>Add ToDo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          placeholder="Case title"
          className="mb-3"
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <Form.Control
          type="text"
          placeholder="Description"
          onChange={(e) => setText(e.target.value)}
          name="text"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => AddTodo()}>
          Add todo
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalTodo;
