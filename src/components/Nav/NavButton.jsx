import React from 'react';

import Button from '../UI/Buttons/Button';

const NavButton = ({ onToggleSettings, className }) => {
	return (
		<Button onClick={onToggleSettings} className={className}>
			<i className="bx bx-menu-alt-left"></i>
		</Button>
	);
};

export default NavButton;
