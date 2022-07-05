import { getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export const HomePage = () => {
	const auth = getAuth();
	const [user] = useAuthState(auth);
	return (
		<>
			<img src={user!.photoURL ? user!.photoURL : ""} alt="" />
			{/* <Navigate to={"/login"} /> */}
			<button
				onClick={() => {
					auth.signOut();
				}}
			>
				Sign Out
			</button>
		</>
	);
};
