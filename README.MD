# Principe

- Avoir des entrepreneurs qui créent leur profil
- Ils y indiquent leur compétences et des photos / exemples de réalisations à la manière d'un site vitrine ou d'un portfolio
- Il créent ensuite une offre de service qui détaillerait ce qu'ils proposent précisément
- Cette offre se résumerait sous forme de petite carte avec le titre de l'offre, une photo, le nom de l'entrepreneur et le domaine, ainsi que le prix de base (a partir de), + la note générale de l'entrepreneur.
- Toutes les cartes s'afficheraient sur le profil de l'entrepreneur afin de contenir toutes ses offres

## Pour les utilisateurs du site

- Il y aurait une page de recherche d'entrepreneur où on filtrerait selon certains critères (type d'activité, localisation...)
- On afficherait ensuite des cartes qui mèneraient au profil d'un entrepreneur.
- Pour la section services, idem mais avec d'autres filtres et cela mène a la description de l'offre. Possibilité d'accéder au profil de l'entrepreneur aussi.


## Profil d'entrepreneur

- Nom, photo, type d'activité, -tags?-
- Listing des offres
- Note générale des utilisateurs
- Section commentaire
 (s'inspirer airbnb)

## Profil utilisateur

- Nom, photo
- Favoris
- Badges (nouvel entre, tarif de lancement, réponse rapide,note)
- Disponible ou non

## Page indiv de service
- Description détaillée
- Tarifs plus détaillés que sur la carte

# Ajouts futurs
- Encart suggestion d'amélio
- Envoyer un mail quand c'est implémenté
- Pour les services mettre un tarif a partir de .. et pour les E tarif journalier/horaire
- Changelog accessible
- cherche moyen de faire savoir si un service est pas utilisé depuis un moment


# Conseils chat
Améliorations PRIORITAIRES (sans exploser la complexité)
1️⃣ Trier les services (indispensable)

Ajoute un select de tri, en haut à droite des résultats :

⭐ Meilleures notes

💰 Prix croissant

💰 Prix décroissant

⏱️ Délai le plus court

🆕 Nouveaux services

🎯 Pourquoi c’est clé

L’utilisateur compare naturellement

Très simple côté backend (ORDER BY)

👉 C’est une feature à fort impact / faible coût.

2️⃣ Filtres “service-level” (plus précis que le domaine)

Actuellement :

Domaine d’activité (bien)

Note minimum

Localisation

👉 Tu peux ajouter 1 ou 2 filtres maximum, pas plus.

Exemples pertinents :

💼 Type de service

Forfait

Mission sur mesure

💸 Budget

Slider min / max

⏱️ Délai max (ex: ≤ 7 jours)

⚠️ Ne mets pas tout
Mieux vaut peu de filtres bien pensés que trop de choix.

3️⃣ Badge “Nouvel entrepreneur” / “Lancé récemment” ⭐

Très important par rapport à ton concept initial.

Sur les cartes :

🆕 Nouvel entrepreneur

💡 Tarif de lancement

🧪 Premiers clients

🎯 Pourquoi c’est stratégique :

Différenciation face aux plateformes existantes

Cohérent avec ton ADN “jeunes entrepreneurs”

Crée de l’empathie

➡️ Ça peut être juste un champ calculé (date d’inscription < 3 mois).

4️⃣ CTA clair sur chaque carte

Aujourd’hui, on comprend qu’on peut cliquer, mais tu peux renforcer :

Bouton : “Voir le service”

Ou hover avec “Voir détails”

🎯 Micro-optimisation, mais ça augmente le taux de clic.

5️⃣ Preview légère des infos clés (sans page détail)

Sur la carte OU au hover :

✔️ 2–3 compétences clés

✔️ Ce qui est inclus (ex: “1 révision incluse”)

✔️ Langue / outil principal (ex: Figma, React, etc.)

⚠️ Pas plus de 3 infos → sinon surcharge.

🧠 Améliorations SECONDAIRES (plus tard)

À garder en tête, pas forcément maintenant :

🔹 Favoris / sauvegarde

“Ajouter aux favoris”

Nécessite auth → donc plus tard

🔹 Indicateur de disponibilité

“Disponible cette semaine”

“Réponse < 24h”

🔹 Mise en avant éditoriale

“Sélection ProServices”

“Coup de cœur de la semaine”

❌ Ce que je te conseille de NE PAS ajouter (pour l’instant)

❌ Chat direct depuis la liste

❌ Trop de filtres techniques

❌ Comparateur multi-services

❌ Avis détaillés sur la carte

➡️ Ça alourdit énormément pour peu de valeur immédiate.

🧩 Lien avec ta question précédente (services vs entrepreneurs)

👉 Ta décision est la bonne :

Cette page = entrée par le besoin

Page entrepreneur = entrée par la personne

Les deux sont complémentaires, pas redondantes.

Et ton design de cartes ne fonctionnerait PAS aussi bien si tu ne listais que des entrepreneurs.

✅ En résumé – checklist pour cette page

Si tu veux une version “V1 solide” :

 Tri des services

 1–2 filtres supplémentaires max

 Badge “nouvel entrepreneur”

 CTA explicite sur la carte

 Micro-infos clés (compétences / inclus)

👉 Avec ça, ta page est clairement publishable.