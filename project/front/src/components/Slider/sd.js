import React from 'react';
import './Slider.css';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
const ReactCardSlider =(props)=>{
    const slideLeft =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return(
        <div id="main-slider-container" class="center">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider">
               { 
                props.slides.map((slide,index)=>{
                        return(
                            <div className="slider-card" key={index} onClick={()=>slide.clickEvent()}>
                                <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div>
                                { slide.order > 0 ? <div className="slider-card-popup">{slide.order}</div>:<div></div>}

                            </div>
                            
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
        </div>
    )
}
export default ReactCardSlider;