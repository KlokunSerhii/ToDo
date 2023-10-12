import { Button, Container } from 'react-bootstrap';
import CardItem from './CardItem';
import ModalTodo from './Modal';
import { useState } from 'react';
import FormSelect from './FormSelect';
import { useDispatch } from 'react-redux';
import { addToDo } from '../redux/ToDo/slice';
import styles from './styles.module.css';
function App() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const AddTodo = () => {
    if ((text !== '') & (title !== '')) dispatch(addToDo({ title, text }));
    console.log(text)
    handleClose();
    setText('');
    setTitle('');
  };

  return (
    <Container className={styles.container}>
      {show && (
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
      )}
      <div className={styles.container_form}>
        <FormSelect />
        <Button variant="success" size="sm" type="button" onClick={handleShow}>
          Add
        </Button>
      </div>
      <div className={styles.container_card}>
        <CardItem />
      </div>
    </Container>
  );
}
export default App;
