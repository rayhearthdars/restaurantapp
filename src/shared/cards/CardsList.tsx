import React, { useContext} from "react";
import { RestaurantContext } from "../../context/RestaurantsContext";
import { Card } from "./Card";
import "./CardsList.css";

export const CardsList = () => {
	// You could have used this component in the Favorite page and the Home page 
	// by passing the filtered or not filtered restaurants list as prop from the page
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
