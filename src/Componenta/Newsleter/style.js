import styled from "styled-components";

export const Container=styled.div`
margin-top: 200px;
//border: 1px solid red;

`
export const Title=styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 130%;
text-align: center;
color: rgba(255, 255, 255, 0.9);
`
export const Desc=styled.div`
width: 427px;
height: 60px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 30px;
text-align: center !important;
color: rgba(255, 255, 255, 0.55);
margin: 30px auto 90px;
`
export const Content=styled.div`

`
export const Row=styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
margin-top: ${props=>props.two? '150px': ' '};
`
export const Col=styled.div`
width: 392px;
height: 294px;
background: #1E252B;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
&:hover{
background: rgba(40, 48, 54, 0.6);
backdrop-filter: blur(50px);
border-radius: 15px;
cursor: pointer;
}
`
export const Img1=styled.img`
width: 326px;
height: 228px;
`

export const Img2=styled.img`
width: 326px;
height: 228px;
`

export const Img3=styled.img`
width: 326px;
height: 228px;
`

export const Img4=styled.img`
width: 326px;
height: 228px;
`

export const Img5=styled.img`
width: 326px;
height: 228px;
`

export const Img6=styled.img`
width: 326px;
height: 228px;
`

export const Load=styled.div`
width: 184px;
height: 64px;
background: #1E252B;
border: 1px solid rgba(255, 255, 255, 0.1);
box-sizing: border-box;
border-radius: 8px;
margin: 200px auto 0px;

`
export const Button=styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 20px;
color: #FF6E30;
text-align: center;
line-height: 57px;
cursor: pointer;
`
export const Grow=styled.div`
height: 253px;
margin:220px auto;
width: 80%;
cursor: pointer;
background: rgba(44, 53, 61, 0.2);
backdrop-filter: blur(50px);
border-radius: 25px;
`
export const Img7=styled.img`

`