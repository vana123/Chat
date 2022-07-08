import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { auth, db } from "../../fireBase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";

export const ChatFooter = () => {
	const [user] = useAuthState(auth);
	const [message, setMessage] = useState("");
	const sendMassage = () => {
		db.collection("test").add({
			message: message,
			user: user?.email,
			photoURL: user?.photoURL,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setMessage("");
	};
	return (
		<div>
			<TextField
				value={message}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setMessage(e.target.value);
				}}
			/>
			<Button onClick={sendMassage}>Send</Button>
		</div>
	);
};
