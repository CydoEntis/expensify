import React, { useContext } from "react";

import BudgetAmount from "./BudgetAmount";

import styles from "./Budget.module.css";
import ExpensesContext from "../../contexts/ExpensesContext";
import ProfileBanner from "../Profile/ProfileBanner";
import ExpensesFilter from "../Filter/ExpensesFilter";
import UserContext from "../../contexts/UserContext";

const Budget = () => {
	const expensesCtx = useContext(ExpensesContext);
	const userCtx = useContext(UserContext);

	let totalBudget;

	if (userCtx.budget.length === 0) {
		totalBudget = 0;
	} else {
		totalBudget = parseInt(userCtx.budget);
	}

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
