export type RestaurantType = {
	id: number;
	name: string;
	description_short: string;
	description_long: string;
	img: string;
	menu: {
		entrees: string[];
		dishes: string[];
		deserts: string[];
	};
};
