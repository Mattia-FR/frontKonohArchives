import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
	return (
		<main className="blocHome">
			<h1>KonohArchives</h1>
			<h2>Bienvenue dans l'univers des ninjas</h2>
			<p className="blocText">
				Explorez les villages, découvrez les ninjas et apprenez des jutsus.
			</p>
			<p>
				<Link to="/ninjas" className="buttonNinjas">
					=&gt; Trombinoscope ninja &lt;=
				</Link>
			</p>
			<p>
				<Link to="/villages" className="buttonVillages">
					=&gt; Atlas ninja &lt;=
				</Link>
			</p>
		</main>
	);
}

export default Home;
