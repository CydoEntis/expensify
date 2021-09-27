import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import useInput from '../../hooks/use-input';
import ErrorMessage from '../Errors/ErrorMessage';
import Button from '../UI/Buttons/Button';

import formStyles from './Form.module.css';
import buttonStyles from '../UI/Buttons/Button.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const SignUpForm = ({ toggleAuthOption }) => {
	const userCtx = useContext(UserContext);

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

	const onSubmitHandler = (e) => {
		e.preventDefault();

		if (!formIsValid) return;

		const user = {
			isLoggedIn: true,
			username: usernameValue,
			password: passwordValue,
			monthlyIncome: monthlyIncomeValue,
			monthlyExpenses: [],
		};

		localStorage.setItem('expensifyUser', JSON.stringify(user));

		toggleAuthOption();
		userCtx.loginHandler();
		resetForm();
	};

	const toggleInputError = (inputType) => {
		return inputType ? `${formStyles['form-error']}` : '';
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
		<div className={formStyles['form-container']}>
			<form onSubmit={onSubmitHandler}>
				<h2 className={formStyles['form-container--title']}>
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
				<div className={formStyles['form-controls']}>
					<Button type={'button'} className={buttonStyles['btn-primary']}>
						Cancel
					</Button>
					<Button type={'submit'} className={buttonStyles['btn-secondary']}>
						Sign Up
					</Button>
				</div>
			</form>
			<p className={formStyles['form-container--redirect']} onClick={toggleAuthOption}>
				Already signed up? <span>Login here!</span>
			</p>
		</div>
	);
};

export default SignUpForm;
