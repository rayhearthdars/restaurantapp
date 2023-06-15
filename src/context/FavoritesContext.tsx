import React, { createContext, useContext, useState } from "react";

type FavoriteType = {
	show: number | null;
	showModal: (value:number | null) => void;
	favorites: number[];
	addFavorite: (value: number) => void;
	removeFavorite: (value: number) => void;
	getFavorites: number[];
	reRender: () => void;
};


export const FavoritesContext = createContext<FavoriteType>({} as FavoriteType);

export const useFavoriteContext = () => useContext(FavoritesContext);

export const FavoritesContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [show, setShow] = useState<number | null>(null);
	const getFavorites = JSON.parse(localStorage.getItem(`favorites`) || "[]");
	const [favorites, setFavorites] = useState<number[]>(getFavorites);

	// I don't think this render is useful
	// You can just use the show modal as a boolean
	const [render, setRender] = useState(false);
	const reRender = () => {
		if (render) {
			setRender(false);
		} else {
			setRender(true);
		}
	};
	const showModal = (value:number | null) => {
		setShow(value)
	};

	const addFavorite = (value: number) => {
		if (!favorites.includes(value)) {
			favorites.push(value);
			setFavorites(favorites);
			localStorage.setItem(`favorites`, JSON.stringify(favorites));
		}
	};

	const removeFavorite = (value: number) => {
		if (favorites.includes(value)) {
			const fav = favorites.filter((fav) => fav !== value);
			setFavorites(fav);
			localStorage.setItem(`favorites`, JSON.stringify(fav));
		}
	};

	return (
		<FavoritesContext.Provider value={{ show, showModal, reRender, getFavorites, favorites, addFavorite, removeFavorite }}>
			{children}
		</FavoritesContext.Provider>
	);
};
