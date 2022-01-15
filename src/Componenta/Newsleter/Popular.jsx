import React from 'react'

import {Img7,Container ,Button,Load,Title,Desc,Grow,Row,Col,Content ,Img1,Img2 ,Img3,Img4,Img5,Img6} from './style'
import color from '../../Rasim/color.png'
import diomond from '../../Rasim/diomond.png'
import figma from '../../Rasim/figma.png'
import ind from '../../Rasim/in.png'
import node from '../../Rasim/node.png'
import visual from '../../Rasim/visual.png'
import grow from '../../Rasim/grow.png'
const Popular = () => {
    return (
        <Container>
            <Title>Most Popular Tools</Title>
            <Desc>Tools for the best Designers and Developers
            most popularly used in the world</Desc>

            <Content>
               <Row>
                   <Col>
                        <Img1  src={figma}/>
                   </Col>
                   <Col>
                       <Img2  src={diomond}/>
                   </Col>
                   <Col>
                       <Img3  src={visual}/>
                   </Col>
               </Row>

                 <Row two>
                   <Col>
                        <Img4  src={node}/>
                   </Col>
                   <Col>
                        <Img5  src={color}/>
                   </Col>
                   <Col>
                        <Img6  src={ind}/>
                   </Col>
               </Row>
               <Load>
                   <Button>Load more</Button>
               </Load>
               <Grow>
                  <Img7  src={grow}/>
               </Grow>
            </Content>
        </Container>
    )
}

export default Popular
