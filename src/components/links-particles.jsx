import { InteractiveParticles } from "@/components/ui/interactive-particles";
import { asset } from "@/utils/asset.js";

// "MES LIENS" en particules interactives (repoussées au passage de la souris).
export function LinksParticles() {
  return (
    <section aria-labelledby="links-heading">
      <h2 id="links-heading" className="sr-only">Mes liens</h2>
      <div className="aspect-[4.2/1] w-[94vw] max-w-[700px] shrink-0 overflow-hidden [@media(min-width:768px)_and_(max-height:750px)]:max-h-[17vh]">
        <InteractiveParticles
          src={asset("assets/particles-mes-liens.png")}
          background="transparent"
          color="#000000"
          maxDimension={720}
          size={1.6}
          allowUpload={false}
        />
      </div>
    </section>
  );
}
