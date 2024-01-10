import type { NextPage } from 'next'
import { Button, Card, Container, Row, Col, ButtonGroup } from 'react-bootstrap'
import styles from '../styles/home.module.css'
import banner from '../assets/banner.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'


const Home: NextPage = () => {

  const [isHovered, setIsHovered] = useState(false);
  return (
      <div>
        
      </div>
  );
}

export default Home
