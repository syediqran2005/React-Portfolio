import React from 'react'
import { Row, Col, Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './experienceCard.css'

function ExperienceCard({ title, subTitle, text, year }) {
    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Card className='experienceCardStyle mb-4 w-75' border='0'>
                        <Card.Header className='border-0' as={'h1'}>{title}</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0" >
                                <h5>
                                    {subTitle}
                                    <span style={{float : 'right'}}>{year}</span>
                                </h5>
                                <footer className="blockquote-footer mb-2" style={{borderBottom : '1px solid grey'}}>
                                    <h5 dangerouslySetInnerHTML={{ __html: text }} ></h5>             
                                </footer>
                            </blockquote> 
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>
    )
}

export default ExperienceCard