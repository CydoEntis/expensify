import React, { useContext } from "react";

import ExpenseType from "./ExpenseType";
import ExpenseName from "./ExpenseName";
import ExpenseCost from "./ExpenseCost";
import ExpenseDate from "./ExpenseDate";

import styles from "./ExpenseItem.module.css";
import Button from "../../UI/Buttons/Button";
import ExpensesContext from "../../../contexts/ExpensesContext";

const ExpenseItem = (props) => {
	const expensesCtx = useContext(ExpensesContext);

	return (
		<div className={styles["expense-item"]}>
			<div className={styles["expense-item--container"]}>
				<ExpenseType className={styles["expense-item__type"]} type={props.type} />
				<div className={styles["expense-item--flex"]}>
					<ExpenseName className={styles["expense-item__name"]} name={props.name} />
					<div className={styles["expense-item--wrapper"]}>
						<ExpenseCost className={styles["expense-item__cost"]} amount={props.cost} />
					</div>
				</div>
				<ExpenseDate className={styles["expense-item__date"]} date={props.date} />
			</div>
			<Button
				className={styles["expense-item--delete-btn"]}
				onClick={() => {
					expensesCtx.removeExpense(props.id);
				}}>
				<i className="bx bx-x"></i>
			</Button>
		</div>
	);
};

export default ExpenseItem;
