import { getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserInformation } from "../components/UserInformation";

export const HomePage = () => {
	const auth = getAuth();
	const [user] = useAuthState(auth);
	return <>{user ? <UserInformation /> : <Navigate to={"/login"} />}</>;
};
