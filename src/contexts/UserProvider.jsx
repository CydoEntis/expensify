import React, { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
	const [userBudget, setUserBudget] = useState("");
	const [username, setUsername] = useState("");

	const editUserBudget = (e) => {
		setUserBudget(e.target.value);
	};

	const editUsername = (e) => {
		setUsername(e.target.value);
	};

	const login = () => {};

	const logout = () => {};

	const userContext = {
		userBudget,
		username,
		editUserBudget,
		editUsername,
		login,
		logout,
	};

	return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>;
};

export default UserProvider;
