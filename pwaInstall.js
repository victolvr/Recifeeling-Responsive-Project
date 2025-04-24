let deferredPrompt
const installButton = document.createElement("button")
installButton.style.display = "none"
installButton.classList.add("install-button")
installButton.textContent = "Instalar App"

document.body.appendChild(installButton)

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault()

  deferredPrompt = e

  installButton.style.display = "block"

  installButton.addEventListener("click", () => {
    installButton.style.display = "none"

    deferredPrompt.prompt()

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt")
      } else {
        console.log("User dismissed the install prompt")
      }

      deferredPrompt = null
    })
  })
})

window.addEventListener("appinstalled", (evt) => {
  console.log("App was installed")

  installButton.style.display = "none"
})

function addInstallButton() {
  const floatingButton = document.createElement("div")
  floatingButton.classList.add("floating-install-button")
  floatingButton.innerHTML = `
    <button id="pwa-install-button">
      <i class="fas fa-download"></i> Instalar App
    </button>
  `

  document.body.appendChild(floatingButton)

  document.getElementById("pwa-install-button").addEventListener("click", () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt")
        } else {
          console.log("User dismissed the install prompt")
        }

        deferredPrompt = null
      })
    }
  })
}

setTimeout(addInstallButton, 30000)
