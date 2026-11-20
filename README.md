# Digital Care Technologies

Site vitrine officiel de **Digital Care Technologies**, basé à Tiassalé en Côte d’Ivoire. Le site présente les services informatiques de l’entreprise et permet aux visiteurs de préparer une demande directement sur WhatsApp.

## Pages

- `index.html` : accueil
- `apropos.html` : présentation de l’entreprise
- `services.html` : services proposés
- `temoignages.html` : témoignages clients
- `galerie.html` : réalisations
- `contact.html` : coordonnées et formulaire WhatsApp
- `mentions-legales.html` : mentions légales et confidentialité

## Technologies

- HTML5
- CSS3
- JavaScript natif
- Google Fonts
- Images Unsplash
- Liens WhatsApp avec message prérempli

## Contact

- WhatsApp / Téléphone : **+225 07 18 41 40 65**
- E-mail : **digitalcaretechnologie@gmail.com**
- Adresse : **Tiassalé, Côte d’Ivoire**

## Aperçu local

Depuis le dossier du projet, démarrer un serveur local :

```powershell
python -m http.server 5500
```

Puis ouvrir :

```text
http://localhost:5500
```

## Aperçu avec Node.js

Si Node.js est installé :

```powershell
npx serve .
```

## Hébergement

Le site peut être hébergé gratuitement comme site statique sur un service compatible avec HTML, CSS et JavaScript, tel que GitHub Pages, Cloudflare Pages ou Netlify.

## Structure

```text
Digital Care Technologie/
├── index.html
├── apropos.html
├── services.html
├── temoignages.html
├── galerie.html
├── contact.html
├── mentions-legales.html
├── style.css
├── main.js
├── logo.png
└── README.md
```

## Maintenance

- Modifier les coordonnées dans les pages HTML et dans `main.js`.
- Modifier l’apparence dans `style.css`.
- Modifier le menu et le formulaire dans les fichiers HTML concernés.
- Vérifier la syntaxe JavaScript avec :

```powershell
node --check main.js
```
