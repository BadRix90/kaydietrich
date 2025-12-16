# Kay Dietrich - Marketing Website

Marketing-Website für Compliance-Software-Entwicklung.

## Tech-Stack

- **Vite** - Build-Tool & Dev-Server
- **Tailwind CSS** - Utility-First CSS Framework
- **Vanilla JavaScript** - Keine Frameworks, maximale Performance
- **AOS** - Animate On Scroll Library

## Setup

### 1. Dependencies installieren

```bash
npm install
```

### 2. Development Server starten

```bash
npm run dev
```

Die Website läuft auf: http://localhost:3000

### 3. Production Build erstellen

```bash
npm run build
```

Build-Output landet in `/dist` Ordner.

### 4. Production Build testen

```bash
npm run preview
```

## Projektstruktur

```
kaydietrich/
├── index.html              # Entry Point
├── src/
│   ├── styles/
│   │   └── main.css        # Tailwind + Custom Styles
│   └── js/
│       └── main.js         # JavaScript Initialisierung
├── public/                 # Statische Assets (Bilder, etc.)
├── dist/                   # Production Build (git-ignored)
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Code-Richtlinien

### JavaScript
- Max. 14 Zeilen pro Funktion
- JSDoc für alle exports
- camelCase für Funktionen/Variablen
- kebab-case für Dateinamen

### CSS/Tailwind
- Utility-First mit Tailwind
- Custom Components in `/src/styles/main.css`
- Mobile-First Approach
- WCAG 2.1 AA Kontraste

### Commits
- Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`

## Farben (Brand Colors)

```js
primary: '#2563eb'    // Corporate Blue
accent: '#f97316'     // Orange (CTAs)
text: '#1a1a1a'       // Haupttext
text-secondary: '#4d4d4d'
background: '#ffffff'
background-light: '#f8fafc'
```

## Deployment

### Netlify (empfohlen)

1. Repository mit GitHub verbinden
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. Deploy!

### Hetzner / FTP

1. Build erstellen: `npm run build`
2. Alle Dateien aus `/dist` hochladen
3. Fertig!

## Performance-Ziele

- ✅ LCP < 2.5s
- ✅ INP < 200ms
- ✅ CLS < 0.1
- ✅ Total JS < 200KB
- ✅ WCAG 2.1 AA konform

## Support

Bei Fragen: [Deine E-Mail]
