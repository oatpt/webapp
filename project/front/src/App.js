import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter ,Switch,Route ,Routes} from 'react-router-dom';
import Home from './pages';
import MainPage from './pages/MainPage';
import Option from './pages/Option';
import Signin from './pages/signin';
import History from './pages/history';
import SubOrder from './pages/suborder';
import SignUp from './pages/signup';
import Mylist from './pages/mylist';

function App() {
return (
	<BrowserRouter>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home />} />
		<Route path='/MainPage' element={<MainPage/>} />
		<Route path='/Option' element={<Option/>} />
		<Route path='/signin' element={<Signin/>} />
		<Route path='/history' element={<History/>} />
		<Route path='/subOrder' element={<SubOrder/>} />
		<Route path='/sign-up' element={<SignUp/>} />
		<Route path='/mylist' element={<Mylist/>} />
	</Routes>
	</BrowserRouter>
);
}

export default App;
