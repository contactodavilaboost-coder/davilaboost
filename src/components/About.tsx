import { Reveal } from "./Reveal";
import { COLORS } from "../lib/brand";

export function About() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: COLORS.tealLight }}
            >
              Sobre mí
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="text-4xl md:text-6xl font-bold text-center tracking-tight leading-tight mb-8"
            style={{ color: COLORS.bone }}
          >
            La proactividad es un don
            <br />
            <span style={{ color: COLORS.boneDim }}>que pocos tenemos.</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p
            className="text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed"
            style={{ color: COLORS.boneDim }}
          >
            Soy desarrollador web apasionado por la eficiencia. Combino diseño
            moderno, código limpio e inteligencia artificial para entregar
            páginas web que normalmente tomarían semanas, en una fracción del
            tiempo. Sin sacrificar calidad, sin complicaciones, y con la
            atención personal que tu proyecto merece.
          </p>
        </Reveal>
      </div>
    </section>
  );
}