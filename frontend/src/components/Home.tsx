import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { carouselPicores } from '../data/carouselData';
import { carouselText } from '../data/textCarouselData';
import AuthContextElement from "./authstatus";

function StarWarsCarousel() {

  return (
    
    <div className="main">
    
      <div className="main_text">
        <Carousel variant="dark" indicators={false} fade={true} controls={false} pause={'hover'} >
        {
        carouselText.map((element, key) => <Carousel.Item interval={3000} key={key} >         
        <span className="header_bold">{element.header} </span><br /><br />
        <span className="header_text">{element.text} </span>
        </Carousel.Item>)
     } </Carousel>
    </div>

    <AuthContextElement />
    
    <div className="main_carousel">
    <Carousel variant="dark" indicators={false} fade={true} controls={false} pause={'hover'} >
        {carouselPicores.map((element, key) => <Carousel.Item interval={800} key={key} > 
        <img className="b-block w-20" src={element.src}     alt={element.alt}  />
        </Carousel.Item>)
     } </Carousel>
    </div>

    </div>
  );
}

export default StarWarsCarousel;