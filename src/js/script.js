const html = document.documentElement
const switchButton = document.querySelector("#switch button")
const profileImage = document.querySelector("#profile img")
const savedTheme = localStorage.getItem("theme")

if (savedTheme === "dark") {
  html.classList.remove("light")
}

function updateThemeControls() {
  const isLight = html.classList.contains("light")

  profileImage.setAttribute(
    "src",
    isLight ? "./src/Image/avatar-light.png" : "./src/Image/avatar-dark.png"
  )
  switchButton.setAttribute("aria-pressed", String(!isLight))
  switchButton.setAttribute(
    "aria-label",
    isLight ? "Ativar modo escuro" : "Ativar modo claro"
  )
}

function toggleMode() {
  const isLight = html.classList.toggle("light")
  localStorage.setItem("theme", isLight ? "light" : "dark")
  updateThemeControls()
}

switchButton.addEventListener("click", toggleMode)
updateThemeControls()
