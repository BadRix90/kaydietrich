# Kay Dietrich - Compliance-Software Website

Moderne B2B-Website für Compliance-Software-Entwicklung, spezialisiert auf deutsche KMUs.

## Features

- ✅ **Modernes Design** nach 2025/2026 B2B-Standards
- ✅ **WCAG 2.1 AA-konform** - Volle Barrierefreiheit
- ✅ **Responsive Design** - Optimiert für alle Geräte
- ✅ **Performance-optimiert** - Core Web Vitals im grünen Bereich
- ✅ **Scroll-Animationen** mit AOS (Animate On Scroll)
- ✅ **Smart Sticky Header** - Versteckt beim Runterscrollen
- ✅ **Bento-Box Layout** für Service-Präsentation
- ✅ **DSGVO-konform** - Datenschutz eingebaut

## Technologie-Stack

- **Build-Tool**: Vite
- **Styling**: Tailwind CSS mit Custom Design System
- **Animationen**: AOS (Animate On Scroll)
- **Fonts**: Inter (Google Fonts)
- **JavaScript**: Vanilla JS (ES Modules)

## Design-System

### Farben
- **Primary**: `#2563eb` (Corporate Blue) - Vertrauen & Professionalität
- **Accent**: `#f97316` (Orange) - CTAs & Action-Elemente
- **Text**: `#1a1a1a` - Haupttext (16:1 Kontrast)
- **Background**: `#ffffff` / `#f8fafc` - Sauber & professionell

### Typografie
- **Font-Familie**: Inter (400, 500, 600, 700, 800)
- **Hero**: 64px / 4rem
- **H1**: 48px / 3rem
- **Body**: 18px / 1.125rem
- **Line-Height**: 1.5-1.75 für optimale Lesbarkeit

### Layout
- **Container-Breite**: 1200px max
- **Grid-System**: CSS Grid & Flexbox
- **Spacing**: Tailwind-Skala (4, 6, 8, 12, 16, 24px)
- **Touch-Targets**: Minimum 44x44px (WCAG 2.2)

## Installation & Entwicklung

### Voraussetzungen
- Node.js 18+ 
- npm oder yarn

### Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Development-Server starten
npm run dev

# Öffne http://localhost:5173
```

### Production Build

```bash
# Production Build erstellen
npm run build

# Build-Vorschau
npm run preview
```

## Projektstruktur

```
kaydietrich/
├── index.html              # Hauptseite
├── impressum.html          # Impressum
├── datenschutz.html        # Datenschutzerklärung
├── src/
│   ├── js/
│   │   └── main.js         # Hauptlogik (Navigation, Forms, Animationen)
│   └── styles/
│       └── main.css        # Tailwind + Custom Styles
├── public/
│   └── favicon.svg         # Favicon
├── tailwind.config.js      # Tailwind-Konfiguration
├── vite.config.js          # Vite-Konfiguration
└── package.json
```

## Sektionen

### Hero
- Value Proposition mit Gradient-Text
- Dual-CTA-Buttons (Primär + Sekundär)
- Trust Badges (Fachinformatiker IHK, DSGVO, 12 Jahre Erfahrung)
- Dashboard-Visual Placeholder

### Leistungen (Bento-Box)
- E-Rechnung-Setup (XRechnung & ZUGFeRD)
- NIS2-Beratung (Compliance-Roadmap)
- Digitalisierung (Django & Angular)

### Projekte
- 4 Referenz-Projekte mit Technologie-Stack
- Case Studies mit Ergebnissen

### Über mich
- Persönliche Geschichte
- Expertise-Badges
- 12+ Jahre Erfahrung

### Trust / Sicherheit
- DSGVO-Konformität
- End-to-End-Verschlüsselung
- Deutsches Hosting
- Security-Updates
- Granulare Zugriffskontrollen
- Automatische Backups

### Kontakt
- Single-Column-Form mit Inline-Validation
- Felder: Name, E-Mail, Unternehmen, Nachricht
- DSGVO-Checkbox
- Success-Message nach Submit

## Barrierefreiheit

- ✅ Skip-to-Content Link
- ✅ Semantic HTML5
- ✅ ARIA-Labels & Roles
- ✅ Keyboard-Navigation
- ✅ Focus-States mit 3:1 Kontrast
- ✅ Farbkontraste WCAG AA (4.5:1 minimum)
- ✅ Touch-Targets 44x44px
- ✅ Prefers-Reduced-Motion Support

## Performance-Optimierungen

- Lazy-Loading für Bilder
- Optimierte Font-Loading (display=swap)
- Minimierte CSS/JS
- Scroll-Throttling für Animationen
- RequestAnimationFrame für Smooth Scrolling

## Browser-Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Browsers (iOS Safari, Chrome Mobile)

## Deployment

Die Website ist optimiert für Deployment auf:
- Vercel
- Netlify
- GitHub Pages
- Jeden Static-Hosting-Service

```bash
# Build erstellen
npm run build

# dist/ Ordner deployen
```

## Anpassungen

### Farben ändern
Bearbeite `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#2563eb', // Deine Farbe hier
  }
}
```

### Inhalte ändern
- Hero-Text: `index.html` Zeile 70-85
- Services: `index.html` Zeile 140-220
- Projekte: `index.html` Zeile 230-310

### Kontaktdaten
- Impressum: `impressum.html`
- Datenschutz: `datenschutz.html`
- Footer: `index.html` Zeile 600+

## License

© 2025 Kay Dietrich. Alle Rechte vorbehalten.

## Kontakt

Kay Dietrich  
E-Mail: kontakt@kaydietrich.de  
Website: https://kaydietrich.de
