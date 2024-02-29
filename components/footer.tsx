import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../assets/footerVector.png';
import Cube from '../pages/Cube'; // Import the Cube component
import styles from '../styles/footer.module.css'


const Footer = () => {
    return (
        <footer style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: 'cover',
            textAlign: 'center',
            padding: '20px 0',
            position: 'relative',
            width: '100%',
            minHeight: '50vh', /* Set a minimum height */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end', /* Align content at the bottom */
            flexDirection: 'column',
            marginTop: '100px'
        }}>
            <div style={{ position: 'absolute', bottom: '20px' }}>
                <Container fluid>
                    <Row>
                        <Col>
                            <h4>Made By</h4>
                            <p>Designed and Coded with ❤️💛❤️ by RHS © 2024</p>
                        </Col>
                        <Col>
                            <h4>TSA</h4>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                <li><a href="https://docs.google.com/document/d/1FB7pbYv7O_xc7sB7Qio5c6YJ1IpffnqgwUpjVjGep5c/edit?usp=sharing" target="_blank" rel="noreferrer">Work Log</a></li>
                                <li><a href="https://imgur.com/a/94zmCft" target="_blank" rel="noreferrer">Student Copyright Checklist</a></li>
                                <li><a href="https://richland.rsd.edu/" target="_blank" rel="noreferrer">Richland High School</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <figure>
                <div className={styles.cube}>
                    <Cube /> {/* Include the Cube component */}
                </div>
            </figure>
            
        </footer>
    );
};

export default Footer;
