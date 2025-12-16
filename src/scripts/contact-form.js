/**
 * Contact Form Module
 * Handles form submission, validation, and API communication
 */

/**
 * Initialize Contact Form Handler
 */
export function initContactForm() {
  const form = document.querySelector("[data-contact-form]")
  const successMessage = document.querySelector("[data-success-message]")

  if (!form) return

  // Form submission handler
  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch("/src/api/contact.php", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.success) {
        // Show success message
        form.classList.add("hidden")
        successMessage.classList.remove("hidden")

        // Reset form after delay
        setTimeout(() => {
          form.reset()
          form.classList.remove("hidden")
          successMessage.classList.add("hidden")
        }, 5000)
      } else {
        throw new Error(result.message || "Unbekannter Fehler")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.")
    }
  })

  // Setup inline email validation
  setupEmailValidation(form)
}

/**
 * Setup inline email validation
 * @param {HTMLFormElement} form - The form element
 */
function setupEmailValidation(form) {
  const emailInput = form.querySelector("#email")
  if (!emailInput) return

  emailInput.addEventListener("blur", () => {
    const isValid = emailInput.validity.valid
    if (!isValid && emailInput.value) {
      emailInput.classList.add("border-red-500")
    } else {
      emailInput.classList.remove("border-red-500")
    }
  })
}