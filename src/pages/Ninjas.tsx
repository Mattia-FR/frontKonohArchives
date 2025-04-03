import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Ninjas() {
	const resultLoaderNinjas = useLoaderData() as string;
	const [ninjas, setNinjas] = useState(resultLoaderNinjas.data);

	return (
		<main>
			{ninjas.map((ninja) => (
				<div key={ninja.id}>
					<h2>{ninja.name}</h2>
				</div>
			))}
		</main>
	);
}

export default Ninjas;
