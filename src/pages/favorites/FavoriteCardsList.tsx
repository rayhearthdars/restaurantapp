import React, { useContext } from "react";
import { useFavoriteContext } from "../../context/FavoritesContext";
import { Card } from "../../shared/cards/Card";
import { RestaurantContext } from "../../context/RestaurantsContext";
import "./FavoriteCardsList.css";
export const FavoriteCardsList = () => {
	const { restaurants } = useContext(RestaurantContext);
	const { favorites } = useFavoriteContext();

	// This could be the CardsList, there was no need for another component
	const favoriteRestaurant = restaurants.filter((res) => favorites.includes(res.id));
	return (
		<main>
			{favoriteRestaurant.map((fav) => (
				<Card
					resto={fav}
					restoId={fav.id}
				/>
			))}
		</main>
	);
};
