import React from "react";

import styles from "./User.module.css";

const User = ({ username }) => {
	return <h1 className={styles.username}>Hello {username},</h1>;
};

export default User;
