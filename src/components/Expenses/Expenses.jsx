import React from 'react';
import ExpensesList from './ExpensesList';

import styles from './Expenses.module.css';

const Expenses = ({ filterMonth, filterYear }) => {
	return (
		<div className={styles.expenses}>
			<ExpensesList filterMonth={filterMonth} filterYear={filterYear} />
		</div>
	);
};

export default Expenses;
