donnes de base:
	-	situation familiale
		-	situation maritale
		-	nombre d'enfants a charge (moins de 27 ans)
	-	Situation professionnelle:
		-	Position:
			-	type de position : cadres, dirigeants, responsables, Ouvrier => "Manager" | "Executive" | "Employee" | "Worker"
			-	profession
			-	secteur: public, prive
			-	Anciente
		-	Salaire:
			-	salaire de base
			-	les avantages en nature
			-	primes et indemnites:
				-	Liste des primes
					-	chaque prime avec sa valeur et les informations necessaires pour le calcul de la partie exoneree ou imposable
				-	Liste des indemnites
	-	Cotisations sociales:
		-	CIMR
			-	taux de la cotisation complementaire
	-	Interets sur credit logement:
		-	montant des interets payes annuellement





inputs:
	-	salaire de base
	-	situation familiale
		-	marie on non
		-	nombre d'enfants a charge (moins de 27 ans)
	-	Anciente
	-	Les avantages en nature
	-	Liste dee primes et indemnites
	-	Intérêts sur crédit logement
	-	Retraite complementaire


etapes:
	-	determiner le salaire brut
	-	deduire les elements exonerees (indemnites...)
	-	appliquer les cotisations sociales obligatoires (CNSS, AMO)
	-	appliquer l'abbatement forfaitaire de 20% pour frais professionnels
	-	determiner le salaire net imposable
	-	appliquer IR
	-	appliquer les reductions pour personnes en charge


promt:
tres bien. maintenant pour faire les calculs on a besoin de:
	-	salaire de base
	-	situation familiale
		-	marie on non
		-	nombre d'enfants a charge (moins de 27 ans)
	-	Anciente
	-	Les avantages en nature
	-	Liste dee primes et indemnites
	-	Intérêts sur crédit logement
	-	Retraite complementaire

est-que tu peux m'aider a me donner une structure simple pour construire l'application, sachant qu'elle doit avoir deux simulateurs, un pour une simulation simplifie qui prenne le montant des indemnites total, l'autre ait la liste complete des indemnites, chacune avec sa propre valeur.



Bulletin de paie:
	-	Salaire de base
	-	Avantages en nature
	-	Primes et indemnites
		-	Liste des primes avec valeur et partie imposable/exoneree
		-	Liste des indemnites avec valeur et partie imposable/exoneree
	-	Salaire brut
	-	Elements exonerees
		-	Primes exonerees
		-	Indemnites exonerees
	-	Revenu brut imposable
	-	Cotisations sociales
		-	CNSS
		-	AMO
		-	CIMR
		-	Retraite complementaire
	-	Abattement forfaitaire pour frais professionnels (20%)
	-	Interets sur credit logement
	-	Salaire net imposable
	-	Impot sur le revenu
	-	Salaire net a payer