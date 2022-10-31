![Logo](public/logo-og.png?raw=true "Logo")

### [https://decodage-fiscal.fr](https://decodage-fiscal.fr)

L'objectif principal derrière ce site était la création d'un simulateur fiscal pour freelances, qui soit à la fois simple, précis, et intuitif, afin de les aider dans le choix du statut.

Le calcul de l'impôt et des cotisations provient directement des textes de lois applicables (les données sont fiables).

### Principaux outils (stack technique)

#### Backend
* NodeJS
* AWS Lambda

#### Frontend
* NextJS (+ [next-useQueryState](https://www.npmjs.com/package/next-usequerystate))
* ReactJS
* ChartJS
* Chakra UI

### Fonctionnalités
Le simulateur se présente comme une page unique au contenu dynamique (le résultat de la simulation et le formulaire évoluent lorsque des champs du formulaire sont remplis).

#### Le formulaire
L'utilisateur accède à un formulaire comportant 3 ou 5 rubriques principales (selon qu'il est marié ou non). Les rubriques comportent des infobulles permettant d'aider au remplissage des informations.

#### Le résultat de la simulation
Le résultat est fourni sous forme de graphique et de tableaux synthétiques.

##### Graphique
Afin de comprendre les étapes allant du chiffre d'affaires encaissé jusqu'au revenu net, la réparitition des différents postes de dépenses et de prélèvements est représentée dans un "stacked bar".

##### Tableaux synthétiques
Plusieurs tableaux synthétiques affichent le résultat de la simulation, avec un angle différent :

Tout d'abord, la section "Résultat" permet de mesurer l'impact financier de chaque poste de dépenses et prélèvement obligatoire.

Ensuite, une section "Total des prélèvements obligatoires" permet de connaître le coût global du statut juridique (tout impôt et cotisation confondus).

Enfin, une section "Situation fiscale", permet d'éclaircir la situation du ou des membres du foyer au niveau de l'impôt sur le revenu.

#### Calcule du TJM
Le Tarif Journalier Moyen à facturer est calculé, avec possibilité d'ajuster le nombre de semaines travaillées par année.

#### Partage
Une synchronisation du state React dans l'url permet de conserver et de partager la simulation. Un onglet partage permettant de copier dans le presse-papier et/ou de partager directement la simulation a donc été ajouté.

### Screenshots
![screenshot](screenshots/screen6.png?raw=true "screenshot")
![screenshot](screenshots/screen5.png?raw=true "screenshot")
![screenshot](screenshots/screen4.png?raw=true "screenshot")
![screenshot](screenshots/screen3.png?raw=true "screenshot")
![screenshot](screenshots/screen1.png?raw=true "screenshot")

### Auteur
Léo Terrier