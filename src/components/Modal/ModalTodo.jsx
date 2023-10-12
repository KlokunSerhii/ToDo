import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { useEffect } from "react";

function ModalTodo({
  handleClose,
  show,
  children,
  setText,
  setTitle,
  title,
}) {
  const handleEscape = (event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    if (show) {
      return window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  });
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="true"
      keyboard={false}
      data-bs-theme="dark"
      onClick={(e) => handleBackdrop(e)}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
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
        {children}
      </Modal.Footer>
    </Modal>
  );
}

export default ModalTodo;
