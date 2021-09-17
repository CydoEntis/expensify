import React, { useContext } from "react";
import ExpensesContext from "../../contexts/ExpensesContext";

import ExpenseItem from "./ExpenseItems/ExpenseItem";

const ExpensesList = (props) => {
	// if (props.expenses.length === 0) return <Empty errorMessage={"Sorry you have no expenses"} />;
	const expensesCtx = useContext(ExpensesContext);

	return (
		<ul>
			{expensesCtx.expenses.map((expense) => (
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
