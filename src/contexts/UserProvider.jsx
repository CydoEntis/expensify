import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
	const [userBudget, setUserBudget] = useState("");
	const [username, setUsername] = useState("");

	useEffect(() => {
		const data = localStorage.getItem("username");
		if (data) {
			setUsername(data);
		} else {
			setUsername("User");
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("username", username);
	});

	useEffect(() => {
		const data = localStorage.getItem("userBudget");
		if (data) {
			setUserBudget(data);
		} else {
			setUserBudget(0);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("userBudget", userBudget);
	});

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
