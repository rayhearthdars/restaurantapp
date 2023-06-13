import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../../context/RestaurantsContext";
import { RestaurantType } from "../../models/restaurantType";
import { FavoriteButton } from "../../shared/cards/FavoriteButton";
import { Modale } from "../../shared/modale/Modale";
import { useFavoriteContext } from "../../context/FavoritesContext";
import "./Details.css";

export const Details = () => {
	const { reRender } = useFavoriteContext();
	const { restaurants } = useContext(RestaurantContext);
	let { restaurantId } = useParams();
	const [restaurantData, setRestaurantData] = useState<RestaurantType | undefined>(undefined);
	const value = restaurants.find((item) => String(item.id) === restaurantId);

	useEffect(() => {
		reRender();
	}, [value]);

	useEffect(() => {
		setRestaurantData(value);
	}, [value]);

	if (typeof restaurantData === "undefined") return null;
	return (
		<main className="details_container">
			<FavoriteButton restoId={Number(restaurantId)} />
			<Modale restoId={Number(restaurantId)} />
			<h1 className="details_h1">{restaurantData.name}</h1>
			<img
				src={restaurantData.img}
				alt="Restaurant"
			/>
			<p className="details_description">{restaurantData.description_long}</p>
			<h2 className="details_h2">Menu</h2>
			<div className="details_menu">
				<h3>Entrées</h3>
				{restaurantData.menu.entrees.map((item) => (
					<p>{item}</p>
				))}
			</div>
			<div className="details_menu">
				<h3>Plats</h3>
				{restaurantData.menu.dishes.map((item) => (
					<p>{item}</p>
				))}
			</div>
			<div className="details_menu">
				<h3>Desserts</h3>
				{restaurantData.menu.deserts.map((item) => (
					<p>{item}</p>
				))}
			</div>
		</main>
	);
};
