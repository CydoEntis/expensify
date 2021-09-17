import React from "react";

import styles from "./Button.module.css";

const Button = ({ className, children, type, onClick }) => {
	return (
		<button className={`${styles.btn} ${className}`} type={type} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
