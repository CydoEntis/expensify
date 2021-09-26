import React, { useState } from 'react';
import LoginForm from '../Forms/LoginForm';
import SignUpForm from '../Forms/SignUpForm';

import styles from './Auth.module.css';

const Auth = () => {
	const [signUpVisible, setSignUpVisible] = useState(true);

	const toggleAuthOption = () => {
		setSignUpVisible((prevState) => {
			return !prevState;
		});
	};

	return (
		<div className={styles.auth}>
			{signUpVisible && <SignUpForm toggleAuthOption={toggleAuthOption} />}
			{!signUpVisible && <LoginForm toggleAuthOption={toggleAuthOption} />}
		</div>
	);
};

export default Auth;
