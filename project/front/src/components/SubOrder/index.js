import React from "react";
import { Container } from "react-bootstrap";
import './postit.css'
const Postit = (props)=>{
    return(
        <div>
        {props.postits.map((dataObj) => (
            <div class="container" key={dataObj.shop}>
                <div className = "head-image">
                    <img src={require('../../img/post_it/shop'+String(dataObj.shop)+'.png')}/>
                </div>
              <div class="text-on-image">
                <h2>{dataObj.order}</h2>
                <p>{dataObj.locate}</p>
              </div>
            </div>
          ))}
        </div>
       
    )
}
export default Postit;