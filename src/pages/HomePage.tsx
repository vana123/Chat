import { Navigate, Link } from "react-router-dom";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { UserInformation } from "../components/UserInformation";
import { auth } from "../fireBase";

export const HomePage = () => {
	const [user, loading, error] = useAuthState(auth);
	if (!!user) {
		return (
			<>
				<UserInformation />
			</>
		);
	} else if (loading) {
		return <>Loading...</>;
	} else {
		return <Navigate to={"/login"} />;
	}
};
