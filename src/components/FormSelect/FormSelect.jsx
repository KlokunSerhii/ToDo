import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice/filterSlice';

function FormSelect() {
  const dispatch = useDispatch();

  return (
    <Form.Select
      aria-label="All"
      onChange={e => dispatch(changeFilter(e.target.value))}
    >
      <option value="all">All</option>
      <option value="true">Completed</option>
      <option value="false">No Completed</option>
    </Form.Select>
  );
}
export default FormSelect;
