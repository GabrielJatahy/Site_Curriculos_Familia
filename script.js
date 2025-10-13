const toggleBtn = document.getElementById("toggle-dark");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){
    toggleBtn.textContent = "Modo Claro";
  } else {
    toggleBtn.textContent = "Modo Escuro";
  }
});
