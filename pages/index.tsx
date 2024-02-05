import type { NextPage } from 'next'
import { Button, Card, Container, Row, Col, ButtonGroup } from 'react-bootstrap'
import styles from '../styles/home.module.css'
import banner from '../assets/banner.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'


const Home: NextPage = () => {
  return (
      <main>
        <div className='hero'>
          {/* split this section into 2 parts: one for the text and the subtext, and one for the image */}
        </div>
        <div className='cta'>
          {/* same as above except text is on the right instead of left */}
        </div>
      </main>
  );
}

export default Home
