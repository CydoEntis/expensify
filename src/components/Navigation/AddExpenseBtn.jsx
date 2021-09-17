import React from "react";

import Button from "../UI/Buttons/Button";

import styles from "./AddExpenseBtn.module.css";

const AddExpenseBtn = ({ onToggleForm }) => {
	return (
		<Button onClick={onToggleForm} className={styles["btn--add"]}>
			<i className="bx bx-plus"></i>
		</Button>
	);
};

export default AddExpenseBtn;
