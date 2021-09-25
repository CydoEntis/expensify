import React, { useContext } from 'react';
import Modal from '../UI/Modals/Modal';
import Button from '../UI/Buttons/Button';
import UserContext from '../../contexts/UserContext';
import useInput from '../../hooks/use-input';
import styles from '../ExpenseForm/Form.module.css';

const validateUsername = (value) => {
	if (/^[a-zA-Z]+$/.test(value)) return true;
	else return false;
};

const validateBudget = (value) => {
	let testValue = parseInt(value);
	if (/\D/.test(testValue)) return false;
	else return true;
};

const ProfileSettings = (props) => {
	const userCtx = useContext(UserContext);

	const {
		value: usernameValue,
		isValid: usernameIsValid,
		hasError: usernameHasError,
		inputValueChangeHandler: usernameChangeHandler,
		inputBlurHandler: usernameBlurHandler,
		resetInputHandler: resetUsername,
	} = useInput(validateUsername);

	const {
		value: budgetValue,
		isValid: budgetIsValid,
		hasError: budgetHasError,
		inputValueChangeHandler: budgetChangeHandler,
		inputBlurHandler: budgetBlurHandler,
		resetInputHandler: resetBudget,
	} = useInput(validateBudget);

	const resetForm = () => {
		resetUsername();
		resetBudget();
	};

	let formIsValid = false;
	if (budgetIsValid) {
		formIsValid = true;
	}

	const submitFormHandler = (e) => {
		e.preventDefault();

		if (!formIsValid) return;

		userCtx.editUsername(usernameValue);
		userCtx.editBudget(budgetValue);

		resetForm();
		props.onClose();
	};

	return (
		<Modal onClose={props.onClose}>
			<h1 className={styles['form__title']}>Edit Budget</h1>
			<form className={styles['form']} onSubmit={submitFormHandler}>
				{/* <input
					className={styles["form__input"]}
					type="text"
					placeholder="Name"
					onChange={usernameChangeHandler}
					onBlur={usernameBlurHandler}
					value={usernameValue}
				/>
				{usernameHasError && (
					<p className={styles["form-error"]}>Username can only contain letters.</p>
				)} */}
				<input
					className={styles['form__input']}
					type="text"
					placeholder="New Budget"
					onChange={budgetChangeHandler}
					onBlur={budgetBlurHandler}
					value={budgetValue}
				/>
				{budgetHasError && <p className={styles['form-error']}>Budget can only contain numbers.</p>}
				<div>
					<Button type="button" onClick={props.onClose} className={styles['form--btn-alt']}>
						Cancel
					</Button>
					<Button type="submit" className={styles['form--btn']}>
						Save
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default ProfileSettings;
