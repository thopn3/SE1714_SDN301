import { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/products')
            .then(res => res.json())
            .then(result => {
                setProducts(result);
            })
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <h2 style={{ textAlign: "center" }}>List of Products</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to={'/products/create'} className='btn btn-success'>Add new product</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table bordered hover striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(p => (
                                    <tr key={p._id}>
                                        <td>{p.name}</td>
                                        <td>{p.price}</td>
                                        <td>{p.description}</td>
                                        <td>{p.category.name}</td>
                                        <td>
                                            <Link to={'/products/delete/'+p._id}>delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductList;

