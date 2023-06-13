import React from "react";
import { CardsList } from "../../shared/cards/CardsList";
import "./HomePage.css";
import { Banner } from "./component/Banner";

export const HomePage = () => {
	return (
		<main >
			<Banner />
			<CardsList/>
		</main>
	);
};
