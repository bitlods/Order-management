import React from 'react';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
NavBtnLink,
} from '../components/NavbarElement';

const Bar = () => {
return (
	<>
	<u><h1>WEB BASED SHOPPING MALL MANAGEMENT SYSTEM</h1></u>
	<Nav>

		<NavMenu>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/allorder' activeStyle>
			All Order
		</NavLink>
		<NavLink to='/updateorder' activeStyle>
			Update Order
		</NavLink>
		<NavLink to='/deleteorder' activeStyle>
			Delete Order
		</NavLink>
		
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/' activeStyle>
			Home
		</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Bar;
