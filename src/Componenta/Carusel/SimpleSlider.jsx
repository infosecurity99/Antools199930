import React from 'react';
import Slider from 'infinite-react-carousel';
import '../../index.css'
import person from '../../Rasim/person.png'
const SimpleSlider = () => (
    <Slider dots style={{widht:'600px !important', height:'200px !important'}}>
    <div className='grow'  style={{display:'flex !important', alignItems:"center",flexDirection:'row',justifyContent:'center'}}>
      <img  className="imgs" src={person}/>
      <span  className='word'>
      <p  style={{textAlign:'center',color:'white',fontSize:'30px',paddingTop:'130',marginBottom:"30px"}}>1</p>
      Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</span>
    </div>
    

    <div className='grow'  style={{display:'flex !important', alignItems:"center",flexDirection:'row',justifyContent:'center'}}>
      <img  className="imgs" src={person}/>
      <span  className='word'>
      <p  style={{textAlign:'center',color:'white',fontSize:'30px',paddingTop:'130',marginBottom:"30px"}}>2</p>
      Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</span>
    </div>

    <div className='grow'  style={{display:'flex !important', alignItems:"center",flexDirection:'row',justifyContent:'center'}}>
      <img  className="imgs" src={person}/>
      <span  className='word'>
      <p  style={{textAlign:'center',color:'white',fontSize:'30px',paddingTop:'130',marginBottom:"30px"}}>3</p>
      Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</span>
    </div>

  </Slider>
);
export default SimpleSlider