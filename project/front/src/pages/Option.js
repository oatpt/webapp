import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Option = (props) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [repass, setRepass] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [display,setDisplay]  = useState('');

    const fetchData = () => {
      axios({
        method: "get",
        url: "https://localhost:7223/Apiauthorize/Getbyname",
        headers: { 
			"Content-Type": "application/json" 
			,"Authorization":"Bearer "+localStorage.getItem('token')
		},
      })
        .then(Response => {
			if (Response.data=="no found token")
				window.alert('กรุณาเข้าสู่ระบบ')
			else
          	{
				setName(Response.data.username)
				setEmail(Response.data.email)
				setPass(Response.data.password)
				setPhone(Response.data.numberphone)
				setDisplay(Response.data.displayname)
			}
        })
		.catch(() => {
			window.alert('กรุณาเข้าสู่ระบบ')
        })
    }
    useEffect(() => {     
      fetchData();
    }, [])
	
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
		var jsonData = {
			"username": name,
			"email": email,
			"password": pass,
			"numberphone": phone,
			"displayname":display,
		}
		axios({
			method: "post",
			url: "https://localhost:7223/Apiauthorize/Edit",
			headers: { 
				"Content-Type": "application/json" 
				,"Authorization":"Bearer "+localStorage.getItem('token')
			},
			data: JSON.stringify(jsonData)
		})
			.then(function (response) {
				//handle success
				window.alert('success');
			}).catch(function (response) {
				//handle error
				console.log(response);
			});
	}
	
	
	return (
		<div className='auth-form-container'>
			<form onSubmit={handleSubmit}>
				<h2>แก้ไขข้อมูล</h2>
				<label>Username</label>
				<input readOnly={true} value={name} onChange={(e) => setName(e.target.value)}  name="name" />
				<br />
				<label htmlFor="email">email</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
				<br />
				<label htmlFor="password">password</label>
				<input value={pass} onChange={(e) => setPass(e.target.value)} type="password"  name="password" />
				<br />
				<label htmlFor="password">confirm password</label>
				<input value={repass} onChange={(e) => setRepass(e.target.value)} type="password"  name="password" />
				<br />
				<label >Phone Number</label>
				<input value={phone} onChange={(e) => setPhone(e.target.value)} type="number"  name="phone" />
				<br />
				<label >Displayname</label>
				<input value={display} onChange={(e) => setDisplay(e.target.value)} type="text"  name="display" />
				<br />
				<button type="submit">บันทึกข้อมูล</button>
			</form>
		</div>
	);
};

export default Option;
