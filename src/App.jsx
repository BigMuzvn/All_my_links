import CloudShaderDemo from "./components/cloud-shader-demo.jsx";
import { SocialDock } from "./components/social-dock.jsx";
import { NameMorph } from "./components/name-morph.jsx";
import { LinksParticles } from "./components/links-particles.jsx";
import { LinksGrid } from "./components/links-grid.jsx";
import { FloatingDecor } from "./components/floating-decor.jsx";
// import { ProjectsGrid } from "./components/projects-grid.jsx"; // Partie 3 : en pause, pas encore affichée.

// Composition plein écran. Sur mobile, un scroll de secours reste disponible
// pour les écrans courts et le mode paysage afin de ne jamais couper les liens.
export default function App() {
  return (
    <div className="relative h-dvh min-h-svh w-full overflow-x-hidden overflow-y-auto overscroll-none md:h-screen md:overflow-hidden">
      <div className="fixed inset-0">
        <CloudShaderDemo />
      </div>

      <FloatingDecor />

      <SocialDock />

      <main className="relative z-10 flex min-h-full w-full flex-col items-center px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-28 sm:px-4 md:h-full md:overflow-hidden md:px-4 md:pb-6 md:pt-48 [@media(min-width:768px)_and_(max-height:750px)]:pt-32">
        {/* Marges auto : le nom se centre dans l'espace libre du haut, et le
            couple particules + liens reste ancré en bas, collé l'un à l'autre. */}
        <div className="mt-auto mb-auto">
          <NameMorph />
        </div>
        <div className="mt-auto mb-1 md:mb-2">
          <LinksParticles />
        </div>
        <div className="flex shrink-0 items-center py-1.5 md:py-2">
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
