import { Link } from "react-router-dom";

export const LoginPage = () => {
	return (
		<>
			<h1>Log in</h1>
			<Link to={"/register"}>rgister</Link>
		</>
	);
};
