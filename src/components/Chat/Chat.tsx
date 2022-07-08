import React from "react";
import { Link } from "react-router-dom";
import { ChatFooter } from "./ChatFooter";
import { ChatBody } from "./ChatBody";

export const Chat = () => {
	return (
		<div>
			<ChatBody />
			<ChatFooter />
			<Link to="/">back</Link>
		</div>
	);
};
