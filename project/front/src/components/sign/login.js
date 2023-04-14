import React , {useState}from 'react';
import axios from 'axios';
const Login = (props) => {
	const [name,setName] = useState('');
	const [pass,setPass] = useState('');

	const handleSubmit=(e)=>{
		e.preventDefault();
		console.log(name);
		axios({
            method: "post",
            url: "https://localhost:7223/User/Authenticate",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({
				"username": name,
  				"password": pass
			})
          })
            .then(function (response) {
              //handle success
				localStorage.setItem('token',response.data);
			  	window.alert('success');
				window.location.replace('http://localhost:3000/MainPage');
            }).catch(function (response) {
				//handle error
				window.alert('The username or password is incorrect.')
			  });
	}
return (
	<div className='auth-form-container'>
	<form onSubmit={handleSubmit}>
		<label>Username</label>
		<input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Username" name="name"/> 
		<br/>
		<label htmlFor="password">password</label>
		<input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="***************" name="password"/>  
		<br/>
		<button type="submit">Log In</button>
	</form>
	<button onClick={()=>props.onFromSwitch('register')}>--Register--</button>
	<button onClick={localStorage.removeItem('token')}>--Logout--</button>
	</div>
);
};

export default Login;
