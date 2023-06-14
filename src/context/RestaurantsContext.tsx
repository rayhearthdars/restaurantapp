import React, { createContext, useContext, useState } from "react";
import { RestaurantType } from "../models/restaurantType";
import { restaurants } from "../data/data";

type RestaurantContextType = {
	restaurants: RestaurantType[];
	reRender: () => void;
};


export const RestaurantContext = createContext<RestaurantContextType>({} as RestaurantContextType);

export const useRestaurantContext = () => useContext(RestaurantContext);

export const RestaurantContextProvider = ({ children }: { children: React.ReactNode }) => {
	// I don't see the point of this render, the modal is linked to the favorites so it should 
	// only be maintained in the favorites context
	const [render, setRender] = useState(false);
	const reRender = () => {
		if (render) {
			setRender(false);
		} else {
			setRender(true);
		}
	};

	return <RestaurantContext.Provider value={{ reRender, restaurants }}>{children}</RestaurantContext.Provider>;
};
