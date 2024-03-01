import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../styles/windTurbine.module.css'
import HexagonButton from '../components/HexagonButton';
import Image from 'next/image'
import greenEarth from '../assets/greenEarth.png' //placeholder
import windTurbines from '../assets/windTurbines.png' //placeholder


const windTurbine = () => {  return (
    <Container>
        <div>
            <h1 style={{
                marginTop: '2rem'
            }}>Wind Turbines</h1>
        </div>
        <div className={styles.windTurbineInfo}>
            <title>Wind Turbines</title>
            <h3>A Quick Rundown</h3>
            Wind turbines are a form of energy collection that harnesses wind power and converts it into usable electrical energy. These devices have been popular in recent years due to their environmental advantages, and they are classified as green energy. Investing in a wind turbine may also qualify you for certain tax credits.

            <br/><br/>

            <figure>
                <Image 
                    style={{
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    marginTop: ' 2rem'
                }}
                src={windTurbines}
                alt='Wind turbines standing in body of water'
                />
                <figcaption style={{
                fontStyle: 'italic'
                }}>Fun Fact: Wind turbines can be placed in water. As they stay afloat, offshore wind speeds tend to be steadier, creating a more reliable and higher energy output.</figcaption>
            </figure>

            <br/><br/>

            <title>Renewable Power</title>
            <h3>Renewable Power</h3>
            Wind energy is a practically limitless renewable energy source because it draws on the natural movement of wind. As long as the sun continues to shine and the Earth&apos;s atmosphere exists, wind will be available to harness for energy. This is highly advantageous over other sources such as oil or natural gas, as they are limited resources. 

            <br/><br/>
            
            <title>Low Greenhouse Gas Emissions</title>
            <h3>Low Greenhouse Gas Emissions</h3>
            Wind turbines are able to produce electricity while emitting greenhouse gases like CO2 at a much lower rate than coal or natural gas (11g CO2/kWh compared to 450+ g CO2/kWh). These greenhouse gases can be a huge detriment to the environment, and wind turbines are a great way to prevent this.

            <br/>

            <Image 
                    style={{
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    marginTop: ' 2rem'
                }}
                src={greenEarth}
                alt='hands holding up green earth'
            />

            <br/><br/>

            <title>Minimal Environmental Impact</title>
            <h3>Minimal Environmental Impact</h3>
            Proper usage of wind turbines results in a negligible environmental impact, certainly far less than traditional means, which negatively impact the earth by drilling into the ground and polluting water and air. While irresponsible placement can lead to a slight disruption to wildlife, a proper site and design will not have these negative impacts.

            <br/><br/>

            <title>Monetary Advantages</title>
            <h3>Monetary Advantages</h3>
            Wind turbines also bring a slew of financial reasons to consider them. While the cost to install a wind turbine is slightly more than a natural gas plant, the cost to run a wind turbine is about 20% cheaper than a natural gas plant per kWh, making them a cheaper option long-term. Residents who invest in any sort of renewable energy on their property, including wind energy, can get tax credits equal to 22-30% of the cost of the renewable energy they invested in. 
            <HexagonButton/>
        </div>
        
    </Container>
    )
}

export default windTurbine