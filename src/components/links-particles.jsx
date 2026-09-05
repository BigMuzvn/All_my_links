import { InteractiveParticles } from "@/components/ui/interactive-particles";
import { asset } from "@/utils/asset.js";

// "MES LIENS" en particules interactives (repoussées au passage de la souris).
export function LinksParticles() {
  return (
    <div className="aspect-[4.2/1] w-[92vw] max-w-[700px] shrink-0 overflow-hidden">
      <InteractiveParticles
        src={asset("assets/particles-mes-liens.png")}
        background="transparent"
        color="#000000"
        maxDimension={720}
        size={1.6}
        allowUpload={false}
      />
    </div>
  );
}
