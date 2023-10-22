import { Button, Col, Row } from 'react-bootstrap';
import ModalTodo from '../Modal/ModalTodo';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToDo } from '../../redux/ToDo/slice';
import FormSelect from '../FormSelect';

function AddTodo() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const AddTodo = () => {
    if ((text !== '') & (title !== '')) dispatch(addToDo({ title, text }));
    console.log(text);
    handleClose();
    setText('');
    setTitle('');
  };

  return (
    <>
      <ModalTodo
        handleClose={handleClose}
        show={show}
        setTitle={setTitle}
        setText={setText}
        title="Add ToDo"
        children={
          <Button variant="primary" onClick={AddTodo}>
            Add todo
          </Button>
        }
      />
      <Row className="justify-content-md-center align-items-center">
        <Col xs={10} md={11}>
          <FormSelect />
        </Col>

        <Col xs={2} md={1}>
          <Button
            variant="success"
            size="sm"
            type="button"
            onClick={handleShow}
          >
            Add
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default AddTodo;
