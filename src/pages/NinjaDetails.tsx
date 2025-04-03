import { useLoaderData } from "react-router-dom";

interface Ninja {
	id: number;
	name: string;
	age: number;
	clan: string;
	rank: string;
	description: string;
	village_id: number;
	gender: string;
	village_name: string;
}

function NinjaDetail() {
	const ninja = useLoaderData() as Ninja;

	return (
		<main>
			<h2>{ninja.name}</h2>
			<p>Âge : {ninja.age}</p>
			<p>Clan : {ninja.clan}</p>
			<p>Rang : {ninja.rank}</p>
			<p>Description : {ninja.description}</p>
			<p>Village : {ninja.village_name}</p>
			<p>Genre : {ninja.gender}</p>
		</main>
	);
}

export default NinjaDetail;
