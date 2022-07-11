import React from 'react';
import Allpizza from '../pizza-data';
import {Container, Row, Col} from 'react-bootstrap';
import Pizza from '../components/Pizza';

const HomeScreen = () => {
  return (
    <Container>
        <Row>
            { Allpizza.map( pizza => (
                <Col md={4}>
                    <Pizza lapizza={pizza}/>
                </Col>
            ))}
        </Row>
    </Container>
  )
}
 export default HomeScreen;