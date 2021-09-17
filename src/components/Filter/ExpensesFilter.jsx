import React from "react";

import Dropdown from "../UI/Inputs/Dropdown";
import styles from "./ExpensesFilter.module.css";
const ExpensesFilter = () => {
	return (
		<div className={styles["expenses-filter"]}>
			<h3>Expenses for</h3>
			{/* <Dropdown /> */}
			<p className={styles["expense-filter--dropdown"]}>Sep 2021'</p>
		</div>
	);
};

export default ExpensesFilter;
