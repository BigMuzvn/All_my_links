import CloudShaderDemo from "./components/cloud-shader-demo.jsx";
import { SocialDock } from "./components/social-dock.jsx";
import { NameMorph } from "./components/name-morph.jsx";
import { LinksParticles } from "./components/links-particles.jsx";
import { LinksGrid } from "./components/links-grid.jsx";
import { FloatingDecor } from "./components/floating-decor.jsx";
// import { ProjectsGrid } from "./components/projects-grid.jsx"; // Partie 3 : en pause, pas encore affichée.

// Retour à une page plein écran sans défilement (décision de Godson) :
// tant que la Partie 3 (Projets) n'est pas affichée, pas besoin de scroll.
export default function App() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0">
        <CloudShaderDemo />
      </div>

      <FloatingDecor />

      <SocialDock />

      <main className="relative z-10 flex h-full w-full flex-col items-center overflow-hidden px-4 pb-6 pt-28 md:pt-48 [@media(min-width:768px)_and_(max-height:750px)]:pt-32">
        {/* Marges auto : le nom se centre dans l'espace libre du haut, et le
            couple particules + liens reste ancré en bas, collé l'un à l'autre. */}
        <div className="mt-auto mb-auto">
          <NameMorph />
        </div>
        <div className="mt-auto mb-2">
          <LinksParticles />
        </div>
        <div className="flex shrink-0 items-center py-2">
          <LinksGrid />
        </div>
      </main>

      {/* Partie 3 : grille "Projets" (staggered grid) — prête mais désactivée pour l'instant.
      <section className="dark relative z-10 bg-neutral-950">
        <ProjectsGrid />
      </section>
      */}
    </div>
  );
}
