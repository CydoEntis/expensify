import React from "react";
import User from "../Profile/User";

import styles from "./BudgetAmount.module.css";

const splitIntoDollarsAndCents = (amount) => {
	const formattedAmount = amount.toFixed(2).toString().split(".");
	return {
		dollars: formattedAmount[0],
		cents: formattedAmount[1],
	};
};

const BudgetAmount = ({ className, remainingBudget, totalBudget }) => {
	const formattedRemainingBudget = splitIntoDollarsAndCents(remainingBudget);
	const formattedTotalBudget = splitIntoDollarsAndCents(totalBudget);

	return (
		<div className={styles.budget}>
			<h3 className={styles["budget-text"]}>Your current budget is</h3>
			<div className={styles["budget-amount"]}>
				<h2>
					<span className={styles["budget-amount__remaining--dollars"]}>
						${formattedRemainingBudget.dollars}
						<span className={styles["budget-amount--cents"]}>
							.{formattedRemainingBudget.cents}
						</span>
					</span>
					<span className={styles["budget-amount__total--dollars"]}>
						/${formattedTotalBudget.dollars}
						<span className={styles["budget-amount--cents"]}>.{formattedTotalBudget.cents}</span>
					</span>
				</h2>
			</div>
		</div>
	);
};

export default BudgetAmount;
