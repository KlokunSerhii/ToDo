import { Button, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTodo, deleteToDo, editTodo } from '../../redux/ToDo/slice';
import ModalTodo from '../Modal/ModalTodo';
import styles from '../styles.module.css';

function CardItem() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter.filter);
  const [show, setShow] = useState(false);
  const [idTodo, setIdTodo] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleEditTodo = () => {
    if ((text !== '') & (title !== '')) {
      const newTask = {
        title,
        text,
        isCompleted: false,
        id: idTodo,
      };
      dispatch(editTodo(newTask));
      handleClose();
      setText('');
      setTitle('');
    }
  };

  const hanEditTodo = id => {
    setIdTodo(id);
    handleShow();
  };
  console.log(filter)

  const getVisibleToDo = () => {
      if (filter === 'all' || filter ==='') {
        return todos;
      }
      return todos.filter(todo => todo.isCompleted.toString() === filter);
  };

  const filterToDo = getVisibleToDo();

  return (
    <>
      {show && (
        <ModalTodo
          handleClose={handleClose}
          show={show}
          setTitle={setTitle}
          setText={setText}
          title="Edit ToDo"
          children={
            <Button variant="primary" onClick={handleEditTodo}>
              Edit ToDo
            </Button>
          }
        />
      )}

      {filterToDo.map(({ title, id, text, isCompleted }) => (
        <Card key={id} style={{ width: '30rem' }}>
          <Card.Header as="h5">{title}</Card.Header>
          <Card.Body className={styles.card_body}>
            <div className={styles.box_info}>
              <Form.Check
                aria-label="option 1"
                type="checkbox"
                defaultChecked={isCompleted}
                onClick={() => dispatch(changeTodo(id))}
              />
              <Card.Text>{text}</Card.Text>
            </div>

            <div>
              <Button
                variant="warning"
                size="sm"
                type="button"
                style={{ margin: '5px' }}
                onClick={() => hanEditTodo(id)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                type="button"
                style={{ margin: '5px' }}
                onClick={() => dispatch(deleteToDo(id))}
              >
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default CardItem;
