# Code-Richtlinien kaydietrich.de

## JavaScript

### Allgemeine Regeln
- **Max. 14 Zeilen pro Funktion**
- JSDoc für alle exports
- Aussagekräftige Funktionsnamen (keine Abkürzungen)
- Early returns statt verschachtelte if-Statements

### Naming Conventions
```javascript
// camelCase für Funktionen & Variablen
function initMobileNav() { }
const userName = 'Kay';

// PascalCase für Klassen
class FormValidator { }

// UPPER_SNAKE_CASE für Konstanten
const API_BASE_URL = 'https://api.example.com';

// kebab-case für Dateinamen
// ✅ mobile-navigation.js
// ❌ MobileNavigation.js
```

### JSDoc Example
```javascript
/**
 * Initialize mobile navigation toggle
 * @returns {void}
 */
function initMobileNav() {
  const btn = document.querySelector('[data-mobile-menu]');
  if (!btn) return;
  
  btn.addEventListener('click', toggleMenu);
}

/**
 * Calculate total price with tax
 * @param {number} price - Base price
 * @param {number} taxRate - Tax rate (e.g. 0.19 for 19%)
 * @returns {number} Total price including tax
 */
function calculateTotal(price, taxRate) {
  return price * (1 + taxRate);
}
```

## HTML

### Semantisches HTML5
```html
<!-- ✅ Gut: Semantische Tags -->
<header>
  <nav aria-label="Hauptnavigation">
    <ul>...</ul>
  </nav>
</header>

<main>
  <section>
    <article>...</article>
  </section>
</main>

<!-- ❌ Schlecht: Nur divs -->
<div class="header">
  <div class="nav">...</div>
</div>
```

### Barrierefreiheit (WCAG 2.1 AA)
```html
<!-- ARIA-Labels für Screenreader -->
<button aria-label="Menü öffnen">
  <svg>...</svg>
</button>

<!-- Alt-Texte für Bilder -->
<img src="dashboard.png" alt="Dashboard-Screenshot mit Compliance-Score">

<!-- Landmark-Regions -->
<nav aria-label="Hauptnavigation">...</nav>
<main>...</main>
<footer>...</footer>
```

## CSS / Tailwind

### Utility-First Approach
```html
<!-- ✅ Gut: Tailwind Utilities -->
<button class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark">
  Jetzt starten
</button>

<!-- ❌ Schlecht: Custom CSS für Einzelfälle -->
<button class="my-custom-button-style-v2">
  Jetzt starten
</button>
```

### Custom Components (wenn nötig)
```css
/* In src/styles/main.css */
@layer components {
  .btn-special {
    @apply px-6 py-3 rounded-lg font-semibold;
    @apply bg-gradient-to-r from-primary to-accent;
    @apply hover:scale-105 transition-transform;
  }
}
```

### Mobile-First Responsive Design
```html
<!-- Mobile zuerst, dann größere Screens -->
<div class="text-base md:text-lg lg:text-xl">
  Responsive Text
</div>

<!-- Reihenfolge: sm: (640px), md: (768px), lg: (1024px), xl: (1280px) -->
```

### WCAG Kontrast-Requirements
```javascript
// Tailwind Config mit WCAG AA Kontrasten
colors: {
  text: '#1a1a1a',        // 16:1 auf Weiß (AAA)
  'text-secondary': '#4d4d4d', // 8.5:1 auf Weiß (AAA)
}
```

## Git Commits

### Conventional Commits
```bash
# Format: <type>: <description>

feat: Add hero section with CTA buttons
fix: Correct mobile navigation toggle
docs: Update README with deployment instructions
style: Format code with Prettier
refactor: Simplify form validation logic
perf: Optimize image loading with lazy-load
```

### Commit-Types
- `feat:` - Neues Feature
- `fix:` - Bugfix
- `docs:` - Dokumentation
- `style:` - Code-Formatierung (keine Funktionsänderung)
- `refactor:` - Code-Umstrukturierung (keine Funktionsänderung)
- `perf:` - Performance-Verbesserung
- `test:` - Tests hinzufügen/ändern
- `chore:` - Build-Tasks, Dependencies

### Commit-Messages
```bash
# ✅ Gut
feat: Add contact form with validation

# ❌ Schlecht
updated stuff
fix
asdf
```

## Performance

### Bilder
```html
<!-- WebP mit Fallback -->
<picture>
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="..." loading="lazy">
</picture>

<!-- Lazy-Loading für below-fold Images -->
<img src="..." loading="lazy" alt="...">
```

### JavaScript Budget
- **Total JS**: < 200KB (compressed)
- **Critical JS**: Inline im HTML
- **Non-critical JS**: Async/Defer Loading

### CSS Budget
- **Total CSS**: < 50KB (compressed)
- **Critical CSS**: Inline im HTML
- Tailwind PurgeCSS entfernt unused styles

## Code-Review Checklist

Vor jedem Commit prüfen:

- [ ] Funktionen haben max. 14 Zeilen
- [ ] JSDoc Kommentare vorhanden
- [ ] ARIA-Labels für interaktive Elemente
- [ ] Alt-Texte für Bilder
- [ ] Mobile-First Responsive Design
- [ ] WCAG Kontraste geprüft
- [ ] `prefers-reduced-motion` berücksichtigt
- [ ] Conventional Commit Message
- [ ] Keine `console.log()` im Production-Code
- [ ] Keine hart-codierten Secrets/Keys

## Nützliche Tools

```bash
# Code-Formatierung prüfen
npm run lint

# Build erstellen & prüfen
npm run build

# Performance testen
npm run preview
# → Dann Lighthouse in Chrome DevTools
```

## Fragen?

Bei Unklarheiten zu den Richtlinien: [Deine Kontakt-Info]
