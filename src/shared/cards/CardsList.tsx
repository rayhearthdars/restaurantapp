import React, { useContext} from "react";
import { RestaurantContext } from "../../context/RestaurantsContext";
import { Card } from "./Card";
import "./CardsList.css";

export const CardsList = () => {
	const { restaurants } = useContext(RestaurantContext);

	return (
		<article className="cards_list">
			{restaurants.map((restaurant) => (
				<Card
					key={restaurant.id}
					resto={restaurant}
					restoId={restaurant.id}
				/>
			))}
		</article>
	);
};
