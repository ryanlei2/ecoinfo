import React from 'react'
import { Col, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image';
import favicon from '../assets/favicon.ico'
import styles from '../styles/navbar.module.css'

const NavbarComp = () => {
  return (
    //   <Navbar expand="xl" sticky='top' className={styles.navBar}
    //   style={{
    //     height:'70px',
    //     marginTop:'0.9rem',
    //     fontSize:'2rem'
    //   }}
    //   >
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse>  
    //         <Nav className='container-fluid'>
    //           <Nav.Item className='ms-auto'>
    //             <Nav.Link href='/faq' className='' aria-current="page">
    //               FAQ
    //             </Nav.Link>
    //           </Nav.Item>
    //           <Nav.Item className='ms-auto'>
    //             <Nav.Link href='/about' className='' aria-current="page">
    //               about
    //             </Nav.Link>
    //           </Nav.Item>
    //         </Nav>
    //     </Navbar.Collapse>
    // </Navbar>
    <Navbar className="main white nav-margins" expand="lg">
      <Col>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto parent">
            <Nav.Link href='/faq' className='' aria-current="page">
              FAQ
            </Nav.Link>
            <Nav.Link href='/about' className='' aria-current="page">
              about
            </Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Col>
      <Col>
          <Link href="/" passHref legacyBehavior>
            <Nav.Link className={`${styles.brandIconHover} d-flex justify-content-center`}>
              <Image 
                style={{
                  marginLeft: '30px',
                  marginRight: '30px',
                }}
                src={favicon}
                alt='logo'
            />
          </Nav.Link>
        </Link>
      </Col>
      <Col className="text-left">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Col>
    </Navbar>
  );
}

export default NavbarComp
