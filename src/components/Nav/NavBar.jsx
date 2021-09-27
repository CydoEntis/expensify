import React from 'react';

import styles from './Nav.module.css';
import NavButton from './NavButton';
import NavMenu from './NavMenu';

const NavBar = ({ showNavMenu, onClick }) => {
	return (
		<div className={styles.navbar}>
			{showNavMenu && <NavMenu onClick={onClick} />}
			<NavButton className={styles['nav-btn']} onClick={onClick} />
		</div>
	);
};

export default NavBar;
