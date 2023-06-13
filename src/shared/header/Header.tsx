import React from "react";
import { Link } from "react-router-dom";
import { useFavoriteContext } from "../../context/FavoritesContext";
import "./Header.css";

export const Header = () => {
	const currentPage = window.location.pathname;
	const { reRender, showModal } = useFavoriteContext();

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
