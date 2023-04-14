import React , {useState}from 'react';
import axios from 'axios';
const Register = (props) => {
    

	const [email,setEmail] = useState('');
	const [pass,setPass] = useState('');
    const [repass,setRepass] = useState('');
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
	const handleSubmit=(e)=>{
		e.preventDefault();
		console.log(email);
        var jsonData={
            "username":name, 
            "email":email, 
            "password":pass,
            "numberphone":phone
            
        }
        axios({
            method: "post",
            url: "https://localhost:7223/Apiauthorize/Add",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(jsonData)
          })
            .then(function (response) {
              //handle success
                if(response.data=='success')
                    {
                        window.alert('success')
                        props.onFromSwitch('login')
                    }
                else
                    {
                        window.alert('already used')
                    }
                console.log(response);
            }).catch(function (response) {
				//handle error
				console.log(response);
			  });
	}
return (
    <div className='auth-form-container'>
	<form onSubmit={handleSubmit}>
        <label>Username</label>
		<input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Username" name="name"/>  
		<br/>
        <label htmlFor="email">email</label>
		<input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" name="email"/>  
		<br/>
        <label htmlFor="password">password</label>
		<input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="***************" name="password"/>
        <br/>
        <label htmlFor="password">confirm password</label>
		<input value={repass} onChange={(e)=>setRepass(e.target.value)} type="password" placeholder="***************" name="password"/>
        <br/>
        <label >Phone Number</label>
		<input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="0xx-xxx-xxxx" name="phone"/>
        <br/>
        <button type="submit">Register</button>
	</form>
    <button onClick={()=>props.onFromSwitch('login')}>--Login--</button>
    </div>
);
};

export default Register;
