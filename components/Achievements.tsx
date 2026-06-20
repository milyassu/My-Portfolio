import { essayAwards, mathAwards } from "@/data/achievements";
const sortedEssayAwards = [...essayAwards].sort(
  (a, b) => Number(b.year) - Number(a.year),
);

const sortedMathAwards = [...mathAwards].sort(
  (a, b) => Number(b.year) - Number(a.year),
);
export default function Achievements() {
  return (
    <section id="achievements" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-700 font-semibold">ACHIEVEMENTS</p>

        <h2 className="text-4xl font-bold mt-3 mb-12">Awards & Achievements</h2>

        <div>
          <h3
            className="
    text-2xl
    font-bold
    mb-8
    "
          >
            Scientific Writing Competitions
          </h3>

          <div className="space-y-6">
            {sortedEssayAwards.map((award) => (
              <div
                key={award.title}
                className="
        border-l-4
        border-blue-700
        pl-6
        "
              >
                <p className="text-slate-500">{award.year}</p>

                <h3 className="text-xl font-bold">{award.title}</h3>

                <p className="text-slate-600">{award.organizer}</p>
              </div>
            ))}
          </div>

          <h3
            className="
    text-2xl
    font-bold
    mt-20
    mb-8
    "
          >
            Mathematics Competitions
          </h3>

          <div className="space-y-6">
            {sortedMathAwards.map((award) => (
              <div
                key={award.title}
                className="
        border-l-4
        border-blue-700
        pl-6
        "
              >
                <p className="text-slate-500">{award.year}</p>

                <h3 className="text-xl font-bold">{award.title}</h3>

                <p className="text-slate-600">{award.organizer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
