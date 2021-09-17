import React, { useContext } from "react";
import useInput from "../../hooks/use-input";

import Modal from "../UI/Modals/Modal";
import ExpensesContext from "../../contexts/ExpensesContext";
import Dropdown from "../UI/Inputs/Dropdown";
import Button from "../UI/Buttons/Button";

import styles from "./ExpenseForm.module.css";

const SELECTIONS = [
	{ id: 1, value: "Bill" },
	{ id: 2, value: "Food & Drink" },
	{ id: 3, value: "Gas" },
	{ id: 4, value: "Decor" },
	{ id: 5, value: "Recreation" },
	{ id: 6, value: "Clothing" },
	{ id: 7, value: "Emergency" },
	{ id: 8, value: "Other" },
];

const isNotEmpty = (value) => value.trim() !== "";

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

		const newExpense = {
			id: Math.floor(Math.random() * 1000),
			type: selectionValue,
			name: nameValue,
			cost: costValue,
			date: new Date(dateValue),
		};

		expensesCtx.addExpense(newExpense);
		props.onClose();
		resetForm();
	};

	return (
		<Modal onClose={props.onClose}>
			<h1 className={styles["expense-form__title"]}>Add An Expense</h1>
			<form className={styles["expense-form"]} onSubmit={submitHandler}>
				<div>
					<Dropdown
						default={"Expense Type"}
						type="text"
						placeholder="Type"
						selections={SELECTIONS}
						selectionId={selectionId}
						onChange={selectionChangeHandler}
						onBlur={selectionBlurHandler}
						value={selectionValue}
					/>
					{selectionHasError && <p>Please select a type.</p>}
					<input
						className={styles["expense-form__input"]}
						type="text"
						placeholder="Name"
						onChange={nameChangeHandler}
						onBlur={nameBlurHandler}
						value={nameValue}
					/>
					{nameHasError && <p>Please don't leave name empty.</p>}
					<input
						className={styles["expense-form__input"]}
						type="number"
						min="0.01"
						step="0.01"
						placeholder="Cost"
						onChange={costChangeHandler}
						onBlur={costBlurHandler}
						value={costValue}
					/>
					{costHasError && <p>Please don't leave cost empty.</p>}
					<input
						className={styles["expense-form__input"]}
						type="date"
						min="01/01/2021"
						max="12/31/2100"
						placeholder="Name"
						onChange={dateChangeHandler}
						onBlur={dateBlurHandler}
						value={dateValue}
					/>
					{dateHasError && <p>Please select a valid date.</p>}
				</div>
				<div className={styles["expense-form__controls"]}>
					<Button className={styles["expense-form--btn-alt"]} type="button" onClick={props.onClose}>
						Cancel
					</Button>
					<Button className={styles["expense-form--btn"]} type="submit">
						Add Expense
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default ExpenseForm;
