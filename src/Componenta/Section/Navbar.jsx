import React from 'react'
import Show from '../Popular/Show'
import { Container ,Navbars ,LogosImg  ,NavBrand ,NavText,NavImg,Loginin ,NavLink ,Link ,Signin,Signup} from './style'
import logos from '../../Rasim/logos.png'
const Navbar = () => {
    return (
       <Container>
            <Navbars>
                  <NavBrand> 
                        <LogosImg><NavImg  src={logos}/></LogosImg>
                       <NavText>antools.</NavText>
                  </NavBrand>
                   
                  <NavLink>
                          <Link>Home</Link>
                          <Link>Categories</Link>
                          <Link>My Collections</Link>
                          <Link>Blog</Link>
                  </NavLink>
                     
                  <Loginin>
                     <Signin>Login</Signin>
                     <Signup>Sign Up</Signup>
                  </Loginin>
            </Navbars>

            <Show/>
       </Container>
    )
}

export default Navbar
