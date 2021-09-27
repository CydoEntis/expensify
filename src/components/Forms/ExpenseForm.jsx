import React, { useContext } from 'react';
import useInput from '../../hooks/use-input';

import ExpensesContext from '../../contexts/ExpensesContext';
import Dropdown from '../UI/Inputs/Dropdown';
import Button from '../UI/Buttons/Button';
import ErrorMessage from '../Errors/ErrorMessage';

import formStyles from './Form.module.css';
import buttonStyles from '../UI/Buttons/Button.module.css';

const SELECTIONS = [
	{ id: 1, value: 'Bill' },
	{ id: 2, value: 'Food & Drink' },
	{ id: 3, value: 'Gas' },
	{ id: 4, value: 'Decor' },
	{ id: 5, value: 'Recreation' },
	{ id: 6, value: 'Clothing' },
	{ id: 7, value: 'Emergency' },
	{ id: 8, value: 'Other' },
];

const isNotEmpty = (value) => value.trim() !== '';

const ExpenseForm = (props) => {
	const expensesCtx = useContext(ExpensesContext);

	const {
		value: selectionValue,
		isValid: selectionIsValid,
		hasError: selectionHasError,
		selectionId,
		dropdownHandler: selectionChangeHandler,
		inputBlurHandler: selectionBlurHandler,
		resetInputHandler: resetSelection,
	} = useInput(isNotEmpty);

	const {
		value: nameValue,
		isValid: nameIsValid,
		hasError: nameHasError,
		inputValueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		resetInputHandler: resetName,
	} = useInput(isNotEmpty);

	const {
		value: costValue,
		isValid: costIsValid,
		hasError: costHasError,
		inputValueChangeHandler: costChangeHandler,
		inputBlurHandler: costBlurHandler,
		resetInputHandler: resetCost,
	} = useInput(isNotEmpty);

	const {
		value: dateValue,
		isValid: dateIsValid,
		hasError: dateHasError,
		inputValueChangeHandler: dateChangeHandler,
		inputBlurHandler: dateBlurHandler,
		resetInputHandler: resetDate,
	} = useInput(isNotEmpty);

	const resetForm = () => {
		resetSelection();
		resetName();
		resetCost();
		resetDate();
	};

	let formIsValid = false;

	if (nameIsValid && selectionIsValid && costIsValid && dateIsValid) {
		formIsValid = true;
	}

	const submitHandler = (e) => {
		e.preventDefault();

		if (!formIsValid) return;

		const date = new Date(dateValue);
		const month = date.toLocaleString('en-US', { month: 'long' });
		const day = date.toLocaleString('en-US', { day: '2-digit' });
		const year = date.getFullYear();

		const newExpense = {
			id: Math.floor(Math.random() * 1000),
			type: selectionValue,
			name: nameValue,
			cost: costValue,
			date: `${month} ${day}, ${year}`,
		};

		expensesCtx.addExpense(newExpense);
		props.onClose();
		resetForm();
	};

	const selectionError = selectionHasError && (
		<ErrorMessage>Please select a valid type.</ErrorMessage>
	);
	const nameError = nameHasError && <ErrorMessage>Name must not be empty.</ErrorMessage>;
	const costError = costHasError && <ErrorMessage>Cost must be greater then $0.01.</ErrorMessage>;
	const dateError = dateHasError && <ErrorMessage>Please select a valid date.</ErrorMessage>;

	return (
		<div className={formStyles['form-container']}>
			<form onSubmit={submitHandler}>
				<h1 className={formStyles['form-container--title']}>Add An Expense</h1>
				<div>
					<Dropdown
						className={formStyles['expense-dropdown']}
						default={'Type'}
						type="text"
						placeholder="Type"
						selections={SELECTIONS}
						selectionId={selectionId}
						onChange={selectionChangeHandler}
						onBlur={selectionBlurHandler}
						value={selectionValue}
					/>
					{selectionError}
					<input
						type="text"
						placeholder="Name"
						onChange={nameChangeHandler}
						onBlur={nameBlurHandler}
						value={nameValue}
					/>
					{nameError}
					<input
						type="number"
						min="0.01"
						step="0.01"
						placeholder="Cost"
						onChange={costChangeHandler}
						onBlur={costBlurHandler}
						value={costValue}
					/>
					{costError}
					<input
						type="date"
						min="01/01/2021"
						max="12/31/2100"
						placeholder="Name"
						onChange={dateChangeHandler}
						onBlur={dateBlurHandler}
						value={dateValue}
					/>
					{dateError}
				</div>
				<div className={formStyles['form-controls']}>
					<Button className={buttonStyles['btn-secondary']} type="button" onClick={props.onClose}>
						Cancel
					</Button>
					<Button className={buttonStyles['btn-primary']} type="submit">
						Add Expense
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ExpenseForm;
