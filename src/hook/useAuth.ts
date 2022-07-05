import { useAppSelector } from "./redux";

export const useAuth = () => {
	const { email, id, token } = useAppSelector((state) => state.userReducer);
	return {
		isAuth: !!email,
		id,
		token,
	};
};
