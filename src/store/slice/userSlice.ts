import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TUset = {
	email: string | null;
	id: string | null;
	token: string | null;
};

const initialState: TUset = {
	email: null,
	id: null,
	token: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action) {},
		remuveUser(state) {},
	},
});

export const {} = userSlice.actions;
export const userReducer = userSlice.reducer;
