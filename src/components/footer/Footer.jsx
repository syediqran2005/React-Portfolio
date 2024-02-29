import React from 'react'
import { Row, Col, Container, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'

function Footer() {
  return (
    <>
        <Container style={{backgroundColor : 'black'}}>
            <Row>
                <Col>
                    <h1>Footer</h1>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Footer