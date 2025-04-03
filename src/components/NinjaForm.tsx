import { useState } from "react";
import axios from "axios";

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

	// État initial pour les champs du formulaire
	const [ninja, setNinja] = useState({
		id: "", // ID pour modifier ou supprimer un ninja existant
		name: "",
		age: "",
		clan: "",
		rank: "",
		description: "",
		village_id: "",
		gender: "",
	});

	// Gestionnaire de changement pour tous les champs
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

	// Appel POST pour ajouter un ninja
	const handleAdd = async () => {
		try {
			const response = await axios.post(
				"http://localhost:4242/api/ninjas/",
				ninja,
			);
			console.log("Ninja ajouté, ID :", response.data.id);
			// Optionnel : réinitialiser le formulaire ou mettre à jour la liste
		} catch (error) {
			console.error("Erreur lors de l'ajout :", error);
		}
	};

	// Appel PUT pour modifier un ninja
	const handleEdit = async () => {
		if (!ninja.id) {
			alert("Veuillez saisir l'ID du ninja à modifier.");
			return;
		}
		try {
			await axios.put(`http://localhost:4242/api/ninjas/${ninja.id}`, ninja);
			console.log("Ninja modifié.");
		} catch (error) {
			console.error("Erreur lors de la modification :", error);
		}
	};

	// Appel DELETE pour supprimer un ninja
	const handleDelete = async () => {
		if (!ninja.id) {
			alert("Veuillez saisir l'ID du ninja à supprimer.");
			return;
		}
		try {
			await axios.delete(`http://localhost:4242/api/ninjas/${ninja.id}`);
			console.log("Ninja supprimé.");
			// Optionnel : réinitialiser le formulaire
		} catch (error) {
			console.error("Erreur lors de la suppression :", error);
		}
	};

	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			style={{ maxWidth: 400, margin: "0 auto" }}
		>
			<h2>Gestion des Ninjas</h2>

			<label>
				ID (pour modifier/supprimer) :
				<input
					type="text"
					name="id"
					value={ninja.id}
					onChange={handleChange}
					placeholder="Ex : 3"
				/>
			</label>

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

			<div style={{ marginTop: 20 }}>
				<button type="button" onClick={handleAdd} style={{ marginRight: 10 }}>
					Ajouter
				</button>
				<button type="button" onClick={handleEdit} style={{ marginRight: 10 }}>
					Modifier
				</button>
				<button type="button" onClick={handleDelete}>
					Supprimer
				</button>
			</div>
		</form>
	);
}

export default NinjaForm;
