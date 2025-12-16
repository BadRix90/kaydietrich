import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'
import fs from 'fs'

const loadContent = (filename) => {
  const path = resolve(__dirname, `src/content/${filename}`)
  return JSON.parse(fs.readFileSync(path, 'utf-8'))
}

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/components'),
      context(pagePath) {
        const baseContext = {
          year: new Date().getFullYear(),
          siteName: 'Kay Dietrich',
          siteUrl: 'https://kaydietrich.de'
        }

        if (pagePath.includes('index.html')) {
          return {
            ...baseContext,
            pageTitle: 'Kay Dietrich - Compliance-Software für deutsche KMUs',
            pageDescription: 'Individuelle Compliance-Lösungen: E-Rechnung, NIS2-Beratung, Digitalisierung mit Django & Angular. Persönlich, transparent, ohne Agentur-Overhead.',
            canonicalUrl: 'https://kaydietrich.de',
            hero: loadContent('hero.json'),
            services: loadContent('services.json'),
            projects: loadContent('projects.json'),
            about: loadContent('about.json'),
            trust: loadContent('trust.json'),
            contact: loadContent('contact.json')
          }
        }

        if (pagePath.includes('privacy.html')) {
          return {
            ...baseContext,
            pageTitle: 'Datenschutzerklärung - Kay Dietrich',
            pageDescription: 'Informationen zur Verarbeitung personenbezogener Daten auf kaydietrich.de gemäß DSGVO.',
            canonicalUrl: 'https://kaydietrich.de/privacy',
            privacy: loadContent('privacy.json')
          }
        }

        if (pagePath.includes('imprint.html')) {
          return {
            ...baseContext,
            pageTitle: 'Impressum - Kay Dietrich',
            pageDescription: 'Angaben gemäß § 5 TMG: Kay Dietrich, Fachinformatiker für Anwendungsentwicklung, Kirchgellersen.',
            canonicalUrl: 'https://kaydietrich.de/imprint',
            imprint: loadContent('imprint.json')
          }
        }

        return baseContext
      }
    })
  ],

  server: {
    port: 3000,
    open: true
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: undefined
      },
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        imprint: resolve(__dirname, 'imprint.html')
      }
    }
  }
})