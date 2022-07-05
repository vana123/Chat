import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TUset = {
	email: string;
	displayName: string;
	photoURL: string;
	accessToken: string;
};

const initialState: TUset = {
	email: "",
	displayName: "",
	photoURL: "#",
	accessToken: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<TUset>) {
			state.displayName = action.payload.displayName;
			state.email = action.payload.email;
			state.photoURL = action.payload.photoURL;
			state.accessToken = action.payload.accessToken;
		},
		remuveUser(state) {
			state.displayName = "";
			state.email = "";
			state.photoURL = "#";
			state.accessToken = "";
		},
	},
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
