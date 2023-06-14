import React from "react";
import { FavoriteCardsList } from "./FavoriteCardsList";
import "./Favorites.css";

export const Favorites = () => {
	// Here you could have called the context and filter the restaurants list to pass it as prop to CardsList
	return <FavoriteCardsList />;
};
