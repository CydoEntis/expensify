import React from "react";
import Button from "../UI/Buttons/Button";

import styles from "./EditBudget.module.css";

const EditBudget = () => {
	return (
		<Button className={styles["btn--edit"]}>
			<i className="bx bx-edit"></i>
		</Button>
	);
};

export default EditBudget;
