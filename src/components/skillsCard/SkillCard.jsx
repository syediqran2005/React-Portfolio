import React from 'react'
import { Row , Col , Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './skillcard.css'

function SkillCard({index , title , text }) {
  return (
    <Container>
        <Row>
            <Col xs={12} md={4}>
    <Card className='cardStyle mb-3'>
      <Card.Header>{index}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1>{title}</h1> <br />
          <footer className="blockquote-footer">
          {text}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>  
            </Col>
        </Row>
    </Container>
  )
}

export default SkillCard