import rawProfessions from "@/data/profession.json";

export const positionTypes = [
	"employé",
	"cadre",
	"dirigeant",
	"responsable",
	"ouvrier",
];

export const sectors = ["privé", "public"];


let baseProfessions: string[] = [];
Object.values(rawProfessions).forEach((sector) => {
	Object.values(sector).forEach((type) => {
		baseProfessions = baseProfessions.concat(type);
	});
});
export const professions = baseProfessions;
