import React from 'react'
import {Container,LeftContainer,RightContainer,Img1,Img2 ,Img3 ,Img4,Col ,Title,Desc,Button} from './style'
import air from '../../Rasim/air.png'
import photo from '../../Rasim/photo.png'
import cub from '../../Rasim/cub.png'
import paid from '../../Rasim/paid.png'
const NewComer = () => {
    return (
     <Container>
           <LeftContainer>
                 <Title>Newcomer Tools</Title>
                 <Desc>Wow! see the latest update of the most recommended tools from reliable designers and developers</Desc>
                 <Button>Explore more</Button>
           </LeftContainer>

           <RightContainer>

                  <Col>
                      <Img1  src={air}/>
                  </Col>

                  <Col>
                       <Img2  src={photo}/>
                  </Col>

                  <Col  top>
                      <Img3  src={cub}/>
                  </Col>

                  <Col top>
                      <Img4  src={paid}/>
                  </Col>

           </RightContainer>
     </Container>
    )
}

export default NewComer
