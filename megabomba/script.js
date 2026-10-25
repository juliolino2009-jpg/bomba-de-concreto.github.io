// Interações do site Mega Bombas
// PERSONALIZE ESTES DADOS ANTES DE PUBLICAR O SITE.
// Os números podem ser informados com espaços, parênteses e hífen.
// Exemplo: "(13) 99999-9999" ou "5513999999999".
const COMPANY = {
  name: "Mega Bombas",
  whatsapp: "13 97417-7919",
  phone: "13 97417-7919" // Mesmo número para WhatsApp e ligação.
};
function normalizeBrazilianNumber(value) {
  let digits = String(value || "").replace(/\D/g, "");
  if (digits.length === 10 || digits.length === 11) digits = "55" + digits;
  return /^55\d{10,11}$/.test(digits) ? digits : "";
}
const WHATSAPP_NUMBER = normalizeBrazilianNumber(COMPANY.whatsapp);
const CALL_NUMBER = normalizeBrazilianNumber(COMPANY.phone) || WHATSAPP_NUMBER;
const COMPANY_NAME = COMPANY.name.trim() || "Mega Bombas";
document.title = COMPANY_NAME + " | Bombeamento de Concreto";
document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll(".brand-name").forEach(element => {
  if (element.firstChild) element.firstChild.nodeValue = COMPANY_NAME.toUpperCase();
});
const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 5500);
}
function sendWhatsApp(message) {
  if (!WHATSAPP_NUMBER || !/^\d{12,13}$/.test(WHATSAPP_NUMBER)) {
    showToast("O WhatsApp ainda não foi configurado. Informe o nome e o número da empresa no objeto COMPANY, no início do código.");
    return;
  }
  const whatsappUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.location.assign(whatsappUrl);
}
document.querySelectorAll(".wa-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    sendWhatsApp(link.dataset.message || "Olá! Gostaria de solicitar um orçamento para bombeamento de concreto.");
  });
});
document.querySelectorAll(".call-link").forEach(link => {
  if (CALL_NUMBER && /^\d{10,13}$/.test(CALL_NUMBER)) {
    link.href = "tel:+" + CALL_NUMBER;
  }
  link.addEventListener("click", event => {
    if (!CALL_NUMBER || !/^\d{10,13}$/.test(CALL_NUMBER)) {
      event.preventDefault();
      showToast("A ligação direta ainda não foi configurada. Informe o telefone no objeto COMPANY, no início do código.");
    }
  });
});
function formatBrazilianPhone(value) {
  let digits = String(value || "").replace(/\D/g, "");
  if ((digits.length === 12 || digits.length === 13) && digits.startsWith("55")) {
    digits = digits.slice(2);
  }
  digits = digits.slice(0, 11);
  if (!digits) return "";
  if (digits.length === 1) return "(" + digits;
  if (digits.length === 2) return "(" + digits + ")";
  const ddd = digits.slice(0, 2);
  const subscriber = digits.slice(2);
  const splitAt = subscriber.startsWith("9") ? 5 : 4;
  if (subscriber.length <= splitAt) return "(" + ddd + ") " + subscriber;
  return "(" + ddd + ") " + subscriber.slice(0, splitAt) + "-" + subscriber.slice(splitAt);
}
const customerPhoneInput = document.getElementById("telefone");
customerPhoneInput.addEventListener("input", () => {
  const formatted = formatBrazilianPhone(customerPhoneInput.value);
  if (customerPhoneInput.value !== formatted) customerPhoneInput.value = formatted;
});
document.getElementById("quoteForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const fields = [
    "Olá! Gostaria de solicitar um orçamento para bombeamento de concreto.",
    "", "Nome: " + (data.get("nome") || "Não informado"),
    "Telefone: " + (data.get("telefone") || "Não informado"),
    "Cidade da obra: " + (data.get("cidade") || "Não informada"),
    "Serviço: " + (data.get("tipo") || "Não informado"),
    "Volume estimado: " + (data.get("volume") || "Não informado"),
    "Data prevista: " + (data.get("data") || "Não informada"),
    "Detalhes: " + (data.get("detalhes") || "Não informado")
  ];
  sendWhatsApp(fields.join("\n"));
});
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}));
