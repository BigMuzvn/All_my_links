import { StaggeredGrid } from "@/components/ui/staggered-grid";
import { asset } from "@/utils/asset.js";

const BENTO_ITEMS = [
  {
    id: "instagram",
    title: "Instagram",
    icon: <img src={asset("assets/icons/instagram.svg")} alt="" className="h-5 w-5" />,
    image: asset("assets/photos/muzvnpic.jpeg"),
  },
  {
    id: "ctn-mafia",
    title: "CTN Mafia",
    icon: <img src={asset("assets/icons/youtube.svg")} alt="" className="h-5 w-5" />,
    image: asset("assets/photos/ctn-mafia-logo.png"),
  },
  {
    id: "tiktok",
    title: "TikTok",
    icon: <img src={asset("assets/icons/tiktok.svg")} alt="" className="h-5 w-5" />,
  },
];

// 21 cases pour remplir la grille (le composant ne se sert que de la
// longueur du tableau, le contenu réel des icônes vient de GRID_ICONS).
const FILLER = Array.from({ length: 21 }, (_, i) => `slot-${i}`);

export function ProjectsGrid() {
  return (
    <StaggeredGrid
      centerText="PROJETS"
      images={FILLER}
      bentoItems={BENTO_ITEMS}
      showFooter={false}
    />
  );
}
