import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RestaurantContextProvider } from "./context/RestaurantsContext";
import { Header } from "./shared/header/Header";
import { Details } from "./pages/details/Details";
import { HomePage } from "./pages/homepage/HomePage";
import { Favorites } from "./pages/favorites/Favorites";
import { FavoritesContextProvider } from "./context/FavoritesContext";
import { Footer } from "./shared/footer/Footer";


function App() {

	return (
		<div className="App">
			<FavoritesContextProvider>
				<RestaurantContextProvider>
					<Router>
						<Header />
						<Routes>
							<Route
								path=""
								element={<HomePage />}
							/>
							<Route
								path="/details/:restaurantId"
								element={<Details />}
							/>
							<Route
								path="/favoris"
								element={<Favorites />}
							/>
						</Routes>
						<Footer/>
					</Router>
				</RestaurantContextProvider>
			</FavoritesContextProvider>
		</div>
	);
}

export default App;
