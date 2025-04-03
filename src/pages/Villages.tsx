import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Villages() {
	const resultLoaderVillages = useLoaderData() as string;
	const [villages, setVillages] = useState(resultLoaderVillages.data);

	return (
		<main>
			{villages.map((village) => (
				<div key={village.id}>
					<h2>{village.name}</h2>
				</div>
			))}
		</main>
	);
}

export default Villages;
