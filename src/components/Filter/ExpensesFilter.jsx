import React from "react";

import Dropdown from "../UI/Inputs/Dropdown";
import styles from "./ExpensesFilter.module.css";

import useInput from "../../hooks/use-input";

let currYear = new Date().getFullYear();

const SELECTIONS = [
	{ id: 1, value: "January " + currYear },
	{ id: 2, value: "Febuary " + currYear },
	{ id: 3, value: "March " + currYear },
	{ id: 4, value: "April " + currYear },
	{ id: 5, value: "May " + currYear },
	{ id: 6, value: "June " + currYear },
	{ id: 7, value: "July " + currYear },
	{ id: 8, value: "August " + currYear },
	{ id: 9, value: "September " + currYear },
	{ id: 10, value: "October " + currYear },
	{ id: 11, value: "November " + currYear },
	{ id: 12, value: "December " + currYear },
];

const isNotEmpty = (value) => value.trim() !== "";

const ExpensesFilter = () => {
	const {
		value: selectionValue,
		selectionId,
		dropdownHandler: selectionChangeHandler,
		inputBlurHandler: selectionBlurHandler,
	} = useInput(isNotEmpty);

	return (
		<div className={styles["expenses-filter"]}>
			<div className={styles["expenses-filter__controls"]}>
				<Dropdown
					default="Filter By Date"
					className={styles["expenses-filter--dropdown"]}
					type="text"
					placeholder="Type"
					selections={SELECTIONS}
					selectionId={selectionId}
					onChange={selectionChangeHandler}
					onBlur={selectionBlurHandler}
					value={selectionValue}
				/>
			</div>
		</div>
	);
};

export default ExpensesFilter;
