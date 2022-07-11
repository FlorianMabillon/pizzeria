import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { ImMobile } from "react-icons/im";
import {AiOutLineMail } from "react-icons/ai"

export const Contact = () => {
  return (
    <Container style={{marginTop:'50px'}}>
        <Row>
            <Col md={6}>
                <h1>Pizza Delicious</h1>
                <h2>Notre adresse</h2>
                <p>103, Rue des olives noires </p>
                <p>75021 Paris</p>
                <p>POUR VOTRE INFORMATION! Nous offrons un service traiteur complet pour tout événement, 
            grand ou petit. Nous comprenons vos besoins et nous préparons nos plats pour satisfaire
            les critères les plus importants, à la fois esthétiques et gustatifs.</p>
            </Col>
        </Row>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </Container>
  )
}
export default Contact;


