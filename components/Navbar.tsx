import React from 'react'
import { Button, Col, Container, Form, Nav, NavDropdown, Navbar, NavbarBrand } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image';
import favicon from '../assets/favicon.ico'
import styles from '../styles/navbar.module.css'
import SiteSearch360 from 'site-search-360-react';


const NavbarComp = () => {
  const dropdownItemStyle = {
    fontSize: '20px', // Adjust the font size as needed
  };
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
                <Nav.Link href='/info' className={`${styles.brandIconHover}`} aria-current="page" style={{marginRight:'3vw', fontSize: '20px'}}>
                  Info
                </Nav.Link>
                <NavDropdown title="Practices" id="basic-nav-dropdown" style={{marginRight:'3vw', fontSize: '20px'}}>
                  <NavDropdown.Item href="/windTurbine" style={dropdownItemStyle}>
                    Wind Turbine
                  </NavDropdown.Item>
                    <NavDropdown.Divider />
                  <NavDropdown.Item href="/solarPanel" style={dropdownItemStyle}>
                    Solar Panel
                  </NavDropdown.Item>
                    <NavDropdown.Divider />
                  <NavDropdown.Item href="/bioMassSystem" style={dropdownItemStyle}>
                    Biomass
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href='/practices' style={dropdownItemStyle}>
                    Other Practices
                </NavDropdown.Item> */}
              </NavDropdown>
                <Nav.Link href='/practices' className={`${styles.brandIconHover}`} aria-current="page" style={{marginRight:'3vw', fontSize: '20px'}}>
                  Implementations{/*  how to install these thangs */}
                </Nav.Link>
                <Nav.Link href='/sources' className={`${styles.brandIconHover}`} aria-current="page" style={{marginRight:'3vw', fontSize: '20px'}}>
                  Sources
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <SiteSearch360 siteId="tsa-eco-info.netlify.app" />
    </Navbar>
  );
}

export default NavbarComp
