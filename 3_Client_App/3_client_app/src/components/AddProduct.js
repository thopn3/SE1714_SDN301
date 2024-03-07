import { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Table, Button } from 'react-bootstrap'

function AddProduct() {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('http://localhost:9999/categories')
            .then(res => res.json())
            .then(result => {
                setCategories(result);
            })
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Product name</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Unit price</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" style={{ height: '100px' }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Select>
                                {
                                    categories.map(c => (
                                        <option key={c._id} value={c._id}>{c.name}</option>
                                    ))
                                }
                                
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit">Create</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddProduct;

