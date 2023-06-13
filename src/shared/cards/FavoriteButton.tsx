import React from "react";
import { useFavoriteContext } from "../../context/FavoritesContext";
import "./FavoriteButton.css";

export const FavoriteButton = ({ restoId }: { restoId: number }) => {
	const { showModal, getFavorites, reRender, addFavorite } = useFavoriteContext();

	return (
		<div>
			{getFavorites.includes(restoId) && (
				<button
					className="favorite"
					type="button"
					onClick={() => {
						showModal(restoId);
					}}
				>
					&#x2605;
				</button>
			)}
			{!getFavorites.includes(restoId) && (
				<button
					className="favorite"
					type="button"
					onClick={() => {
						addFavorite(restoId);
						reRender();
					}}
				>
					&#x2729;
				</button>
			)}
		</div>
	);
};
