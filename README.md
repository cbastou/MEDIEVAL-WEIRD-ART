# Weird Art Medieval – site statique

Site 100 % statique (HTML + CSS + JavaScript), sans dépendance ni outil de build.
Les 54 images sont déjà dans le dossier `images/` (`<animal>-1.jpg` = document ancien, `-2` = autre image, `-3` = illustration).

## Ouvrir dans Adobe Dreamweaver
1. Dézipper le dossier `site-medieval`.
2. Site → Nouveau site → choisir ce dossier comme dossier local.
3. Ouvrir `index.html` et utiliser **Aperçu en direct** (le mode Création n'affiche pas bien les rotations 3D).

## Publier
- FTP depuis Dreamweaver (Site → Gérer les sites → Serveurs), ou
- Netlify Drop (glisser-déposer le dossier), ou GitHub Pages / Cloudflare Pages.

## Réglages utiles
- Durée du retournement : `--flip-duration` dans `style.css`
- Textes et images des faces 2 et 3 : objet `CARDS` dans `script.js` (la face 1 est dans `index.html`)
- Les polices (Kameron, Fragment Mono, Chela One) viennent de Google Fonts : connexion internet nécessaire.
