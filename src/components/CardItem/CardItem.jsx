import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ModalEdit from "../ModalEdit";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTodo, deleteToDo } from "../../redux/ToDo/slice";

function CardItem() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter.filter);
  const [show, setShow] = useState(false);
  const [idTodo, setIdTodo] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteTodo = (id) => {
    dispatch(deleteToDo(id));
  };

  const handleChangeTodo = (id) => {
    dispatch(changeTodo(id));
  };

  const hanEditTodo = (id) => {
    setIdTodo(id);
    handleShow();
  };

  const getVisibleToDo = () => {
    if (!todos) {
      return;
    } else if (filter === "all") {
      return todos;
    }
    return todos.filter(
      (todo) => todo.isCompleted.toString() === filter
    );
  };

  const filterToDo = getVisibleToDo();

  console.log(filter);
  return (
    <>
      {show && (
        <ModalEdit
          handleClose={handleClose}
          show={show}
          idTodo={idTodo}
        />
      )}
      {filterToDo.map(({ title, id, text, isCompleted }) => (
        <Card key={id} style={{ width: "30rem" }}>
          <Card.Header as="h5">{title}</Card.Header>
          <Card.Body
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <Form.Check
                aria-label="option 1"
                type="checkbox"
                defaultChecked={isCompleted}
                onClick={() => handleChangeTodo(id)}
              />
              <Card.Text>{text}</Card.Text>
            </div>

            <div>
              <Button
                variant="warning"
                size="sm"
                type="button"
                style={{ margin: "5px" }}
                onClick={() => hanEditTodo(id)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                type="button"
                style={{ margin: "5px" }}
                onClick={() => deleteTodo(id)}
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
