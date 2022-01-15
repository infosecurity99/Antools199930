import React from 'react'
import {Container ,LeftContainer,Links ,RightConatainer,Boxs ,TwiterIcon,FacebookIcon,InstagramIcon ,Icon ,ImgBaner,Button ,Text,Desc,Input ,InputGroup} from './style'
import brands from '../../Rasim/brands.png'
import search from '../../Rasim/search.png'
import twi from '../../Rasim/twi.png'
import fac from '../../Rasim/fac.png'
import ins from '../../Rasim/ins.png'
const Show = () => {

    return (
        <Container>
               <LeftContainer>
                  <Text> Awesome tools for Designer & Developer.</Text>
                  <Desc>Antool is a web collection of information on paid or free Design and Development tools</Desc>
                  <InputGroup>
                  <Icon  src={search}/>
                   <Input placeholder="find more than 430+ tools..."/>
                   <Button>Search</Button>
                  </InputGroup>

                  <Links>

                        <Boxs>
                             <FacebookIcon  src={fac}/>
                        </Boxs>

                        <Boxs>
                             <InstagramIcon src={ins}/>
                        </Boxs>

                        <Boxs>
                              <TwiterIcon src={twi}/>
                        </Boxs>

                  </Links>
               </LeftContainer>

               <RightConatainer>
                  <ImgBaner src={brands}/>
               </RightConatainer>
        </Container>
    )
}

export default Show
