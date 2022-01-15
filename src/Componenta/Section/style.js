import styled from "styled-components";

export const Container=styled.div`
background:#1E252B;
width: 100%;
height: 755px !important;
`
//    ************************************navbar ***************************
export const Navbars=styled.div`
padding: 30px 0px !important;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
//border: 1px solid white;
`

export const NavBrand=styled.div`
display: flex;
height: 38px;
flex-direction: row;
align-items: center;
`
export const NavText=styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 33px;
color: rgba(255, 255, 255, 0.9);
margin-left: 14px;
cursor: pointer;
`
export const LogosImg=styled.div`
width: 38px;
height: 38px;
background: #FF6E30 !important;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const NavImg=styled.img`
width: 29.95px;
height: 29.95px;
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
cursor: pointer;
`
export const NavLink=styled.div`
width: 431px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`
export const Link=styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500 !important;
font-size: 16px;
line-height: 24px;
color: rgba(255, 255, 255, 0.55);
cursor: pointer;
`
//***************************************loginin****************************
export const Loginin=styled.div`
display: flex;
`

export const Signin=styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: rgba(255, 255, 255, 0.78);
opacity: 0.78;
width: 118px;
height: 48px;

border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
z-index:1;
&:hover{
    background: #FF6E30;
    color: white;
}
`
export const Signup=styled.div`
width: 118px;
cursor: pointer;
height: 48px;
background: #FF6E30;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #FDF5FF;
margin-left: 5px;
`

