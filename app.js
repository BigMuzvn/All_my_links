// Rendu des liens depuis CONFIG (links.js) + bascule de vues.
// Aucune dépendance. Fonctionne en file:// comme en HTTP.

function createLinkButton(link) {
  const a = document.createElement("a");
  a.className = "btn";
  a.href = link.url;
  // Les vrais liens externes s'ouvrent dans un nouvel onglet ;
  // mailto: et les placeholders "#" restent dans la page.
  if (link.url !== "#" && !link.url.startsWith("mailto:")) {
    a.target = "_blank";
    a.rel = "noopener";
  }

  const badge = document.createElement("span");
  badge.className = "badge" + (link.dark ? " dark" : "");
  badge.style.background = link.color;
  badge.setAttribute("aria-hidden", "true");

  const img = document.createElement("img");
  img.src = link.icon;
  img.alt = "";
  // Spec : icône manquante → fallback première lettre de la plateforme.
  img.addEventListener("error", () => {
    img.remove();
    badge.textContent = link.label.charAt(0);
  });
  badge.appendChild(img);

  const label = document.createElement("span");
  label.className = "label";
  label.textContent = link.label;

  const go = document.createElement("span");
  go.className = "go";
  go.textContent = "→";
  go.setAttribute("aria-hidden", "true");

  a.append(badge, label, go);
  return a;
}

function renderProfile() {
  const g = CONFIG.godson;
  document.getElementById("hero-photo").src = g.photo;
  // Spec : photo manquante → le héro garde son dégradé sombre.
  document.getElementById("hero-photo").addEventListener("error", (e) => e.target.remove());
  document.getElementById("title-godson").innerHTML =
    `${g.name} <span class="aka">aka</span> ${g.aka}`;
  document.querySelector("#view-godson .bio").textContent = g.bio;

  const c = CONFIG.ctn;
  document.getElementById("ctn-logo").src = c.logo;
  document.getElementById("ctn-logo").addEventListener("error", (e) => e.target.remove());
  document.getElementById("title-ctn").textContent = c.name;
  document.querySelector("#view-ctn .ctn-sub").textContent = c.sub;

  const navG = document.getElementById("links-godson");
  g.links.forEach((link) => navG.appendChild(createLinkButton(link)));
  const navC = document.getElementById("links-ctn");
  c.links.forEach((link) => navC.appendChild(createLinkButton(link)));
}

function showView(which) {
  const godson = document.getElementById("view-godson");
  const ctn = document.getElementById("view-ctn");
  godson.classList.toggle("hidden", which !== "godson");
  ctn.classList.toggle("hidden", which !== "ctn");
  window.scrollTo({ top: 0 });
  // Accessibilité (spec) : focus sur le titre de la vue affichée.
  document.getElementById(which === "godson" ? "title-godson" : "title-ctn").focus();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  document.getElementById("open-ctn").addEventListener("click", () => showView("ctn"));
  document.getElementById("back-ctn").addEventListener("click", () => showView("godson"));
});
