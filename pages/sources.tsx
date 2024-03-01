import React from 'react'
import { Container } from 'react-bootstrap'
import HexagonButton from '../components/HexagonButton';
import styles from '../styles/sources.module.css'
import Link from 'next/link';


const sources = () => {  return (
    <Container style={{backgroundColor: 'rgb(234,238,242)', maxWidth: '100%'}}>
        <div>
            <h1 style={{
                width: '65%',
                margin: '0 auto' ,
                paddingTop: '3rem'           
            }}>
                Sources
            </h1>
        </div>
        <div className={styles.sourcesPage}>
            <title>Sources</title>
            <h3>Gathered Information:</h3>
            Our information comes in courtesy from various reliable government and non-profit organizations. Here are their links:
            <br/>
            <Link href='https://www.cedarmanagementgroup.com/green-hoa-practices/' target="_blank" rel="noreferrer">Green Practices</Link>
            <br/>
            <Link href='https://www.eonenergy.com/our-blog/ways-to-power-your-home-with-renewable-energy.html' target="_blank" rel="noreferrer">Home-Specific Practices</Link>
            <br/>
            <Link href='https://www.epa.gov/sites/default/files/2019-08/documents/solar_cells_fact_sheet_p100il8r.pdf' target="_blank" rel="noreferrer">Solar Cells</Link>
            <br/>
            <Link href='https://www.energy.gov/energysaver/benefits-residential-solar-electricity' target="_blank" rel="noreferrer">Solar Electricity</Link>
            <br/>
            <Link href='https://www.energy.gov/eere/solar/homeowners-guide-federal-tax-credit-solar-photovoltaics' target="_blank" rel="noreferrer">Tax Credits</Link>
            <br/>
            <Link href='https://www.irs.gov/credits-deductions/residential-clean-energy-credit' target="_blank" rel="noreferrer">Energy Credits Deductions</Link>
            <br/>
            <Link href='https://www.inspirecleanenergy.com/blog/sustainable-living/wind-power-for-homes' target="_blank" rel="noreferrer">Wind Power</Link>
            <br/>
            <Link href='https://www.greenmountainenergy.com/why-renewable-energy/renewable-energy-101' target="_blank" rel="noreferrer">Bio Mass</Link>
            <HexagonButton/>
            
        </div>
    </Container>
    )
}

export default sources
