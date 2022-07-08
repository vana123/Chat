import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/system";
import { Button, Grid, TextField } from "@mui/material";
import { Chat } from "../components/Chat/Chat";

export const ChatPage = () => {
	const auth = getAuth();
	const [user, loading, error] = useAuthState(auth);

	if (!!user) {
		return (
			<Container maxWidth="md">
				<Chat />
			</Container>
		);
	} else {
		return <Navigate to={"/login"} />;
	}
};
