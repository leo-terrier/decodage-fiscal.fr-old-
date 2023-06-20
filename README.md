# Décodage-fiscal.fr (FR):

![Logo](public/logo-og.png?raw=true 'Logo')

**Objective** (EN): The main objective behind this website was to create a simple and intuitive (but yet, precise) tax simulator for freelancers, to help them find the most suitable entity type for their business.

**Objectif** (FR): L'objectif principal derrière ce site était la création d'un simulateur fiscal pour freelance, qui soit à la fois simple, précis, et intuitif, afin de les aider dans le choix du statut.

Le calcul de l'impôt et des cotisations provient directement des textes de loi applicables (les données sont fiables).

## Principaux outils (stack technique)

**Client** : Next (+ [next-useQueryState](https://www.npmjs.com/package/next-usequerystate)), React, ChartJS, Chakra UI

**Server** : Node, AWS Lambda

## Fonctionnalités

Le simulateur commporte une partie fomulaire et une partie résultat qui sont toutes les deux dynamiques : elles évoluent lorsque des champs du formulaire sont remplis.

### Le formulaire

L'utilisateur accède à un formulaire comportant 3 ou 5 rubriques principales (selon qu'il est marié ou non). Les rubriques comportent des infobulles permettant d'aider au remplissage des informations.

### Le résultat de la simulation

Le résultat est fourni sous forme de graphique et de tableaux synthétiques.

#### Graphique

Afin de comprendre les étapes allant du chiffre d'affaires encaissé jusqu'au revenu net, la réparitition des différents postes de dépenses et de prélèvements est représentée dans un "stacked bar".

#### Tableaux synthétiques

Plusieurs tableaux synthétiques affichent le résultat de la simulation sous un angle différent :

Tout d'abord, la section "Résultat" permet de mesurer l'impact financier de chaque poste de dépenses et de prélèvements obligatoires.

Ensuite, la section "Total des prélèvements obligatoires" permet de connaître le coût global du statut juridique (tout impôt et cotisation confondus).

Enfin, la section "Situation fiscale", permet d'éclaircir la situation du ou des membres du foyer au niveau de l'impôt sur le revenu.

### Calcul du TJM

Le Tarif Journalier Moyen à facturer est calculé, avec possibilité d'ajuster le nombre de semaines travaillées par année.

### Partage

Un onglet partage permettant de copier dans le presse-papier et/ou de partager le lien de la simulation a été ajouté.

<a href="https://decodage-fiscal-netlify.netlify.app//"> Lien du déploiement </a><br/>

## Screenshots

![screenshot](screenshots/screen6.png?raw=true 'screenshot')
![screenshot](screenshots/screen5.png?raw=true 'screenshot')

<div style="margin-top:200px; display: flex; justify-content: space-between">
<img src="https://github.com/leo-terrier/decodage-fiscal.fr/blob/main/screenshots/screen4.png?raw=true" style="width:200px;">
<img src="https://github.com/leo-terrier/decodage-fiscal.fr/blob/main/screenshots/screen3.png?raw=true" style="width:200px;">
<img src="https://github.com/leo-terrier/decodage-fiscal.fr/blob/main/screenshots/screen1.png?raw=true" style="width:200px;">
</div>

## Auteur

Léo Terrier
