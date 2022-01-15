import React from 'react'
import { Container,Col,Brend ,Img1 ,BrandTitle,Email ,Desc1 ,Desc2,Title1, Phone, ConpanyName} from './style'
import grow from '../../Rasim/let.png'
const Footer = () => {
    return (
       <Container>

            <Col>
                 <Brend>
                    <Img1 src={grow}/>
                    <BrandTitle>antools.</BrandTitle>
                 </Brend>
                 <Desc1>Copyright 2021. Antools</Desc1>
                 <Desc2>Antool is a web collection of information on paid or free Design and Development tools</Desc2>
            </Col>

            <Col>
                  <Title1>Contact Us</Title1>
                  <Phone>+621987463</Phone>
                  <ConpanyName>M Building, No.10 A</ConpanyName>
                  <Email>antools@awesome.com</Email>
            </Col>

            <Col>
            <Title1>Categories</Title1>
            <Phone>Design</Phone>
            <ConpanyName>Development</ConpanyName>
            </Col>

            <Col>
            <Title1>Company Info</Title1>
            <Phone>About Us</Phone>
            <ConpanyName>Our Partners</ConpanyName>
            <Email>Blog</Email>
            </Col>

       </Container>
    )
}

export default Footer
