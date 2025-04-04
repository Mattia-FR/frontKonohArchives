import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./NinjaDetails.css";

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

const villagesOptions = [
	{ id: 1, name: "Konohagakure" },
	{ id: 2, name: "Sunagakure" },
	{ id: 3, name: "Kirigakure" },
	{ id: 4, name: "Kumogakure" },
	{ id: 5, name: "Iwagakure" },
	{ id: 6, name: "Amegakure" },
	{ id: 7, name: "Takigakure" },
	{ id: 8, name: "Otogakure" },
	{ id: 9, name: "Kusagakure" },
	{ id: 10, name: "Hoshigakure" },
];

function NinjaDetail() {
	const loadedNinja = useLoaderData() as Ninja;
	const [ninja, setNinja] = useState(loadedNinja);
	const [isEditing, setIsEditing] = useState(false);
	const navigate = useNavigate();

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		setNinja({
			...ninja,
			[e.target.name]: e.target.value,
		});
	};

	const handleEdit = async () => {
		try {
			await axios.put(`http://localhost:4242/api/ninjas/${ninja.id}`, ninja);
			console.log("Ninja modifié.");
			setIsEditing(false);
		} catch (error) {
			console.error("Erreur lors de la modification :", error);
		}
	};

	const handleDelete = async () => {
		try {
			await axios.delete(`http://localhost:4242/api/ninjas/${ninja.id}`);
			console.log("Ninja supprimé.");
			navigate("/ninjas");
		} catch (error) {
			console.error("Erreur lors de la suppression :", error);
		}
	};

	return (
		<main className="blocDetailNinja">
			{isEditing ? (
				<form onSubmit={(e) => e.preventDefault()}>
					<h2>Modifier le Ninja</h2>
					<label>
						Nom :
						<input
							type="text"
							name="name"
							value={ninja.name}
							onChange={handleChange}
						/>
					</label>
					<label>
						Âge :
						<input
							type="number"
							name="age"
							value={ninja.age}
							onChange={handleChange}
						/>
					</label>
					<label>
						Clan :
						<input
							type="text"
							name="clan"
							value={ninja.clan}
							onChange={handleChange}
						/>
					</label>
					<label>
						Rang :
						<input
							type="text"
							name="rank"
							value={ninja.rank}
							onChange={handleChange}
						/>
					</label>
					<label>
						Description :
						<textarea
							name="description"
							value={ninja.description}
							onChange={handleChange}
						/>
					</label>
					<label>
						Village :
						<select
							name="village_id"
							value={ninja.village_id}
							onChange={handleChange}
						>
							<option value="">Sélectionnez un village</option>
							{villagesOptions.map((village) => (
								<option key={village.id} value={village.id}>
									{village.name}
								</option>
							))}
						</select>
					</label>
					<label>
						Genre :
						<input
							type="text"
							name="gender"
							value={ninja.gender}
							onChange={handleChange}
						/>
					</label>
					<div>
						<button type="button" onClick={handleEdit}>
							Enregistrer
						</button>
						<button type="button" onClick={() => setIsEditing(false)}>
							Annuler
						</button>
					</div>
				</form>
			) : (
				<div>
					<h2>{ninja.name}</h2>
					<p>Âge : {ninja.age}</p>
					<p>Clan : {ninja.clan}</p>
					<p>Rang : {ninja.rank}</p>
					<p>Description : {ninja.description}</p>
					<p>Village : {ninja.village_name}</p>
					<p>Genre : {ninja.gender}</p>
					<div>
						<button type="button" onClick={() => setIsEditing(true)}>
							Modifier
						</button>
						<button type="button" onClick={handleDelete}>
							Supprimer
						</button>
					</div>
				</div>
			)}
		</main>
	);
}

export default NinjaDetail;
