import { Link } from "react-router-dom";

function Home() {
	return (
		<main>
			<h1>KonohArchives</h1>
			<h2>Bienvenue dans l'univers des ninjas</h2>
			<p>Explorez les villages, découvrez les ninjas et apprenez des jutsus.</p>
			<p>
				<Link to="/ninjas" className="buttonNinjas">
					Trombinoscope ninja
				</Link>
			</p>
			<p>
				<Link to="/villages" className="buttonVillages">
					Atlas ninja
				</Link>
			</p>
		</main>
	);
}

export default Home;
