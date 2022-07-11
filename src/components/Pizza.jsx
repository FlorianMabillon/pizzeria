import React, {useState} from 'react'
import { Card, Button, Row, Col, Modal, ModalTitle } from 'react-bootstrap';


const Pizza = (props) => {
    const [taille, setTaille] = useState('small');
    const [quantite, setQuantite] = useState(1);
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <Card style={{width:"18rem"}}>
        <Card.Img variant="top" onClick={handleShow} src={props.lapizza.image} />
        <Card.Body>
            <Card.Title>{props.lapizza.name}</Card.Title>
            <Card.Text>
                <Row>
                    <Col md={6}>
                        <h6>Taille:
                        <select value={taille} onChange={(e) => setTaille(e.target.value)}>
                            {props.lapizza.varients.map(taille => (
                                <option>{taille}</option>
                            ))}
                        </select>
                        </h6>
                    </Col>
                    <Col md={6}>
                        <h6>Quantité :<br/>
                                <select value={quantite} onChange={(e) => setQuantite(e.target.value)}>
                                    {[...Array(10).keys()].map((v,i) => (
                                        <option>{i+1}</option>
                                    ))}
                                </select>
                        </h6>
                    </Col>
                </Row>
            </Card.Text>
            <Row>
                <Col>
                    Prix : {props.lapizza.prices[0][taille] * quantite} €
                </Col>
                <Col>
                <Button className="bg-warning text-light">Ajouter</Button>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header><h5>{props.lapizza.name}</h5></Modal.Header>
        <Modal.Body>
            <Card.Img src={props.lapizza.image}/>
            <strong>Description</strong> <br/>
            {props.lapizza.description}
        </Modal.Body>
    </Modal>
    </>
  )
}

export default Pizza;
