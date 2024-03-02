import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/navbar/Header';
import Content from './components/content/Content.jsx'
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />

      <Container fluid className= "pt-2" style={{backgroundColor : '#1a1a1a', color : 'white'}}>
          <Row>
            <Col>
              <p style={{ marginLeft: "5%" }}>
                DESIGNED & BUILT FROM THE DESK OF <b>DEVANTA EBISON</b>
                <span style={{ float: "right" }}>
                  OLIO PORTFOLIO TEMPLATE (MIDNIGHT) – 2024©{" "}
                </span>
              </p>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default App