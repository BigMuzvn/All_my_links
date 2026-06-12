// ============================================================
// CONFIG — C'EST ICI QUE TU MODIFIES TES INFOS.
// Remplace chaque url: "#" par ta vraie URL :
//   - Email     → "mailto:ton@email.com"
//   - WhatsApp  → "https://wa.me/33XXXXXXXXX" (numéro sans + ni espaces)
//   - Les autres → l'URL complète de ton profil
// Pour ajouter/retirer/réordonner un lien : édite simplement la liste.
// color = fond du badge (couleur officielle de la marque)
// dark: true = icône noire (pour les fonds clairs comme Snapchat)
// ============================================================

const IG_GRADIENT =
  "radial-gradient(circle at 30% 110%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)";

const CONFIG = {
  godson: {
    name: "Godson",
    aka: "Muzvn",
    bio: "マフィアへようこそ",
    photo: "assets/photos/muzvnpic.jpeg",
    links: [
      { label: "Instagram",         url: "#", icon: "assets/icons/instagram.svg", color: IG_GRADIENT, dark: false },
      { label: "Email",             url: "#", icon: "assets/icons/gmail.svg",     color: "#EA4335",   dark: false },
      { label: "Snapchat",          url: "#", icon: "assets/icons/snapchat.svg",  color: "#FFFC00",   dark: true  },
      { label: "WhatsApp",          url: "#", icon: "assets/icons/whatsapp.svg",  color: "#25D366",   dark: false },
      { label: "X",                 url: "#", icon: "assets/icons/x.svg",         color: "#000000",   dark: false },
      { label: "YouTube — Musique", url: "#", icon: "assets/icons/youtube.svg",   color: "#FF0000",   dark: false },
      { label: "TikTok",            url: "#", icon: "assets/icons/tiktok.svg",    color: "#010101",   dark: false },
      { label: "Facebook",          url: "#", icon: "assets/icons/facebook.svg",  color: "#1877F2",   dark: false },
    ],
  },
  ctn: {
    name: "CTN MAFIA",
    sub: "Label · マフィアへようこそ",
    logo: "assets/photos/CTN Mafia logo 2.0N.png",
    links: [
      { label: "Instagram", url: "#", icon: "assets/icons/instagram.svg", color: IG_GRADIENT, dark: false },
      { label: "Email",     url: "#", icon: "assets/icons/gmail.svg",     color: "#EA4335",   dark: false },
      { label: "TikTok",    url: "#", icon: "assets/icons/tiktok.svg",    color: "#010101",   dark: false },
      { label: "YouTube",   url: "#", icon: "assets/icons/youtube.svg",   color: "#FF0000",   dark: false },
      { label: "Facebook",  url: "#", icon: "assets/icons/facebook.svg",  color: "#1877F2",   dark: false },
    ],
  },
};
