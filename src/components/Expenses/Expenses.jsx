import React from "react";
import ExpensesList from "./ExpensesList";

import styles from "./Expenses.module.css";

const Expenses = () => {
	return (
		<div className={styles.expenses}>
			<ExpensesList />
		</div>
	);
};

export default Expenses;
