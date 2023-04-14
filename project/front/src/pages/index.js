import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
	const logoStyle = {
		width: "50%",
  		height: "auto",
	}
	const navigate = useNavigate()
return (
	<div class="center">
		<img src={require('../img/logo_delivery/logomain.png')} alt="Logo" style={logoStyle}/>
		<button onClick={() => navigate('MainPage',{replace:true})}>click</button>
	</div>
	
);
};

export default Home;
