import React, { useContext } from "react";

import BudgetAmount from "./BudgetAmount";

import styles from "./Budget.module.css";
import ExpensesContext from "../../contexts/ExpensesContext";
import ProfileBanner from "../Profile/ProfileBanner";
import ExpensesFilter from "../Filter/ExpensesFilter";

const Budget = () => {
	const expensesCtx = useContext(ExpensesContext);
	let totalBudget = 5000;
	let remainingBudget = totalBudget;

	for (let expense of expensesCtx.expenses) {
		remainingBudget -= expense.cost;
	}

	return (
		<div className={styles.budget}>
			<ProfileBanner />
			<BudgetAmount
				className={styles.budget__amount}
				remainingBudget={remainingBudget}
				totalBudget={totalBudget}
			/>
			<ExpensesFilter />
		</div>
	);
};

export default Budget;
