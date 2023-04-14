import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/MainPage' activeStyle>
			<i class="bi bi-basket"></i>
		</NavLink>
		<NavLink to='/Option' activeStyle>
			<i class="bi bi-gear"></i>
		</NavLink>
		<NavLink to='/Signin' activeStyle>
			<i class="bi bi-box-arrow-in-right"></i>
		</NavLink>
		<NavLink to='/history' activeStyle>
			<i class="bi bi-clock-history"></i>
		</NavLink>
		<NavLink to='/subOrder' activeStyle>
			<i class="bi bi-card-list"></i>
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			<i class="bi bi-box-arrow-in-right"></i>
		</NavLink>
		<NavLink to='/mylist' activeStyle>
			<i class="bi bi-calendar-heart-fill"></i>
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		{/*<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>*/}
	</Nav>
	</>
);
};

export default Navbar;
