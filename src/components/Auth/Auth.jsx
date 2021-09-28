import React, { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import LoginForm from '../Forms/LoginForm';
import SignUpForm from '../Forms/SignUpForm';

const Auth = () => {
	const userCtx = useContext(UserContext);
	const [signUpVisible, setSignUpVisible] = useState(true);

	const toggleAuthOption = () => {
		setSignUpVisible((prevState) => {
			return !prevState;
		});
	};

	return (
		<div>
			{signUpVisible && !userCtx.isLoggedIn && <LoginForm toggleAuthOption={toggleAuthOption} />}
			{!signUpVisible && !userCtx.isLoggedIn && <SignUpForm toggleAuthOption={toggleAuthOption} />}
		</div>
	);
};

export default Auth;
