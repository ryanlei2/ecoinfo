import React from 'react'
import { Container } from 'react-bootstrap'
import HexagonButton from '../components/HexagonButton';
import styles from '../styles/bioMass.module.css'
import grassmass from '../assets/grassmass.jpeg'
import landmass from '../assets/landmass.jpeg'
import wastemass from '../assets/wastemass.jpeg'
import wheatmass from '../assets/wheatmass.jpeg'

import Image from 'next/image'


const Biomass = () => {  return (
    <Container style={{backgroundColor: 'rgb(234,238,242)', maxWidth: '100%'}}>
        <div>
            <h1 style={{
                width: '65%',
                margin: '0 auto' ,
                paddingTop: '3rem'           
            }}>
                Biological Mass
            </h1>
        </div>
        <div className={styles.bioMassPage}>
            <title>Biomass Energy</title>
            <h3>Biomass General Information</h3>
            Biomass, renewable energy source, will always be around because trees and crops can always be grown. In fact, it has been around since the beginning of time, when humans burned wood for heating and cooking. If you&apos;ve ever been near a campfire, you&apos;ve witnessed the creation biomass energy through the burning of wood. In 2020, biomass provided roughly 5% of the total primary energy use in the U.S.
            <br/><br/>

            <title>Benefits</title>
            <h3>Biomass Benefits</h3>
            Biomass is widely available in many forms. Because less expensive to produce than fossil fuels, using biomass as an energy source reduces garbage in landfills, and it only releases the CO2 that it captures, meaning it&apos;s 100% carbon neutral, so biomass energy helps mitigate the effects of climate change.
            <br/><br/>

            <title>Harnessing Biomass</title>
            <h3>Harnessing Biomass</h3>
            While there are many sources of biomass energy, there are two major ways to harness biomass energy to generate electricity: through burning and decomposition. Depending on what type of biomass is used, the organic waste is either burned to produce heat or decomposed to produce methane gas, which is then burned to produce heat. Because heat--biomass energy--is used to boil waterit eventually turns into steam. The steam spins a turbine, powering a generator and creating electricity that we can use to power our lives.

            <br/><br/>

            <title>Biomass Types</title>
            <h3>Types of Biomasses</h3>
            <br/><br/>
            <h4>Tree and Plant Waste</h4>
            Whether it&apos;s produced by industrial manufacturing or by the average home, any plant or wood waste can be burned to harness biomass energy.
            <br/>
            Some common waste from trees and plants include: Firewood, wood pellets and wood chips, lumber and sawdust, black liquor from pulp and paper mills, and dead leaves and yard clippings.
            <br/>
            <Image 
                style={{
                    width: '40%',
                    height: '40%',
                    pointerEvents: 'none',
                    marginTop: ' 2rem',
                }}
                src={grassmass}
                alt='grass in container'
            />
            <br/><br/>
            <h4>Solid Waste</h4>
            Any organic waste from human activity can be burned or decomposed to generate electricity from biomass energy.
            <br/>
            Solid waste can include: paper and paperboard, textiles such as cotton and wool, food waste, and rubber or leather.
            <br/>
            <Image 
                style={{
                    width: '40%',
                    height: '40%',
                    pointerEvents: 'none',
                    marginTop: ' 2rem',
                }}
                src={wastemass}
                alt='garbage field'
            />
            <br/><br/>
            <h4>Crops</h4>
            Agricultural crops and farm waste materials can either be burned or allowed to decompose, releasing biomass energy.
            <br/>
            The most common crop waste comes from: corn, soybeans, sugar cane, switchgrass, woody plants, algae, crop and food, and processing residues.
            <br/>
            <Image 
                style={{
                    width: '40%',
                    height: '40%',
                    pointerEvents: 'none',
                    marginTop: ' 2rem',
                }}
                src={wheatmass}
                alt='field of wheat'
            />
            <br/><br/>
            <h4>Landfill gas and Biogas</h4>
            Organic waste is generated daily from both cattle farms and landfills, which decomposes and releases methane gas that&apos;s ignited to release biomass energy. By capturing methane for use as a biomass energy source, we can help reduce the effects of climate change in two ways           
            <br/>
            The largest sources of methane gas are: animal waste, collected in large tanks filled with bacteria that eat the waste and convert it to methane, and landfill gas, largely methane.
            <br/>
            <Image 
                style={{
                    width: '40%',
                    height: '40%',
                    pointerEvents: 'none',
                    marginTop: ' 2rem',
                }}
                src={landmass}
                alt='garbage field'
            />
            <HexagonButton/>
        </div>
    </Container>
    )
}

export default Biomass