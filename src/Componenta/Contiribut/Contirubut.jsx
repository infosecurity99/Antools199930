import React from 'react'
import { Container ,Title,Desc ,InputGroup,Input,Button} from './style'
const Contirubut = () => {
    return (
        <Container>
           <Title>Become a contributor?</Title>
           <Desc>Join us and get tips & tricks to become a great Designer and Developer</Desc>
            <InputGroup>
               <Input  placeholder='Enter your email...'/>
               <Button>Join Us</Button>
            </InputGroup>
        </Container>
    )
}

export default Contirubut
