// Saudação dinâmica baseada no horário local.
const hora = new Date().getHours();
const saudacao = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";

const titulo = document.querySelector("h1");

if (titulo) {
  titulo.setAttribute("aria-live", "polite");
  titulo.setAttribute("aria-label", "Saudação do professor");
  titulo.textContent = `${saudacao}, Professor! 👋`;
}
