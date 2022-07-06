import React from "react";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
	Avatar,
	Button,
	ButtonBase,
	Container,
	Grid,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

export const UserInformation: React.FC = (): JSX.Element => {
	const auth = getAuth();
	const [user] = useAuthState(auth);
	return (
		<>
			<Container maxWidth="md">
				<Paper elevation={3}>
					<Grid container spacing={2} p={2} my={2}>
						<Grid md={4} xs={12} item>
							<Paper elevation={3}>
								<Stack alignItems={"center"} py={3}>
									<Avatar
										src={
											user?.photoURL ? user!.photoURL : ""
										}
										alt={
											user?.displayName
												? user!.displayName
												: ""
										}
										sx={{ width: 120, height: 120 }}
									/>
									<Typography my={1}>
										{user?.displayName
											? user!.displayName
											: ""}
									</Typography>
								</Stack>
							</Paper>
						</Grid>
						<Grid
							item
							md={8}
							xs={12}
							container
							justifyContent={"flex-end"}
						>
							<Grid
								item
								container
								textAlign={"center"}
								rowSpacing={1}
							>
								<Grid item xs={12}>
									<Paper elevation={3}>
										<Grid container p={1}>
											<Grid item xs={4} md={6}>
												<Typography>Email:</Typography>
											</Grid>
											<Grid item xs={8} md={6}>
												<Typography>
													{!!user?.email
														? user!.email
														: ""}
												</Typography>
											</Grid>
										</Grid>
									</Paper>
								</Grid>
								<Grid item xs={12}>
									<Paper elevation={3}>
										<Grid container p={1}>
											<Grid item xs={4} md={6}>
												<Typography>
													last Sign In Time:
												</Typography>
											</Grid>
											<Grid item xs={8} md={6}>
												<Typography>
													{!!user?.metadata
														.lastSignInTime
														? user!.metadata
																.lastSignInTime
														: ""}
												</Typography>
											</Grid>
										</Grid>
									</Paper>
								</Grid>
							</Grid>
							<Grid item>
								<Stack
									height={"100%"}
									justifyContent={"flex-end"}
								>
									<Button
										onClick={() => {
											auth.signOut();
										}}
									>
										Sign Out
									</Button>
								</Stack>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</>
	);
};
