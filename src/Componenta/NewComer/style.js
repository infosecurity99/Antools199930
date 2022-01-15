import styled from "styled-components";

export const Container=styled.div`
margin-top: 220px;
//border: 1px solid red;
display: flex;
align-items: flex-start;
justify-content: space-between;
flex-direction: row;
height: 660px;
`
export const LeftContainer=styled.div`
flex: 1;
`
export const Title=styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 130%;
color: rgba(255, 255, 255, 0.9);
`
export const Desc=styled.div`
width: 370px;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 30px;
color: rgba(255, 255, 255, 0.55);
margin-top: 30px;
`

export const Button=styled.div`
width: 198px;
height: 58px;
background: #FF6E30;
border-radius: 8px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
margin-top: 76px;
`
export const RightContainer=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`
export const Col=styled.div`
width: 288px;
height: 284px;
background: #1E252B;
border-radius: 15px;
//border: 1px solid white;
margin-top: ${props=>props.top? '74px': ' '};
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover{
background: rgba(40, 48, 54, 0.6);
backdrop-filter: blur(50px);
border-radius: 15px;
}
`
export const Img1=styled.img`
width: 245px;
height: 228px;
`

export const Img2=styled.img`
width: 245px;
height: 228px;
`

export const Img3=styled.img`
width: 245px;
height: 228px;
`

export const Img4=styled.img`
width: 245px;
height: 228px;
`