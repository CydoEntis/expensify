import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

import ExpenseItem from './ExpenseItems/ExpenseItem';

import styles from './ExpensesList.module.css';

const ExpensesList = ({ filterMonth, filterYear }) => {
	const userCtx = useContext(UserContext);

	const filteredExpenses = userCtx.monthlyExpenses.filter((expense) => {
		const splitDate = expense.date.split(' ');
		const month = splitDate[0];
		const year = splitDate[2];

		return month === filterMonth && year === filterYear;
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
