import { MorphText } from "@/components/ui/morph-text";

// Remplace le clavier tapant : le nom qui se transforme en boucle.
export function NameMorph() {
  return (
    <MorphText
      words={["Godson", "Lemaye", "Muzvn"]}
      interval={2200}
      subtext="マフィアへようこそ"
      fontSize="clamp(1.6rem, 9vw, 6rem)"
      textClassName="text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
      subtextClassName="text-white/80"
    />
  );
}
