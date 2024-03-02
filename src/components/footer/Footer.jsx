import React from 'react'
import { Row, Col, Container,Button } from 'react-bootstrap';
import footerimage from '../../assets/images/footerimage.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'

function Footer() {
  return (
    <>
        <footer className="footerContainer py-4">
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <div className="">
              <h5 className='mt-4 '>JANELLE BROWN</h5>
              <p className='mt-3 fs-5' style={{color : 'grey'}}>Senior UX Designer, currently crafting <br /> experiences at Crosby.</p>
              <img src={footerimage} alt="Logo" width="350" height="350" className="mr-2" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="text-md-right">
              <h3 className='mt-4'>Think I’d be a good fit for your team or project? </h3>
              <h3>Let’s connect.</h3> <br />
              <Button variant="light" className='pt-2 pb-2 mt-3 mb-3'  style={{borderRadius : '50px', width: '16rem' , fontSize : '18px'}} >syediqran2004@gmail.com</Button> <br /> <br />
              <Row>
                <Col md={6}>
              <ul className="list-unstyled">
                <h5 className='mb-4' style={{color : 'grey'}}>SELECTED PROJECTS</h5> 
                <li className="list-unstyled mb-1  listStyle"><a href="#">Crosby: POS Tool Launch</a></li>
                <li className="list-unstyled mb-1  listStyle"><a href="#">Norman & Co: Scout Product Launch</a></li>
                <li className="list-unstyled mb-1  listStyle"><a href="#">Gardona: Online Store Redesign</a></li>
                <li className="list-unstyled mb-1  listStyle"><a href="#">Carmine: Skycast App Launch</a></li>
              </ul>
              </Col>
              <Col md={6} className='ml-md-3'>
              <ul className='list-inline'>
                <h5 className='mb-4' style={{color : 'grey'}}>SOCIALS</h5>
                <li className="list-inline-item mb-1 listStyle"><a href="">Linkedin</a> <a href="#">Twitter</a></li><br />
                <li className="list-inline-item mb-1 listStyle"><a href="">Dribble</a></li>
                <li className="list-inline-item mb-1 listStyle"><a href="">Instagram</a></li>
              </ul>
              </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}

export default Footer