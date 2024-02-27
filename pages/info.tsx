import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../styles/info.module.css'
import HexagonButton from '../components/HexagonButton';
import Image from 'next/image'
import infoImage from '../assets/infoImage.jpg'

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum ipsum ipsum, et posuere metus rutrum a. Sed cursus magna eu tempor hendrerit. In quis diam vel dui fermentum malesuada. Sed ut commodo neque. Vivamus sit amet finibus tortor. Nunc diam tellus, tempus eget ultrices ac, porttitor pulvinar tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce molestie quam non dolor tempus, sit amet maximus augue viverra. Vivamus mollis sagittis lectus ut dignissim. Cras volutpat urna nunc, ut elementum quam sagittis sit amet. Nunc ut justo dignissim, ornare odio quis, scelerisque diam. Integer vitae odio eget arcu viverra ultricies ut ut mauris. Sed id leo arcu. Etiam blandit, ligula eu varius gravida, dui orci ultrices arcu, non auctor lacus dui nec ipsum.


        <br/>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum ipsum ipsum, et posuere metus rutrum a. Sed cursus magna eu tempor hendrerit. In quis diam vel dui fermentum malesuada. Sed ut commodo neque. Vivamus sit amet finibus tortor. Nunc diam tellus, tempus eget ultrices ac, porttitor pulvinar tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce molestie quam non dolor tempus, sit amet maximus augue viverra. Vivamus mollis sagittis lectus ut dignissim. Cras volutpat urna nunc, ut elementum quam sagittis sit amet. Nunc ut justo dignissim, ornare odio quis, scelerisque diam. Integer vitae odio eget arcu viverra ultricies ut ut mauris. Sed id leo arcu. Etiam blandit, ligula eu varius gravida, dui orci ultrices arcu, non auctor lacus dui nec ipsum.
        <HexagonButton/>
      </div>
    </Container>
  )
}

export default Faq