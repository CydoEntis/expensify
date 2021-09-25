import React, { useState, useContext } from 'react';
import ProfileSettings from '../Profile/ProfileSettings';

import styles from './NavBar.module.css';
import UserContext from '../../contexts/UserContext';
import NavButton from './NavButton';

const NavBar = () => {
	const userCtx = useContext(UserContext);

	let username;

	if (userCtx.username.length === 0) {
		username = 'User';
	} else {
		username = userCtx.username;
	}

	const [showSettings, setShowSettings] = useState(false);

	const toggleSettingsHandler = () => {
		setShowSettings((prevState) => {
			return !prevState;
		});
	};

	return (
		<div className={styles.navbar}>
			{showSettings && <ProfileSettings onClose={toggleSettingsHandler} />}
			<NavButton className={styles['nav-icon']} onToggleSettings={toggleSettingsHandler} />
		</div>
	);
};

export default NavBar;
