import React, { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import { getUserProfile } from '../../helpers/helpers';
import useInput from '../../hooks/use-input';
import ErrorMessage from '../Errors/ErrorMessage';
import Button from '../UI/Buttons/Button';

import styles from './Form.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const LoginForm = ({ toggleAuthOption }) => {
	const userCtx = useContext(UserContext);
	const [isValidCredentials, setIsValidCredentials] = useState(true);

	const {
		value: usernameValue,
		isValid: usernameIsValid,
		hasError: usernameHasError,
		inputValueChangeHandler: usernameChangeHandler,
		inputBlurHandler: usernameBlurHandler,
		resetInputHandler: resetUsernameHandler,
	} = useInput(isNotEmpty);

	const {
		value: passwordValue,
		isValid: passwordIsValid,
		hasError: passwordHasError,
		inputValueChangeHandler: passwordChangeHandler,
		inputBlurHandler: passwordBlurHandler,
		resetInputHandler: resetPasswordHandler,
	} = useInput(isNotEmpty);

	const resetForm = () => {
		resetUsernameHandler();
		resetPasswordHandler();
	};

	let formIsValid;
	let invalidCredentials;
	if (usernameIsValid && passwordIsValid) {
		formIsValid = true;
	}

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const data = getUserProfile();

		if (data.username !== usernameValue || data.password !== passwordValue) {
			setIsValidCredentials(false);
			return;
		}

		if (!formIsValid) return;

		userCtx.loginHandler();
		resetForm();
	};

	const toggleInputError = (inputType) => {
		return inputType ? `${styles['form-error']}` : '';
	};

	const usernameInputClasses = toggleInputError(usernameHasError);
	const passwordInputClasses = toggleInputError(passwordHasError);

	const usernameError = usernameHasError && (
		<ErrorMessage>Username must be at least 3 characters long.</ErrorMessage>
	);

	const passwordError = passwordHasError && (
		<ErrorMessage>Password must be atleast 5 characters long.</ErrorMessage>
	);

	const invalidLogin = !isValidCredentials && (
		<ErrorMessage>Username or password is incorrect.</ErrorMessage>
	);

	return (
		<div className={styles['form-container']}>
			<form onSubmit={onSubmitHandler}>
				<h2 className={styles['form-container--title']}>
					<span>L</span>
					ogin
				</h2>
				<input
					className={usernameInputClasses}
					type="text"
					placeholder="Username"
					value={usernameValue}
					onChange={usernameChangeHandler}
					onBlur={usernameBlurHandler}
				/>
				{usernameError}
				<input
					className={passwordInputClasses}
					type="password"
					placeholder="Password"
					value={passwordValue}
					onChange={passwordChangeHandler}
					onBlur={passwordBlurHandler}
				/>
				{passwordError}
				{invalidLogin}
				<div className={styles['form-controls']}>
					<Button type={'button'} className={styles['form-controls--btn-alt']}>
						Cancel
					</Button>
					<Button type={'submit'} className={styles['form-controls--btn']}>
						Login
					</Button>
				</div>
			</form>
			<p className={styles['form-container--redirect']} onClick={toggleAuthOption}>
				Already signed up? <span>Login here!</span>
			</p>
		</div>
	);
};

export default LoginForm;
