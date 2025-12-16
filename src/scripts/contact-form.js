/**
 * Contact Form Module
 * Handles form submission, validation, and API communication
 */

import { showToast } from './toast.js'

/**
 * Initialize Contact Form Handler
 */
export function initContactForm() {
  const form = document.querySelector("[data-contact-form]")
  const successMessage = document.querySelector("[data-success-message]")

  if (!form) return

  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const honeypot = document.getElementById('phone_confirm')?.value || ''

    try {
      const response = await fetch("/src/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company') || '',
          message: formData.get('message'),
          phone_confirm: honeypot
        }),
      })

      const result = await response.json()

      if (result.success) {
        form.classList.add("hidden")
        successMessage.classList.remove("hidden")
        showToast('Nachricht erfolgreich gesendet! Ich melde mich schnellstmöglich.', 'success')

        setTimeout(() => {
          form.reset()
          form.classList.remove("hidden")
          successMessage.classList.add("hidden")
        }, 5000)
      } else {
        showToast(result.message || 'Fehler beim Senden der Nachricht.', 'error')
      }
    } catch (error) {
      console.error("[Contact Form] Error:", error)
      showToast('Netzwerkfehler. Bitte E-Mail direkt an kontakt@kaydietrich.de senden.', 'error', 7000)
    }
  })

  setupEmailValidation(form)
}

/**
 * Setup inline email validation
 * @param {HTMLFormElement} form
 */
function setupEmailValidation(form) {
  const emailInput = form.querySelector("#email")
  if (!emailInput) return

  emailInput.addEventListener("blur", () => {
    const isValid = emailInput.validity.valid
    if (!isValid && emailInput.value) {
      emailInput.classList.add("border-red-500")
      emailInput.setAttribute("aria-invalid", "true")
    } else {
      emailInput.classList.remove("border-red-500")
      emailInput.setAttribute("aria-invalid", "false")
    }
  })
}