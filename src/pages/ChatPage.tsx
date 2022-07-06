import React from "react";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/system";
import { Button, Grid, TextField } from "@mui/material";

export const ChatPage = () => {
	const auth = getAuth();
	const [user] = useAuthState(auth);
	if (!!user) {
		return (
			<Container maxWidth="md">
				<Grid
					container
					justifyContent={"center"}
					style={{ height: window.innerHeight - 50, marginTop: 20 }}
				>
					<div
						style={{
							width: "80%",
							height: "60vh",
							border: "1px solid gray",
							overflowY: "auto",
						}}
					></div>
					<Grid
						container
						item
						direction={"column"}
						alignItems={"flex-end"}
						style={{ width: "80%" }}
					>
						<TextField
							fullWidth
							variant={"outlined"}

							// onChange={(e) => setValue(e.target.value)}
						/>
						<Button variant={"outlined"}>Отправить</Button>
					</Grid>
				</Grid>
			</Container>
		);
	} else {
		return <Navigate to={"/login"} />;
	}
};
