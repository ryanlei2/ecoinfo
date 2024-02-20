import React from 'react'
import { Button, Col, Container, Form, Nav, NavDropdown, Navbar, NavbarBrand } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image';
import favicon from '../assets/favicon.ico'
import styles from '../styles/navbar.module.css'

const NavbarComp = () => {
  return (
    <Navbar className={`${styles.navBar} main white nav-margins`} expand="lg" style={{
    }}>
      <Container fluid style={{
        marginTop: '10px',
        marginBottom: '10px',
        fontFamily: '',
      }}>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link className={`${styles.brandIconHover} d-flex justify-content-center`}>
                <Image 
                  style={{
                    marginLeft: '30px',
                    marginRight: '5px',
                    width:'20px',
                    height: '20px'
                  }}
                  src={favicon}
                  alt='logo'
                />
                <strong>EcoInfo</strong>
              </Nav.Link>
            </Link>
            <Navbar.Collapse id="basic-navbar-nav" style={{
              marginLeft: '30px'
            }}>
              <Nav className="mx-auto parent">
                <Nav.Link href='/faq' className={`${styles.brandIconHover}`} aria-current="page" style={{marginRight:'3vw'}}>
                  Home
                </Nav.Link>
                <Nav.Link href='/about' className={`${styles.brandIconHover}`} aria-current="page" style={{marginRight:'3vw'}}>
                  Info
                </Nav.Link>
                <NavDropdown title="Practices" id="basic-nav-dropdown" style={{marginRight:'3vw'}}>
                  <NavDropdown.Item href="#action/3.1">
                    Wind Turbine
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Solar Panel
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Underground Well
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='/practices'>
                    All Practices
                </NavDropdown.Item>
              </NavDropdown>
                <Nav.Link href='/taxes' className={`${styles.brandIconHover}`} aria-current="page" style={{marginRight:'3vw'}}>
                  Taxes
                </Nav.Link>
                <Nav.Link href='/cost' className={`${styles.brandIconHover}`} aria-current="page" style={{marginRight:'3vw'}}>
                  Cost
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{
                      backgroundColor:'#ADFE44',
                    }}
                  />
                <Button variant="outline-success" className={`${styles.brandIconHover}`}>Go</Button>
              </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      
    </Navbar>
  );
}

export default NavbarComp
