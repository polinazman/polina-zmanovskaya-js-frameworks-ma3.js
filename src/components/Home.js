import React from "react";
import Heading from "./Heading";
import HomeContent from "./HomeContent";

export function Home() {
	return (
		<>
			<Heading content="Lorem ipsum"/>
			<HomeContent children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus orci sapien, non placerat metus blandit vitae. Quisque imperdiet sapien sed sem semper commodo. Phasellus faucibus venenatis tincidunt."/>
		</>
	);
}

export default Home;