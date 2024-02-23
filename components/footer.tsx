import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../assets/footerVector.png'; 

const Footer = () => {
    return (
        <footer style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: 'cover',
            textAlign: 'center',
            padding: '20px 0',
            position: 'relative', /* Make the footer position relative */
            bottom: '0',
            width: '100%',
            height: '50vh',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
        }}>
            <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
                Designed and Coded with ❤️💛❤️ by RHS © 2023
            </div>
        </footer>
    );
};

export default Footer;
