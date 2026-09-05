import { asset } from "@/utils/asset.js";

// Petits objets 3D (icônes "lien" du pack 3dicons, CC0) qui lévitent autour
// du contenu. Purement décoratif : jamais cliquable, ignoré des lecteurs
// d'écran, et immobile si l'utilisateur demande moins d'animations.
//
// Deux placements différents, car l'espace libre n'est pas au même endroit :
//  - à partir de 1280px : sur les côtés, où le contenu ne va pas ;
//  - en dessous : dans la bande vide entre le nom et "MES LIENS", collés aux
//    bords gauche/droite (sur mobile il n'y a aucune marge latérale libre).
export function FloatingDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
      {/* --- Mobile uniquement : dans la bande vide entre le nom et "MES LIENS".
          Masqué de 768px à 1279px : là, cette bande tombe à ~57px de haut et
          il n'y a de place ni au milieu ni sur les côtés. --- */}
      <img
        src={asset("assets/decor/link-3d-a.png")}
        alt=""
        className="decor-float absolute left-[1%] top-[42%] w-14 opacity-60 md:hidden"
        style={{ animationDuration: "9s" }}
      />
      <img
        src={asset("assets/decor/link-3d-b.png")}
        alt=""
        className="decor-float absolute right-[2%] top-[45%] w-11 opacity-40 blur-[1px] md:hidden"
        style={{ animationDuration: "13s", animationDelay: "-4s" }}
      />

      {/* --- Desktop large : sur les côtés --- */}
      <img
        src={asset("assets/decor/link-3d-a.png")}
        alt=""
        className="decor-float absolute left-[4%] top-[42%] hidden w-44 opacity-70 xl:block 2xl:w-52"
        style={{ animationDuration: "9s" }}
      />
      <img
        src={asset("assets/decor/link-3d-b.png")}
        alt=""
        className="decor-float absolute right-[6%] top-[26%] hidden w-28 opacity-45 blur-[1px] xl:block 2xl:w-32"
        style={{ animationDuration: "13s", animationDelay: "-4s" }}
      />
    </div>
  );
}
