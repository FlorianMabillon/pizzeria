import React, {useState} from 'react'
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';


const Pizza = (props) => {
    const [taille, setTaille] = useState('small');
    const [quantite, setQuantite] = useState(1); 
  return (
    <Card style={{width:"18rem"}}>
        <Card.Img variant="top" src={props.lapizza.image} />
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
  )
}

export default Pizza;
