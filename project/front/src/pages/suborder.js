import React,{useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Postit from '../components/SubOrder';
const SubOrder = () => {
const location = useLocation();
const [playload, setplayload] = useState([])
const [shop, setShop] = useState(location.state.id)
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
  useEffect(() => {
      
	fetchData()
	
  }, [])
  /*
  let data=[
    {
        "id": 5,
        "order": "food",
        "shop": "1",
        "locate": "ecc",
        "user": "unknow",
        "numberphone": "unknow",
        "status": "ready"
    },
    {
        "id": 6,
        "order": "kfc",
        "shop": "4",
        "locate": "home",
        "user": "unknow",
        "numberphone": "unknow",
        "status": "ready"
    }
	,
    {
        "id": 7,
        "order": "ก๋วยเตี๋ยว",
        "shop": "4",
        "locate": "home",
        "user": "unknow",
        "numberphone": "unknow",
        "status": "ready"
    }
]
	let currentShop = data.filter(data=> data.shop === String(location.state.id));*/
  	let currentShop = playload.filter(playload => playload.shop === shop);
	let postits = [];
	for (let index = 0; index < currentShop.length; index++) {
		postits.push({
			shop:location.state.id,
			order:currentShop[index].order,
			locate:currentShop[index].locate
		})
	  }
return (
	<div>
	<div>shop id:{location.state.id}</div>
	<Postit postits={postits}/>
	</div>
);
};

export default SubOrder;