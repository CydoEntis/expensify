import React, { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
	const [userBudget, setUserBudget] = useState("");
	const [username, setUsername] = useState("");

	const editBudget = (value) => {
		setUserBudget(value);
	};

	const editUsername = (value) => {
		setUsername(value);
	};

	const login = () => {};

	const logout = () => {};

	const userContext = {
		budget: userBudget,
		username: username,
		editBudget,
		editUsername,
		login,
		logout,
	};

	return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>;
};

export default UserProvider;
