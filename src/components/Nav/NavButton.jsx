import React from 'react';

import Button from '../UI/Buttons/Button';

const NavButton = ({ onClick, className }) => {
	return (
		<Button onClick={onClick} className={className}>
			<i className="bx bx-menu-alt-left"></i>
		</Button>
	);
};

export default NavButton;
