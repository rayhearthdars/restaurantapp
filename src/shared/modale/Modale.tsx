import React from "react";
import { useFavoriteContext } from "../../context/FavoritesContext";
import "./Modale.css";

export const Modale = ({ restoId }: { restoId: number }) => {
	const { show, showModal, reRender, removeFavorite } = useFavoriteContext();

	if (show === restoId) {
		return (
			<div className="modale">
				<h2>Supprimer le favori?</h2>
				<button
					type="button"
					onClick={() => {
						removeFavorite(restoId);
						showModal(null);
						reRender();
					}}
				>
					Oui
				</button>
				<button
					type="button"
					onClick={() => showModal(null)}
				>
					Non
				</button>
			</div>
		);
	}
	else {
		return null
	}
	
};
