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
import projectSolar from '../assets/projectSolar.jpeg'
import workersSlide from '../assets/workersSlide.jpeg'
import installPanels from '../assets/installPanels.webp'
import Arrow from '../components/Arrow'; // Import the Arrow component





const Home: NextPage = () => {

  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false); // State for first card hover
  const [isHovered2, setIsHovered2] = useState(false); // State for second card hover
  const [isHovered3, setIsHovered3] = useState(false); // State for third card hover


  const router = useRouter();

  const handleArrowClick = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
// i made this
  useEffect(() => {
    // This checks if the code is running on the client
    if (typeof window === 'undefined' || !mountRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    
    // Draw onto the canvas (create a solid color circle)
    const ctx = canvas.getContext('2d')!;
    
    const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2);
    gradient.addColorStop(0, 'green');
    gradient.addColorStop(1, '#e6ffe6');

    ctx.beginPath();
    // Adjust the radius calculation to cover the entire viewport
    const radius = 500;
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    const scene = new THREE.Scene();

    // Use the canvas as the background
    const texture = new THREE.CanvasTexture(canvas);
    scene.background = texture;
    
    const width = 530; // Example fixed width
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
        metalness: 0.6,
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
    directionalLight.shadow.mapSize.set(2,4); // Width, Height
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
    <main>
      <div className={styles.container}>
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
          <Arrow onClick={handleArrowClick} />
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
              transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Apply scaling when hovered
              //boxShadow: isHovered ? '0 4px 8px 0 rgba(0, 0, 0, 0.2)' : 'none',
              transition: 'transform 0.3s ease', // Add a smooth transition effect
            }}>
            </div>
          </div>
        </div>
      </div>
      
      <div id="faq-section" className={styles.cta} style={{
        // background: 'linear-gradient(to bottom, rgb(184,255,200), rgb(255, 255, 255))'
        }}>
        <div className={styles.container2}>
        <Row style={{
          justifyContent:'center',
        }}>
          <Card
            className={`${styles.card} ${isHovered1 ? styles.cardHover : ''}`}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            border="success"
            style={{
              width: '40vw',
              height: '100%',
              marginLeft: '100px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center', // Center vertically
              marginRight: '50px'
            }}
          >
            <Card.Img
              variant="top"
              src="https://www.verdeenergy.com/wp-content/uploads/2023/06/questions-Verde-Energy-FAQ.png"
              style={{ marginBottom: '50px', marginTop: '40px', width:'20vmin', height: '20vmin' }}
            />
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title
                  className="display-6"
                  style={{
                    fontWeight: 'bold',
                    fontSize: '5vmin',
                  }}
                >
                  FAQ
                </Card.Title>
                <Card.Text style={{ fontSize: '100%' }}>
                  Have a question you need answered?
                </Card.Text>
                <Link href="/info">
                  <Button
                    style={{
                      height: '65px',
                      width: '100px',
                      fontSize: '1rem',
                      marginBottom: '40px',
                    }}
                    variant="primary"
                  >
                    Click Here
                  </Button>
                </Link>
              </Card.Body>
          </Card>
          <Card
            className={`${styles.card} ${isHovered2 ? styles.cardHover : ''}`}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            border="success"
            style={{
              width: '40vw',
              height: '100%',
              marginRight: '100px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center', // Center vertically
              marginLeft: '50px'
            }}
          >
            <Card.Img
              variant="top"
              src="https://static.vecteezy.com/system/resources/previews/027/515/395/non_2x/a-green-line-arrow-pointing-upwards-on-the-chart-symbol-of-the-chart-having-an-upward-trend-illustration-of-a-business-chart-vector.jpg"
              style={{ marginBottom: '50px', marginTop: '40px', width:'20vmin', height: '20vmin' }}
            />
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title
                  className="display-6"
                  style={{
                    fontWeight: 'bold',
                    fontSize: '5vmin',
                  }}
                >
                  Practices
                </Card.Title>
                <Card.Text style={{ fontSize: '100%' }}>
                  Take a look at how <strong>you</strong> can add these!
                </Card.Text>
                <Link href="/practices">
                  <Button
                    style={{
                      height: '65px',
                      width: '100px',
                      fontSize: '1rem',
                      marginBottom: '40px',
                    }}
                    variant="primary"
                  >
                    Click Here
                  </Button>
                </Link>
              </Card.Body>
          </Card>
        </Row>
        </div>
      </div>
      <div style={{display:'inline'}}>
        <h1 style={{display: 'flex',justifyContent: 'center', marginTop: '200px'}}>The Latest In Green</h1>
      </div>
      <Container className={styles.wrapperwrapper}>
        <div className={`${styles.carouselWrapper} ${isHovered3 ? styles.cardHover : ''}`} 
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}>
        <Carousel interval={3000} fade className={styles.carousel}>
          <Carousel.Item className={styles.windowSize}>
            <div className={styles.zoomEffect}>
              <Image 
              className=""
              style={{
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
              }}
              src={workersSlide}
              alt='workers at plant'
            />
            </div>
            <Carousel.Caption>
              <h3>Renewable Growth</h3>
              <p>Wind and solar power are now expected to overtake coal by 2025 as the world&apos;s largest sources of electricity.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles.windowSize}>
            <div className={styles.zoomEffect}>
              <Image 
              className=""
              style={{
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
              }}
              src={projectSolar}
              alt='solar'
            />
            </div>
            <Carousel.Caption>
              <h3>Rural and Remote Clean Energy</h3>
              <p>The U.S. Department of Energy (DOE) announced more than $366 million for 17 projects across 20 states and 30 Tribal Nations and communities</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles.windowSize}>
            <div className={styles.zoomEffect}>
              <Image 
                className=""
                style={{
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                }}
                src={installPanels}
                alt='installation of solar panels'
              />
            </div>
              <Carousel.Caption>
                <h3>Another Banner Year in Solar</h3>
                <p>The International Energy Agency (IEA) projects more than 440 gigawatts of renewable energy to be added, which is more than the entirety of the power capacity of Germany and Spain.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
      
      
      <HexagonButton/>
      </main>
  );
}

export default Home
