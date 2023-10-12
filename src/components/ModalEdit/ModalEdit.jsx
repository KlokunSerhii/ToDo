import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { editTodo } from "../../redux/ToDo/slice";
import { useDispatch } from "react-redux";

function ModalEdit({ handleClose, show, idTodo }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleEditTodo = () => {
    const newTask = {
      title,
      text,
      isCompleted: false,
      id: idTodo,
    };
    dispatch(editTodo(newTask));
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
        <Modal.Title>Edit ToDo</Modal.Title>
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
        <Button variant="primary" onClick={() => handleEditTodo()}>
          Edit ToDo
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEdit;
