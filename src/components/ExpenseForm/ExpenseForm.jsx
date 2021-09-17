import React, { useContext } from "react";
import useInput from "../../hooks/use-input";
import ExpensesContext from "../../contexts/ExpensesContext";
import Dropdown from "../UI/Inputs/Dropdown";

const TYPES = [
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

const ExpenseForm = () => {
	const expensesCtx = useContext(ExpensesContext);

	const {
		value: typeValue,
		isValid: typeIsValid,
		hasError: typeHasError,
		selectionId,
		dropdownHandler: typeChangeHandler,
		inputBlurHandler: typeBlurHandler,
		resetInputHandler: resetType,
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
		resetType();
		resetName();
		resetCost();
		resetDate();
	};

	let formIsValid = false;

	if (nameIsValid && typeIsValid && costIsValid && dateIsValid) {
		formIsValid = true;
	}

	const submitHandler = (e) => {
		e.preventDefault();

		if (!formIsValid) return;

		const newExpense = {
			id: Math.floor(Math.random() * 1000),
			type: typeValue,
			name: nameValue,
			cost: costValue,
			date: dateValue,
		};

		expensesCtx.addExpense(newExpense);

		resetForm();
	};

	return (
		<form onSubmit={submitHandler}>
			<div>
				<Dropdown
					type="text"
					placeholder="Type"
					types={TYPES}
					typeId={selectionId}
					onChange={typeChangeHandler}
					onBlur={typeBlurHandler}
					value={typeValue}
				/>
				{typeHasError && <p>Please select a type.</p>}
				<input
					type="text"
					placeholder="Name"
					onChange={nameChangeHandler}
					onBlur={nameBlurHandler}
					value={nameValue}
				/>
				{nameHasError && <p>Please don't leave name empty.</p>}
				<input
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
			<div>
				<button type="submit">Add Expense</button>
			</div>
			{expensesCtx.expenses.map((expense) => (
				<div key={expense.id}>
					<p>{expense.type}</p>
					<p>{expense.name}</p>
					<p>{expense.cost}</p>
					<p>{expense.date}</p>
				</div>
			))}
		</form>
	);
};

export default ExpenseForm;
