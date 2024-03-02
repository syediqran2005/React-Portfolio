import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./skillcard.css";

function SkillCard({ number, title, text }) {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="cardStyle mb-4" border="0">
            <Card.Header className="border-0 fs-5">{number}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <h1>{title}</h1> <br />
                <footer className="blockquote-footer fs-5">{text}</footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SkillCard;
