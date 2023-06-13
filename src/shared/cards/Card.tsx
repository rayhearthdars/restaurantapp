import React from "react";
import { RestaurantType } from "../../models/restaurantType";
import { Link } from "react-router-dom";
import "./Card.css";
import { Modale } from "../modale/Modale";
import { FavoriteButton } from "./FavoriteButton";

export const Card = ({ resto, restoId }: { resto: RestaurantType; restoId: number }) => {
	return (
		<section className="card_and_modale">
			<div className="card">
				<Link
					to={`/details/${resto.id}`}
					style={{ textDecoration: "none" }}
				>
					<div>
						<div className="card_img_container">
							<img
								src={resto.img}
								alt="restaurant"
							/>
						</div>
						<h3>{resto.name}</h3>
						<p>{resto.description_short}</p>
					</div>
				</Link>
				<FavoriteButton restoId={restoId} />
			</div>
			<Modale restoId={restoId} />
		</section>
	);
};
