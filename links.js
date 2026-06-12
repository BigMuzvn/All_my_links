// ============================================================
// CONFIG — C'EST ICI QUE TU MODIFIES TES INFOS.
// Remplace chaque url: "#" par ta vraie URL :
//   - Email     → "mailto:ton@email.com"
//   - WhatsApp  → "https://wa.me/33XXXXXXXXX" (numéro sans + ni espaces)
//   - Les autres → l'URL complète de ton profil
// Pour ajouter/retirer/réordonner un lien : édite simplement la liste.
// color = fond du badge (couleur officielle de la marque)
// label = texte affiché sur le bouton
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
      { label: "Instagram",         url: "https://www.instagram.com/iam_muzvn", icon: "assets/icons/instagram.svg", color: IG_GRADIENT, dark: false },
      { label: "Email",             url: "mailto:lemayeprivate@gmail.com", icon: "assets/icons/gmail.svg",     color: "#EA4335",   dark: false },
      { label: "Snapchat",          url: "https://snapchat.com/t/3DsfG0nL", icon: "assets/icons/snapchat.svg",  color: "#FFFC00",   dark: true  },
      { label: "WhatsApp",          url: "https://wa.me/2290155377463", icon: "assets/icons/whatsapp.svg",  color: "#25D366",   dark: false },
      { label: "X",                 url: "https://x.com/iammuzvn", icon: "assets/icons/x.svg",         color: "#000000",   dark: false },
      { label: "YouTube — Musique", url: "https://youtube.com/@my2boug", icon: "assets/icons/youtube.svg",   color: "#FF0000",   dark: false },
      { label: "TikTok",            url: "https://www.tiktok.com/@muzvn_off", icon: "assets/icons/tiktok.svg",    color: "#010101",   dark: false },
      { label: "Facebook",          url: "https://www.facebook.com/share/1b3NYxn1qv/", icon: "assets/icons/facebook.svg",  color: "#1877F2",   dark: false },
    ],
  },
  ctn: {
    name: "CTN MAFIA",
    sub: "Label · マフィアへようこそ",
    logo: "assets/photos/ctn-mafia-logo.png",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/ctn.mafia", icon: "assets/icons/instagram.svg", color: IG_GRADIENT, dark: false },
      { label: "Email",     url: "mailto:myofficielbooking@gmail.com", icon: "assets/icons/gmail.svg",     color: "#EA4335",   dark: false },
      { label: "TikTok",    url: "https://www.tiktok.com/@m.y2boug", icon: "assets/icons/tiktok.svg",    color: "#010101",   dark: false },
      { label: "YouTube",   url: "https://youtube.com/@my2boug", icon: "assets/icons/youtube.svg",   color: "#FF0000",   dark: false },
      { label: "Facebook",  url: "https://www.facebook.com/share/18wzjNc52n/", icon: "assets/icons/facebook.svg",  color: "#1877F2",   dark: false },
    ],
  },
};
