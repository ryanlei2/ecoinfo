import React from 'react'
import { Container } from 'react-bootstrap'
import HexagonButton from '../components/HexagonButton';
import styles from '../styles/morePractices.module.css'
import Image from 'next/image'
import paper from '../assets/paper.jpeg'
import garden from '../assets/garden.jpeg'
import heatPump from '../assets/heatPump.jpeg'



const practices = () => {  return (
    <Container style={{backgroundColor: 'rgb(234,238,242)', maxWidth: '100%'}}>
        <div>
            <h1 style={{
                width: '65%',
                margin: '0 auto' ,
                paddingTop: '3rem'           
            }}>
                More Practices
            </h1>
        </div>
        <div className={styles.morePracticesBody}>
            <h3>Why Do More?</h3>
            Sometimes it&apos;s challenging to take bit steps in green energy: wind turbines may seem daunting, solar panels are too costly, or biomass is hard to come by. Well fear no more, as 

            <br/><br/>
            
            <title>Recycling</title>
            <h3>Provide Recycling Opportunities</h3>
            Sometimes it&apos;s challenging to take bit steps in green energy: wind turbines may seem daunting, solar panels are too costly, or biomass is hard to come by. Well fear no more, as 

            <br/><br/>

            <title>Limit Paper</title>
            <h3>Limit Paper Usage</h3>
            It&apos;s a no-brainer that the trees that paper comes from need to be replenished in order to keep the world balanced. Since most of us today are tech-savvy, we should strive for paperless technology like a cloud-based file sharing system. Documents can also become online, as you can have a limited number of physical copies. Not wasting and throwing paper into recycling as opposed to the trash can also be beneficial, as reusable paper is better than trashed paper.

            <br/><br/>
            <Image 
                style={{
                    width: '50%',
                    height: '50%',
                    pointerEvents: 'none',
                    marginTop: ' 2rem'
                }}
                src={paper}
                alt='paper design'
            />
            
            <br/><br/>
            
            
            <title>Reduce Water</title>
            <h3>Ways to Reduce Water Usage</h3>
            One of the greatest ways to save the planet is to reduce water usage. While it may cost some money in the beginning, investing in water-saving technologies, such as smart sprinkler systems that can detect when it has rained as well as rainwater capture technology, will be beneficial in the long run. Educating others and spreading the knowledge of water conservation will drastically impact yourself and others to a wetter future.

            <br/><br/>  

            <title>Community Garden</title>
            <h3>Build a Community Garden</h3>
            A community garden is almost unlimited in its benefits.  Unused land can be renovated into something beautiful, and residents can come together to create something that lasts nearly forever, unless not maintained. Fresh produce beats store goods on any day, and also reduces the need to visit them, and it can also help local wildlife and improve the overall quality of you area.
            <br/><br/>

            <Image 
                style={{
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    marginTop: ' 2rem'
                }}
                src={garden}
                alt='green garden'
            />

            <br/><br/>  

            <title>Air Source Heat Pumps</title>
            <h3>Air Source Heat Pumps</h3>
                An air source heat pump is a renewable energy system that uses the outside air heat to provide your home with heat and hot water. It&apos;s like a fridge in the way it stores energy, but in reverse. Heat pumps can do well in all temperatures and can extract heat from temperatures as low as -15 degrees Celcius.

                <br/><br/>

                Environmentally-friendly heating is also virtually silent when operation and can save you around 1500 dollars per year, compared to traditional gas boilers.
            <br/><br/>

            <Image 
                style={{
                    width: '50%',
                    height: '50%',
                    pointerEvents: 'none',
                    marginTop: ' 2rem'
                }}
                src={heatPump}
                alt='air source heat pump'
            />
            <HexagonButton/>
        </div>
        
    </Container>
    )
}

export default practices