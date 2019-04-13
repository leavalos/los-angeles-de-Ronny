import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../App.css'

class ComponentePractica extends Component {
  render() {
    return (
        <Carousel width='60%' className='ajustar' dynamicHeight='false'>
        
            <img src={ require('./Img/Nisman.jpg')  } classname='ajustar' alt=''/>
            
        
        
            <img src={ require('./Img/Nisman.jpg')  } classname='ajustar' alt=''/>
        
        
            <img src={ require('./Img/Nisman.jpg')  } classname='ajustar' alt=''/>
            
        
    </Carousel>
    );
  }
}

export default ComponentePractica;
