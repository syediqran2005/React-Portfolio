import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
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
          LET'S CONNECT <Button variant="light" className='pt-2 pb-2 mt-3 mb-3'  style={{borderRadius : '50px', width: '16rem' , fontSize : '18px'}} >syediqran2004@gmail.com</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
