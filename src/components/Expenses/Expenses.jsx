import React from 'react';
import ExpensesList from './ExpensesList';

import styles from './Expenses.module.css';

const Expenses = ({ filterMonth }) => {
	return (
		<div className={styles.expenses}>
			<ExpensesList filterMonth={filterMonth} />
		</div>
	);
};

export default Expenses;
