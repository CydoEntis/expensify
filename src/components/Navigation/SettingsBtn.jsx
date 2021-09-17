import React from "react";
import Button from "../UI/Buttons/Button";

export default function SettingsBtn({ onClick, className }) {
	return (
		<Button onClick={onClick} className={className}>
			<i className="bx bx-user-circle"></i>
		</Button>
	);
}
