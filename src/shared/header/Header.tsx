import React from "react";
import { Link } from "react-router-dom";
import { useFavoriteContext } from "../../context/FavoritesContext";
import "./Header.css";

export const Header = () => {
	const currentPage = window.location.pathname;
	const { reRender, showModal } = useFavoriteContext();

	// Just, as I told you, I would have kept the favoris link on every page
	// And put the return to home on "Delices"
	// And yes, Delices is the h1 of the website !
	return (
		<header>
			<h1>Delices</h1>
			{currentPage === "/" ? (
				<Link
					to={"/favoris"}
					onClick={() => {
						showModal(null);
						reRender();
					}}
				>
					<button type="button">Favoris</button>
				</Link>
			) : (
				<Link
					to={"/"}
					onClick={() => {
						showModal(null);
						reRender();
					}}
				>
					<button type="button">Accueil</button>
				</Link>
			)}
		</header>
	);
};
