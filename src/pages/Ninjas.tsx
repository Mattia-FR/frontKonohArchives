import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import NinjaForm from "../components/NinjaForm";

function Ninjas() {
	const resultLoaderNinjas = useLoaderData() as string;
	const [ninjas, setNinjas] = useState(resultLoaderNinjas.data);

	return (
		<main>
			<section className="blocNinjas">
				<h2>Les ninjas</h2>
				<section className="listNinjas">
					{ninjas.map((ninja) => (
						<div key={ninja.id}>
							<Link to={`/ninjas/${ninja.id}`}>
								<p>{ninja.name}</p>
							</Link>
						</div>
					))}
				</section>
			</section>
			<NinjaForm />
		</main>
	);
}

export default Ninjas;
