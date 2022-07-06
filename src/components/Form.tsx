import React, { MouseEventHandler, useState } from "react";

type FormProps = {
	title: string;
	handlerClik: any;
};

export function Form({ title, handlerClik }: FormProps) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div>
			<h1>{title}</h1>
			<input
				type="email"
				value={email}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setEmail(e.target.value);
				}}
			/>
			<input
				type="password"
				value={password}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setPassword(e.target.value);
				}}
			/>
			<button onClick={() => handlerClik(email, password)}>
				{title}
			</button>
		</div>
	);
}
