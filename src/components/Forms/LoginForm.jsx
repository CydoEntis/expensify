import React, { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import { getUserProfile } from '../../helpers/helpers';
import useInput from '../../hooks/use-input';
import ErrorMessage from '../Errors/ErrorMessage';
import Button from '../UI/Buttons/Button';

import formStyles from './Form.module.css';
import buttonStyles from '../UI/Buttons/Button.module.css';

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
		return inputType ? `${formStyles['form-error']}` : '';
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
		<div className={formStyles['form-container']}>
			<form onSubmit={onSubmitHandler}>
				<h2 className={formStyles['form-container--title']}>
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
				<div className={formStyles['form-controls']}>
					<Button type={'button'} className={buttonStyles['btn-secondary']} onClick={resetForm}>
						Cancel
					</Button>
					<Button type={'submit'} className={buttonStyles['btn-primary']}>
						Login
					</Button>
				</div>
				<p className={formStyles['form-container--redirect']} onClick={toggleAuthOption}>
					Not a member? <span>Sign up here!</span>
				</p>
			</form>
		</div>
	);
};

export default LoginForm;
