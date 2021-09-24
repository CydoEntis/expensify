import React from "react";

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
		<div>
			<h3>Your current budget is</h3>
			<div>
				<h2>
					<span>
						${formattedRemainingBudget.dollars}
						<span>.{formattedRemainingBudget.cents}</span>
					</span>
					<span>
						/${formattedTotalBudget.dollars}
						<span>.{formattedTotalBudget.cents}</span>
					</span>
				</h2>
			</div>
		</div>
	);
};

export default BudgetAmount;
