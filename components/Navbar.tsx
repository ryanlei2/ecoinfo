import React from 'react'
import { Button, Col, Container, Form, Nav, NavDropdown, Navbar, NavbarBrand } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image';
import favicon from '../assets/favicon.ico'
import styles from '../styles/navbar.module.css'
import SiteSearch360 from 'site-search-360-react';


const NavbarComp = () => {
  return (
    <Navbar className={`${styles.navBar} main white nav-margins`} expand="lg" style={{
    }}>
      <Container fluid style={{
        marginTop: '10px',
        marginBottom: '10px',
        fontFamily: '',
        fontSize: '30px'
      }}>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link className={`${styles.brandIconHover} d-flex justify-content-center`}>
                <Image 
                  style={{
                    marginLeft: '30px',
                    marginRight: '5px',
                    width:'40px',
                    height: '40px'
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
                <Nav.Link href='/info' className={`${styles.brandIconHover}`} aria-current="page" style={{marginRight:'3vw'}}>
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <SiteSearch360 siteId="precious-squirrel-0935af.netlify.app" />
      <script async src="https://js.sitesearch360.com/plugin/bundle/50413.js"></script>
    </Navbar>
  );
}

export default NavbarComp
