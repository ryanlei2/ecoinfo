import type { NextPage } from 'next'
import { Button, Card, Container, Row, Col, ButtonGroup } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import banner from '../assets/banner.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import heroImage from '../assets/heroVector.png'; 
import * as THREE from 'three';
import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect.js'; // Import OutlineEffect
import { Carousel } from 'react-bootstrap';
import HexagonButton from '../components/HexagonButton'



const Home: NextPage = () => {

  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false); // State for first card hover
  const [isHovered2, setIsHovered2] = useState(false); // State for second card hover
  const [isHovered3, setIsHovered3] = useState(false); // State for third card hover


  const router = useRouter();

  useEffect(() => {
    // This checks if the code is running on the client
    if (typeof window === 'undefined' || !mountRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Draw onto the canvas (create a solid color circle)
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2);
    gradient.addColorStop(0, 'green');
    gradient.addColorStop(1, '#e6ffe6');

    ctx.beginPath();
    // Adjust the radius calculation to cover the entire viewport
    const radius = 700;
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    const scene = new THREE.Scene();

    // Use the canvas as the background
    const texture = new THREE.CanvasTexture(canvas);
    scene.background = texture;
    
    const width = 680; // Example fixed width
    const height = 600; // Example fixed height

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    // Enable shadow mapping
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);    
    
    // Create an OutlineEffect instance
    const outlineEffect = new OutlineEffect(renderer);
    
    // Add sphere
    const geometry = new THREE.SphereGeometry(2, 8, 4);
    const material = new THREE.MeshStandardMaterial({
        color: 0x90EE90,
        roughness: 0.5,
        metalness: 0.5,
    });
    const sphere = new THREE.Mesh(geometry, material);
    // Enable shadow casting and receiving
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    scene.add(sphere);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 4.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 4.5);
    directionalLight.position.set(1, 1, 1);
    // Enable shadow casting by the light
    directionalLight.castShadow = true;
    // Adjust shadow map size for darker shadows
    directionalLight.shadow.mapSize.set(1024, 1024); // Width, Height
    // Adjust shadow bias for finer control over shadow appearance
    directionalLight.shadow.bias = -0.001;
    scene.add(directionalLight);
    
    camera.position.z = 4;
    
    const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.02;
        sphere.rotation.y += 0.008;
    
        // Render scene with the OutlineEffect
        outlineEffect.render(scene, camera);
    };
    
    animate();
    // Clean up
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  
  return (
    <main className={styles.container}>
      <div className={styles.hero}>{/* split this section into 2 parts: one for the text and the subtext, and one for the image */}
      <div className={styles.leftHalf} style={{ position: 'relative', right: '-80px', zIndex: 2 }}> {/* Adjust the position and z-index */}

        <Row>
          <strong>Empower your home with 
            <span style={{
              backgroundImage: 'linear-gradient(to right, #9effb8, #009933)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}> green </span> 
            and 
            <span style={{
              backgroundImage: 'linear-gradient(to right, #9effb8, #009933)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}> clean </span> 
            solutions.
          </strong>
        </Row>
        <Row style={{
          fontSize: '20px'
        }}>
          Discover eco-friendly practices, cost-effective solutions, and tax incentives for a sustainable future.
        </Row>
      </div>
        <div className={styles.rightHalf}>
          <Image 
            style={{
              width: '100%',
              pointerEvents: 'none',
            }}
            src={heroImage}
            alt='Hero Image'
          />
          <div ref={mountRef} className={styles.threeJsSceneContainer}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            boxShadow: isHovered ? '0 4px 8px 0 rgba(0, 0, 0, 0.2)' : 'none',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Apply scaling when hovered
            transition: 'transform 0.3s ease', // Add a smooth transition effect
          }}>
          </div>
        </div>
      </div>
      <div className={styles.cta} style={{ background: 'linear-gradient(to bottom, rgb(220,255,230), rgb(255, 255, 255))'}}>
        <div className={styles.container2}>
        <Row style={{
          justifyContent:'center',
        }}>
          <Card className={`${styles.card} ${isHovered1 ? styles.cardHover : ''}`} 
                  onMouseEnter={() => setIsHovered1(true)}
                  onMouseLeave={() => setIsHovered1(false)}
                border="success" style={{ width: '40vw', height:'30vh', marginRight: '100px' }}>
            <Card.Img variant="top" src='https://cdn.discordapp.com/attachments/1046981658617860186/1087508397890478272/faq4.png' style={{marginBottom: '50px', marginTop: '40px'}}/>
            <Card.Body>
              <Card.Title className='display-6'
              style={{
                fontWeight:'bold',
                fontSize: '2.7rem'
              }}
              >FAQ</Card.Title>
              <Card.Text style={{
                fontSize:'100%'
              }}>
                Have a question you need answered?
              </Card.Text>
                <Link href="/faq">
                  <Button style={{height: '55px', width: '100px', fontSize: '1rem', marginBottom:'40px'}} variant="primary">Click Here</Button>
                </Link>
            </Card.Body>
          </Card>
          <Card className={`${styles.card} ${isHovered2 ? styles.cardHover : ''}`} 
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)} 
                border="success" style={{ width: '40vw', height: '30vh', marginLeft:'100px' }}>
            <Card.Img style={{marginBottom: '50px', marginTop: '40px'}} variant="top" src="https://cdn.discordapp.com/attachments/1046981658617860186/1087514783252762654/catalog2.png" />
            <Card.Body>
              <Card.Title className='display-6'
              style={{
                fontWeight:'bold',
                fontSize: '2.7rem'
              }}
              >Pricing</Card.Title>
              <Card.Text style={{
                fontSize:'100%'
              }}>
                Take a look at some of the costs with green energy!
              </Card.Text>              
              <Link href="/cost">
                  <Button style={{height: '55px', width: '100px', fontSize: '1rem'}} variant="primary">Click Here</Button>
                </Link>
            </Card.Body>
          </Card>
        </Row>
        </div>
      </div>
      <div className={`${styles.carouselWrapper} ${isHovered3 ? styles.cardHover : ''}`} 
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}>
      <Carousel interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      <HexagonButton/>
      </main>
  );
}

export default Home
