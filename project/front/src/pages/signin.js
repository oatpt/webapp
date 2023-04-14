import React , {useState}from 'react';
import Login from '../components/sign/login.js';
import Register from '../components/sign/register.js';

const Signin = () => {
	const [currentFrom,setCurrentFrom]=useState('login');
	const toggleForm = (formName) => {
		setCurrentFrom(formName);
	}
return (
	<div>
		{
			currentFrom === "login" ? <Login onFromSwitch={toggleForm}/>:<Register onFromSwitch={toggleForm}/>
		}
	</div>
);
};

export default Signin;
