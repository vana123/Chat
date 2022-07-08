import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { auth, provider } from "../fireBase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export default function LogInGoogle() {
	const navigate = useNavigate();
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	if (error) {
		return (
			<div>
				<p>Error: {error.message}</p>
			</div>
		);
	}
	if (loading) {
		return <p>Loading...</p>;
	}
	if (user) {
		navigate("/");
	}
	return (
		<div>
			<Button onClick={() => signInWithGoogle()}>Sign In</Button>
		</div>
	);
}
