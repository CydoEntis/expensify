import React, { useContext } from 'react';
import ExpensesContext from '../../contexts/ExpensesContext';

import ExpenseItem from './ExpenseItems/ExpenseItem';

import styles from './ExpensesList.module.css';

const month = [
	'January',
	'Febuary',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const ExpensesList = (props) => {
	// if (props.expenses.length === 0) return <Empty errorMessage={"Sorry you have no expenses"} />;
	const expensesCtx = useContext(ExpensesContext);

	// console.log('Filter Month: ', props.filterMonth);

	const filteredExpenses = expensesCtx.expenses.filter((expense) => {
		const splitDate = expense.date.split(' ');
		const expenseDate = splitDate[0];
		let selectedMonth = props.filterMonth;
		if (selectedMonth === '') {
			selectedMonth = month[new Date().getMonth()];
		}

		if (expenseDate === selectedMonth) return expense;
	});

	const newExpenses = filteredExpenses;

	if (newExpenses.length === 0) {
		return (
			<div className={styles.empty}>
				<i className="bx bxs-inbox"></i>
				<h3>Expenses are empty</h3>
			</div>
		);
	}

	return (
		<ul>
			{newExpenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					id={expense.id}
					name={expense.name}
					type={expense.type}
					cost={expense.cost}
					date={expense.date}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
