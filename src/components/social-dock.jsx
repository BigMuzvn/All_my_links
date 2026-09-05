import { FloatingDock } from "@/components/ui/floating-dock";
import { asset } from "@/utils/asset.js";

function DockIcon({ file, label }) {
  return (
    <img
      src={asset(`assets/icons/${file}`)}
      alt={label}
      className="h-full w-full object-contain"
    />
  );
}

const LINKS = [
  {
    title: "GitHub",
    icon: <DockIcon file="github.png" label="GitHub" />,
    href: "https://github.com/BigMuzvn",
    target: "_blank",
    rel: "noopener",
  },
  {
    title: "CTN Mafia",
    icon: <DockIcon file="ctnmafia.png" label="CTN Mafia" />,
    href: "https://www.instagram.com/ctn.mafia",
    target: "_blank",
    rel: "noopener",
  },
  {
    title: "Email",
    icon: <DockIcon file="email.png" label="Email" />,
    href: "mailto:godsonmailperso@gmail.com",
  },
  {
    title: "Instagram",
    icon: <DockIcon file="insta.png" label="Instagram" />,
    href: "https://www.instagram.com/iam_muzvn",
    target: "_blank",
    rel: "noopener",
  },
  {
    title: "Portfolio",
    // Pas encore de portfolio en ligne : lien mort volontaire pour l'instant.
    icon: <DockIcon file="portfolio.png" label="Portfolio" />,
    href: "#",
  },
];

export function SocialDock() {
  return (
    <div className="fixed inset-x-0 top-14 z-20 flex justify-center md:top-32 [@media(min-width:768px)_and_(max-height:750px)]:top-16">
      <FloatingDock items={LINKS} />
    </div>
  );
}
