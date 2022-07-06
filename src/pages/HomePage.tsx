import { getAuth } from "firebase/auth";
import { Navigate, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserInformation } from "../components/UserInformation";

export const HomePage = () => {
	const auth = getAuth();
	const [user] = useAuthState(auth);
	if (!!user) {
		return (
			<>
				<UserInformation />
				<Link to={"/chat"}>Chat</Link>
			</>
		);
	} else {
		return <Navigate to={"/login"} />;
	}
};
