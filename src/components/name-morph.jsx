import { MorphText } from "@/components/ui/morph-text";

// Remplace le clavier tapant : le nom qui se transforme en boucle.
// La taille passe par une variable CSS pour pouvoir être plus grande sur
// mobile uniquement (demande de Godson) sans toucher au rendu desktop.
export function NameMorph() {
  return (
    <MorphText
      words={["Godson", "Lemaye", "Muzvn"]}
      interval={2200}
      subtext="マフィアへようこそ"
      fontSize="var(--name-size)"
      className="[--name-size:clamp(2.1rem,11vw,6rem)] md:[--name-size:clamp(1.6rem,9vw,6rem)] [@media(min-width:768px)_and_(max-height:750px)]:[--name-size:clamp(1.6rem,6vw,4rem)]"
      textClassName="text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
      subtextClassName="text-white/80"
    />
  );
}
