import { Container, Stack, Typography } from "@mui/material";
import LogInGoogle from "../components/LogIn";

export const LoginPage = () => {
	return (
		<>
			<Container maxWidth="md">
				<Stack direction={"column"}>
					<Typography component={"h1"}>Log in</Typography>
					<LogInGoogle />
				</Stack>
			</Container>
		</>
	);
};
