import { Avatar, Grid, Paper } from "@mui/material";
import { app } from "firebase-admin";
import { collection, getFirestore, orderBy, query } from "firebase/firestore";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../fireBase";

export const ChatBody = () => {
	const [masages, loading, error] = useCollection(
		query(collection(db, "test"), orderBy("timestamp", "asc"))
	);

	return (
		<div>
			{error && <strong>Error: {JSON.stringify(error)}</strong>}
			{loading && <span>Collection: Loading...</span>}
			{masages && (
				<Paper sx={{ height: "80vh", my: 2, p: 3 }} elevation={3}>
					{masages.docs.map((doc) => (
						<Paper key={doc.id} sx={{ my: 1, p: 1, width: 300 }}>
							<Grid container>
								<Grid item xs={4}>
									<Avatar src={doc.data().photoURL} />
								</Grid>
								<Grid item xs={6}>
									{doc.data().message}
								</Grid>
							</Grid>
						</Paper>
					))}
				</Paper>
			)}
		</div>
	);

	return <div>ChatBody</div>;
};
