document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          })
        }
      })
    })
  
    const editButtons = document.querySelectorAll(".edit-button")
    editButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const section = this.closest(".profile-section")
        const sectionName = section.querySelector("h2").textContent.trim()
        alert(`Editar seção: ${sectionName}`)
      })
    })
  
    const editPhotoButton = document.querySelector(".edit-photo")
    if (editPhotoButton) {
      editPhotoButton.addEventListener("click", () => {
        alert("Selecione uma nova foto de perfil")
      })
    }
  
    const logoutButton = document.querySelector(".logout-button")
    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        if (confirm("Tem certeza que deseja sair?")) {
          window.location.href = "index.html"
        }
      })
    }
  
    const toggleSwitches = document.querySelectorAll(".switch input")
    toggleSwitches.forEach((toggle) => {
      toggle.addEventListener("change", function () {
        const preferenceName = this.closest(".preference-item").querySelector(".preference-label").textContent
        const status = this.checked ? "ativado" : "desativado"
        console.log(`${preferenceName} ${status}`)
      })
    })
  
    const favoriteCards = document.querySelectorAll(".favorite-card")
    favoriteCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-10px)"
      })
  
      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)"
      })
    })
  
    const viewAllButton = document.querySelector(".view-all")
    if (viewAllButton) {
      viewAllButton.addEventListener("click", (e) => {
        e.preventDefault()
        alert("Visualizar todos os lugares favoritos")
      })
    }
  
    const historyItems = document.querySelectorAll(".history-item")
    historyItems.forEach((item) => {
      item.addEventListener("click", function () {
        this.classList.toggle("active")
      })
    })
  })