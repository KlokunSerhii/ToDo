import { Button, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function CardItem() {
    return (
        <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <Form.Check aria-label="option 1" />
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button flex variant="warning" size="sm" type='button'>Edit</Button>{' '}
                <Button flex variant="danger" size="sm" type='button'>Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default CardItem;


