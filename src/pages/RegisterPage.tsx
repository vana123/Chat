import { Link } from "react-router-dom";

export const RegisterPage = () => {
	return (
		<>
			<h1>Register</h1>
			<Link to={"/login"}>log in</Link>
		</>
	);
};
