import React, { useState, useEffect } from "react";
import "./App.css";

const ItemDetails = ({ match }) => {
	useEffect(() => {
		fetchItems();
	});

	const [item, setItem] = useState({
		images: {}
	});

	const fetchItems = async () => {
		const data = await fetch(
			`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${
				match.params.id
			}`
		);
		const itemDetail = await data.json();
		setItem(itemDetail);
	};

	//fetchItems();

	return (
		<div>
			<h1>{item.name}</h1>
			<h3>{item.description}</h3>
			<img src={item.images.transparent} alt='' />
		</div>
	);
};

export default ItemDetails;
