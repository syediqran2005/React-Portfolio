import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand style={{
          color : 'white',
          fontFamily : 'sans-serif',
          fontWeight : 'bold',
          fontSize : '1.5rem'
        }} >JANELLE BROWN</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Text style={{
          color : 'white',
          marginLeft : '5%',
          fontSize : '1rem',
          fontWeight : 'bolder',
          letterSpacing : '1px',
          borderBottom : '3px solid white',
          borderBottomRightRadius : '3px',
          borderBottomLeftRadius : '3px'
        }}>
          ABOUT
        </Navbar.Text>
        <Navbar.Text style={{
          color : 'white',
          marginLeft : '5%',
          fontSize : '1rem',
          fontWeight : 'bolder',
          letterSpacing : '1px',
          
          
        }} className='workStyle'>
          WORK
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{
          color : 'white',
          fontSize : '1rem',
          fontWeight : 'bolder',
          letterSpacing : '1px',
        }}>
          LET'S CONNECT <a href="#login" className='emailStyle' >syediqran2004@gmail.com</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header