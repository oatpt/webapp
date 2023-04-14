import Popup from "reactjs-popup";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";
import { Container, Row, Col } from 'react-grid';
import './custom-popup.css';
import React,{ useState } from "react";
import axios from 'axios';
const SettingsModal = ({handleClose, show,modal,setModel ,projectName, projectId }) => {
	const [shop, setShop] = useState(0);
	const [order,setOrder] = useState('');
	const [locate,setLocate] = useState('');

	const handleSubmit=(e)=>{
		e.preventDefault();
		console.log(order);
	}
	const handleConfirm=(e)=>{
		e.preventDefault();
		handleClose();
		console.log("confirm");
		var data={
			"order":order,
			"shop":String(shop),
			"locate":locate,
		}
		console.log(data);
		axios({
            method: "post",
            url: "https://localhost:7223/Api/Add",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(data)
          })
            .then(function (response) {
              //handle success
              console.log(response);
            }).then(function (response) {
				//handle error
				console.log(response);
			  });
	}
	if(modal==="Modal1")
	{
		return (
    <Modal dialogClassName="my-modal" animation={false} show={show} onHide={handleClose} centered>
			<Container>
		<Row>
			<Col xs>
				<img class="imgShop" src={require('../../img/logo/shop1.png')} onClick={() => {setModel("Modal2"); setShop(1);} } alt="shop1"/>
			</Col>
			<Col xs>
				<img class="imgShop" src={require('../../img/logo/shop2.png')} onClick={() => {setModel("Modal2"); setShop(2);} } alt="shop2"/>
			</Col>
			<Col xs>
				<img class="imgShop" src={require('../../img/logo/shop3.png')} onClick={() => {setModel("Modal2"); setShop(3);} } alt="shop3"/>
			</Col>
			<Col xs>
				<img class="imgShop" src={require('../../img/logo/shop4.png')} onClick={() => {setModel("Modal2"); setShop(4);} } alt="shop4"/>
			</Col>
		</Row>
		<Row>
			<Col xs>
				<img class="imgShop" src={require('../../img/logo/shop5.png')} onClick={() => {setModel("Modal2"); setShop(5);} } alt="shop5"/>
			</Col>
			<Col xs>
				<img class="imgShop" src={require('../../img/logo/shop6.png')} onClick={() => {setModel("Modal2"); setShop(6);} } alt="shop6"/>
			</Col>
			<Col xs>
				<img class="imgShop" src={require('../../img/logo/shop7.png')} onClick={() => {setModel("Modal2"); setShop(7);} } alt="shop7"/>
			</Col>
			<Col xs>
				<img class="imgShop" src={require('../../img/logo/shop8.png')} onClick={() => {setModel("Modal2"); setShop(8);} } alt="shop8"/>
			</Col>
		</Row>
		<Row>
			<Col xs>
				<img class="imgShop" src={require('../../img/logo/shop9.png')} onClick={() => {setModel("Modal2"); setShop(9);} } alt="shop9"/>
			</Col>
			<Col xs>
				<img class="imgShop" src={require('../../img/logo/shop10.png')} onClick={() => {setModel("Modal2"); setShop(10);} } alt="shop10"/>
			</Col>
			<Col xs>
				<img class="imgShop" src={require('../../img/logo/shop11.png')} onClick={() => {setModel("Modal2"); setShop(11);} } alt="shop11"/>
			</Col>
			<Col xs>
				<img class="imgShop" src={require('../../img/logo/shop12.png')} onClick={() => {setModel("Modal2"); setShop(12);} } alt="shop12"/>
			</Col>
		</Row>
		</Container>
    </Modal>
  );
	}
	else if(modal==="Modal2")
	{
		return(
			<Modal dialogClassName="my-modal" show={show} animation={false} onHide={handleClose} centered>
				<h1>Detail</h1>
				<form onSubmit={handleSubmit}>
					<textarea id="text-area-input" value={order} onChange={(e)=>setOrder(e.target.value)} placeholder="รายการอาหาร" />
					<input value={locate} onChange={(e)=>setLocate(e.target.value)} type="text" placeholder="จุดรับ" name="location"/>
					<button type="submit" onClick={() => setModel("Modal3")}>submit</button>
					<button onClick={() => setModel("Modal1")}>back</button>
				</form>
			</Modal>
		);
	}
	else if(modal==="Modal3")
	{
		return(
			<Modal dialogClassName="my-modal" show={show} animation={false} onHide={handleClose} centered>
				<img class="imgShop" src={require('../../img/shop/shop'+String(shop)+'.png')} />
				<div>{order}</div>
				<div>{locate}</div>
				<div>userName</div>
				<div>PhoneNumber</div>
				<button onClick={() => setModel("Modal2")}>back</button>
				<button type="submit" onClick={handleConfirm}>confirm</button>
			</Modal>
		);
	}
	
};
export default SettingsModal ;