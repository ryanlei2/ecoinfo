import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../assets/footerVector.png'; 

const Footer = () => {
    return (
        <footer style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: 'cover',
            // backgroundColor: 'skyblue',
            textAlign: 'center',
            padding: '20px 0',
            position: 'absolute',
            bottom: '0',
            width: '100%',
            height: '30%'
        }}>
            Designed and Coded with ❤️💛❤️ by RHS © 2023
        </footer>
    );
};

export default Footer;
