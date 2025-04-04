import { useState } from "react";
import axios from "axios";
import "./NinjaForm.css";

function NinjaForm() {
	const rankOptions = ["Genin", "Chunin", "Jonin", "Anbu", "Sannin", "Kage"];
	const genderOptions = ["Homme", "Femme", "Autre"];
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

	const [ninja, setNinja] = useState({
		name: "",
		age: "",
		clan: "",
		rank: "",
		description: "",
		village_id: "",
		gender: "",
	});

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

	const handleAdd = async () => {
		try {
			const response = await axios.post(
				"http://localhost:4242/api/ninjas/",
				ninja,
			);
			console.log("Ninja ajouté, ID :", response.data.id);
			setNinja({
				name: "",
				age: "",
				clan: "",
				rank: "",
				description: "",
				village_id: "",
				gender: "",
			});
		} catch (error) {
			console.error("Erreur lors de l'ajout :", error);
		}
	};

	return (
		<form onSubmit={(e) => e.preventDefault()} className="blocForm">
			<h3>Ajouter un Ninja</h3>

			<label>
				Nom :
				<input
					type="text"
					name="name"
					value={ninja.name}
					onChange={handleChange}
					placeholder="Ex : Naruto Uzumaki"
				/>
			</label>

			<label>
				Âge :
				<input
					type="number"
					name="age"
					value={ninja.age}
					onChange={handleChange}
					placeholder="Ex : 17"
				/>
			</label>

			<label>
				Clan :
				<input
					type="text"
					name="clan"
					value={ninja.clan}
					onChange={handleChange}
					placeholder="Ex : Uzumaki"
				/>
			</label>

			<label>
				Rang :
				<select name="rank" value={ninja.rank} onChange={handleChange}>
					<option value="">Sélectionnez un rang</option>
					{rankOptions.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			</label>

			<label>
				Description :
				<textarea
					name="description"
					value={ninja.description}
					onChange={handleChange}
					placeholder="Description du ninja..."
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
				<select name="gender" value={ninja.gender} onChange={handleChange}>
					<option value="">Sélectionnez un genre</option>
					{genderOptions.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			</label>

			<div>
				<button type="button" onClick={handleAdd}>
					Ajouter
				</button>
			</div>
		</form>
	);
}

export default NinjaForm;
