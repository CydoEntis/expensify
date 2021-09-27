import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import Button from '../UI/Buttons/Button';

import navStyles from './Nav.module.css';
import buttonStyles from '../UI/Buttons/Button.module.css';

const NavMenu = ({ onClick }) => {
	const userCtx = useContext(UserContext);

	const logout = () => {
		onClick();
		userCtx.logoutHandler();
	};

	return (
		<div className={navStyles['nav-menu']}>
			<header>
				<h1>Welcome {userCtx.username}</h1>
				<Button className={navStyles['nav-btn--alt']} onClick={onClick}>
					<i className="bx bx-x-circle"></i>
				</Button>
			</header>
			<Button className={buttonStyles['btn-primary']} onClick={logout}>
				Logout
			</Button>
			<footer></footer>
		</div>
	);
};

export default NavMenu;
