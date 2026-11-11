# Tableau blanc

Tableau blanc et annotation de PDF, 100 % local, pensé pour un grand écran tactile avec stylet.
Installable comme application (PWA) : Edge/Chrome → menu → « Applications » → « Installer ce site en tant qu'application ».

- Aucun serveur : tes PDF, images et dessins restent sur l'ordinateur. Le site ne fait que livrer le code.
- Fonctionne hors ligne après la première visite.
- Une fois installée, l'application apparaît dans « Ouvrir avec » pour les fichiers PDF et les images.
- PDF.js (Mozilla, licence Apache-2.0) est intégré dans `index.html` : un seul fichier contient toute l'application.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | L'application complète |
| `manifest.webmanifest` | Déclaration PWA (nom, icônes, ouverture de fichiers) |
| `sw.js` | Cache hors ligne (changer `VERSION` à chaque mise à jour d'`index.html`) |
| `icon.svg`, `icon-192.png`, `icon-512.png` | Icônes |

Le fichier `index.html` peut aussi s'ouvrir seul, directement depuis le disque (double-clic).
