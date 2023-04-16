import ReactCardSlider from '../components/Slider/sd';
import SettingsModal from '../components/CustomPopup';
import '../components/CustomPopup/custom-popup.css';
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";
import axios from 'axios';

//import ReactCardSlider from 'react-card-slider-component';
function App() {

  const sliderClick = (slider) => {
    alert("hello world");
  }

  const [show, setShow] = useState(false);
  const [modal, setModal] = useState("Modal1");

  
  const [playload, setplayload] = useState([])

    const fetchData = () => {
      axios({
        method: "get",
        url: "https://localhost:7223/Api/GetAll",
        headers: { "Content-Type": "application/json" },
      })
        .then(Response => {
          setplayload(Response.data)
        })
    }
    let dis=[];
    for (let index = 1; index <= 12; index++) {
      dis[index]=0;
  }
    useEffect(() => {
      
      fetchData()
      console.log(playload)
    }, [])

    for (let index = 0; index < playload.length; index++) {
      dis[parseInt(playload[index].shop)]++;
    }
    



    const slides = [
      { image: require('../img/shop/shop1.png'), order: dis[1], clickEvent: sliderClick },
      { image: require('../img/shop/shop2.png'), order: dis[2], clickEvent: sliderClick },
      { image: require('../img/shop/shop3.png'), order: dis[3], clickEvent: sliderClick },
      { image: require('../img/shop/shop4.png'), order: dis[4], clickEvent: sliderClick },
      { image: require('../img/shop/shop5.png'), order: dis[5], clickEvent: sliderClick },
      { image: require('../img/shop/shop6.png'), order: dis[6], clickEvent: sliderClick },
      { image: require('../img/shop/shop7.png'), order: dis[7], clickEvent: sliderClick },
      { image: require('../img/shop/shop8.png'), order: dis[8], clickEvent: sliderClick },
      { image: require('../img/shop/shop9.png'), order: dis[9], clickEvent: sliderClick },
      { image: require('../img/shop/shop10.png'), order: dis[10], clickEvent: sliderClick },
      { image: require('../img/shop/shop11.png'), order: dis[11], clickEvent: sliderClick },
      { image: require('../img/shop/shop12.png'), order: dis[12], clickEvent: sliderClick },
    ]

    // const token=localStorage.getItem('token');
    // if (token==null)
    //   console.log('no token')
    // else
    //   console.log(token)

    return (
      <div id="body">
        <ReactCardSlider slides={slides} />
        <button class="bi bi-plus-circle addicon" onClick={() => setShow(true)}></button>
        <SettingsModal show={show} modal={modal} setModel={setModal} handleClose={() => {
          setShow(false);
          //await delay(1000);
          setModal("Modal1");
        }} />
      </div>

    );


  }

  export default App;