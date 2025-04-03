import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

function Ninjas() {
	const resultLoaderNinjas = useLoaderData() as string;
	const [ninjas, setNinjas] = useState(resultLoaderNinjas.data);

	return (
		<main>
			{ninjas.map((ninja) => (
				<div key={ninja.id}>
					<Link to={`/ninjas/${ninja.id}`}>
						<h2>{ninja.name}</h2>
					</Link>
				</div>
			))}
		</main>
	);
}

export default Ninjas;
