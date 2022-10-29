![Logo](public/logo-og.png?raw=true "Logo")


## Decodage-fiscal

L'objectif principal derrière ce site était la création d'un simulateur fiscal pour freelances, qui soit à la fois simple, précis, et intuitif, afin de les aider dans le choix du statut.

Le calcul de l'impôt et des cotisations provient directement des textes de lois applicables, la fiabilité du simulateur est donc assurée.

### Principaux outils (stack technique)

#### Backend

NodeJS
AWS Lambda

#### Frontend
ReactJS
NextJS
ChartJS
Chakra UI

### Fonctionnalités
Le simulateur se présente comme une page unique au contenu dynamique (le résultat de la simulation et le formulaire évoluent lorsque des champs sont remplis).

#### Formulaire
L'utilisateur accède à un formulaire comportant 3 ou 5 rubriques principales (selon qu'il est marié ou non), avec des sous-rubriques dynamiques en fonction des informations rentrées.

Des infobulles ont été ajoutées pour alléger le formulaire visuellement, tout en apportant les précisions nécessaires.

#### Résultat

##### Chart
Afin de bien comprendre les étapes allant du chiffre d'affaires encaissé jusqu'au revenu net qui revient au freelance à la fin de l'année, la réparitition des différents postes de dépenses et de prélèvements est représentée par un "stacked bar".

##### Synthèse
La partie synthèse du simulateur réalise plusieurs récapitulatifs sous des angles différents:

Tout d'abord, sous un angle financier, la section "Résultat" permet de comprendre l'impact de chaque poste de dépenses et de prélèvement sur le résultat net (les montants sont données en valeur et en pourcentage du chiffre d'affaires, l'indicateur financier pertinent pour les freelances).

Une section "total des prélèvements obligatoires" permet de connaître le coût global du statut juridique (tout impôt et cotisation confondu).

Une dernière section "Situation fiscale", permet d'éclaircir la situation strictement fiscale du ou des membres du foyer (au niveau de l'impôt sur le revenu).

#### Calcule du TJM
Le Taux Journalier Moyen à facturer est calculé, avec possibilité d'juster le nombre de semaines travaillées par année.

#### Partage
Une synchronisation du state dans l'url permet la sauvegarde et le partage de la simulation. Un onglet partage permettant de copier dans le presse-papier et/ou de partager directement la simulation a donc été ajouté.

### Screenshots
![screenshot](screenshots/screen6.png?raw=true "screenshot")
![screenshot](screenshots/screen5.png?raw=true "screenshot")
![screenshot](screenshots/screen4.png?raw=true "screenshot")
![screenshot](screenshots/screen3.png?raw=true "screenshot")
![screenshot](screenshots/screen1.png?raw=true "screenshot")

### Auteur
Léo Terrier