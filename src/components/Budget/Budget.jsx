import React, { useContext } from "react";

import BudgetAmount from "./BudgetAmount";

import styles from "./Budget.module.css";
import ExpensesContext from "../../contexts/ExpensesContext";

const Budget = () => {
	const expensesCtx = useContext(ExpensesContext);
	let totalBudget = 5000;
	let remainingBudget = totalBudget;

	for (let expense of expensesCtx.expenses) {
		remainingBudget -= expense.cost;
	}

	return (
		<div className={styles.budget}>
			<BudgetAmount
				className={styles.budget__amount}
				remainingBudget={remainingBudget}
				totalBudget={totalBudget}
			/>
		</div>
	);
};

export default Budget;
