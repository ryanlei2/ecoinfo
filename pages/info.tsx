import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../styles/info.module.css'
import HexagonButton from '../components/HexagonButton';
import Image from 'next/image'
import infoImage from '../assets/infoImage.jpg'
import infographic from '../assets/infographic.png'

const Faq = () => {  return (
    <Container>
      <div className={styles.faqImage}>
        <Image 
            style={{
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              marginTop: ' 2rem'
            }}
            src={infoImage}
            alt='Hero Image'
          />
      </div>
      <div className={styles.faq}>
        <h3>What is Green Energy?</h3>
        Green energy refers to energy generated through methods that preserve the natural environment, which can wind, water, or solar, or other various forms of natural energy sources.
        <br/><br/>
        Green energy is harnessed from renewable sources that do not deplete over time and do not emit pollutants during production, unlike fossil fuels; however, it&apos;s important to note that not all energy sources labeled as renewable are inherently green. For instance, while power generation from sustainable forest biomass is renewable, the CO2 emissions from the combustion process make it less environmentally friendly. Green energy stands out as the most eco-friendly resource available today, with minimal ongoing environmental impact, but it&apos;s up to <strong>you</strong> as home owners to take control of its power.
        <br/><br/><br/><br/>
        <figure>
          <Image 
              style={{
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                marginTop: ' 2rem'
              }}
              src={infographic}
              alt='green energy information'
            />
            <figcaption style={{
              fontStyle: 'italic'
            }}>See how each practice has benefits and drawbacks?</figcaption>
        </figure>
      
        <HexagonButton/>
      </div>
    </Container>
  )
}

export default Faq