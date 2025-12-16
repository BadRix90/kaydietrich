import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'

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
            pageDescription: 'E-Rechnung-Setup, NIS2-Beratung und Digitalisierungs-Lösungen für deutsche KMUs. Implementierung in 7 Tagen.'
          }
        }

        if (pagePath.includes('privacy.html')) {
          return {
            ...baseContext,
            pageTitle: 'Datenschutzerklärung - Kay Dietrich',
            pageDescription: 'Datenschutzerklärung von Kay Dietrich - Compliance-Software für deutsche KMUs'
          }
        }

        if (pagePath.includes('imprint.html')) {
          return {
            ...baseContext,
            pageTitle: 'Impressum - Kay Dietrich',
            pageDescription: 'Impressum und rechtliche Informationen von Kay Dietrich - Compliance-Software für deutsche KMUs'
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