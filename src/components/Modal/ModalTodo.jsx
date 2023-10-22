import { Form, Modal, Button } from 'react-bootstrap';

function ModalTodo({ handleClose, show, children, setText, setTitle, title }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="true"
      keyboard="true"
      data-bs-theme="dark"
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          placeholder="Case title"
          className="mb-3"
          onChange={e => setTitle(e.target.value)}
          name="title"
        />
        <Form.Control
          as="textarea"
          rows={8}
          type="text"
          placeholder="Description"
          onChange={e => setText(e.target.value)}
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
