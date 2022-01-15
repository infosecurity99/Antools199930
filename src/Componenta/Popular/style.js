import styled from "styled-components";

export const Container=styled.div`
//border: 1px solid green;
margin-top: 58px;
display: flex;
flex-direction: row;
justify-content: space-between;
height: 580px;
`
export const LeftContainer=styled.div`
flex: 5;
`
export const RightConatainer=styled.div`
height: 580px;
flex: 4;
`
export const ImgBaner=styled.img`
width: 100%;
height: 100%;
`
export const Text=styled.div`
width: 600px;
height: 140px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 55px;
line-height: 140%;
color: rgba(255, 255, 255, 0.9);
margin-bottom: 50px;
`
export const Desc=styled.div`
width: 487px;
height: 60px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;
color: rgba(255, 255, 255, 0.55);
`
export const InputGroup=styled.div`
width: 497.66px;
height: 64px;
background: #283036;
border-radius: 15px;
margin-top: 60px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:space-around;
`
export const Input=styled.input`
width: 497.66px;
width: 55%;
height: 48px;
border: none;
outline: none;
background: #283036;
color: white;
`
export const Button=styled.div`
width: 130.43px;
height: 48px;
background: #FF6E30;
border-radius: 8px;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

`
export const Icon=styled.img`
width: 24.08px;
height: 24px;
color: white;
`
export const Links=styled.div`
display: flex;
margin-top: 145px;
`
export const FacebookIcon=styled.img`
height: 25px;
width: 13px;
background: #1E252B;
color: white;
`
export const InstagramIcon=styled.img`
height: 27px;
width: 27px;
background: #1E252B;
`
export const TwiterIcon=styled.img`

height: 24px;
width: 24px;
background: #1E252B;
`
export const Boxs=styled.div`
width: 58px;
height: 58px;
background: #1E252B;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 0px 20px;
transition: all 0.8s ease;
cursor: pointer;
&:hover{
    border: 1px solid white;
    color: black;
    background-color: black;
    transition: all 0.8s ease;
}
`