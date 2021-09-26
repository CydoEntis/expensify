import React from 'react';
import useInput from '../../hooks/use-input';
import ErrorMessage from '../Errors/ErrorMessage';
import Button from '../UI/Buttons/Button';

import styles from './Form.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const SignUpForm = ({ toggleAuthOption }) => {
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

	const {
		value: monthlyIncomeValue,
		isValid: monthlyIncomeIsValid,
		hasError: monthlyIncomeHasError,
		inputValueChangeHandler: monthlyIncomeChangeHandler,
		inputBlurHandler: monthlyIncomeBlurHandler,
		resetInputHandler: resetMonthlyIncomeHandler,
	} = useInput(isNotEmpty);

	const resetForm = () => {
		resetUsernameHandler();
		resetPasswordHandler();
		resetMonthlyIncomeHandler();
	};

	let formIsValid;
	if (usernameIsValid && passwordIsValid && monthlyIncomeIsValid) {
		formIsValid = true;
	}

	console.log(usernameHasError);
	console.log(usernameValue);

	const onSubmitHandler = (e) => {
		e.preventDefault();

		if (!formIsValid) return;

		resetForm();
	};

	const toggleInputError = (inputType) => {
		return inputType ? `${styles['form-error']}` : '';
	};

	const usernameInputClasses = toggleInputError(usernameHasError);
	const passwordInputClasses = toggleInputError(passwordHasError);
	const monthlyIncomeInputClasses = toggleInputError(monthlyIncomeHasError);

	const usernameError = usernameHasError && (
		<ErrorMessage>Username must be at least 3 characters long.</ErrorMessage>
	);

	const passwordError = passwordHasError && (
		<ErrorMessage>Password must be atleast 5 characters long.</ErrorMessage>
	);

	const monthlyIncomeError = monthlyIncomeHasError && (
		<ErrorMessage>Monthly income must be at least $100</ErrorMessage>
	);

	return (
		<div className={styles['form-container']}>
			<form onSubmit={onSubmitHandler}>
				<h2 className={styles['form-container--title']}>
					<span>S</span>
					ign Up
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
				<input
					className={monthlyIncomeInputClasses}
					type="number"
					placeholder="Monthly Income"
					value={monthlyIncomeValue}
					onChange={monthlyIncomeChangeHandler}
					onBlur={monthlyIncomeBlurHandler}
				/>
				{monthlyIncomeError}
				<div className={styles['form-controls']}>
					<Button type={'button'} className={styles['form-controls--btn-alt']}>
						Cancel
					</Button>
					<Button type={'submit'} className={styles['form-controls--btn']}>
						Sign Up
					</Button>
				</div>
			</form>
			<p className={styles['form-container--redirect']} onClick={toggleAuthOption}>
				Already signed up? <span>Login here!</span>
			</p>
		</div>
	);
};

export default SignUpForm;
