import FadeIn from "./animations/FadeIn";
export default function Education() {
  return (
    <FadeIn>
      <section id="education" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-700 font-semibold">EDUCATION</p>

          <h2 className="text-4xl font-bold mt-3 mb-12">Academic Background</h2>

          <div
            className="
          bg-white
          rounded-3xl
          p-8
          shadow-sm
          border
          "
          >
            <div className="flex justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold">
                  Universitas Negeri Jakarta
                </h3>

                <p className="text-slate-600 mt-2">Bachelor of Mathematics</p>
              </div>

              <div className="text-right">
                <p className="font-semibold">2023 – Present</p>

                <p className="text-blue-700">GPA 3.60 / 4.00</p>
              </div>
            </div>

            <div className="mt-8 space-y-3 text-slate-700">
              <p>
                • Strong foundation in Statistics, Probability, Mathematical
                Modeling, Optimization, and Data Analysis.
              </p>

              <p>
                • Active participant in scientific research, national
                mathematics competitions, and scientific writing competitions.
              </p>

              <p>
                • Applied mathematical concepts in machine learning,
                forecasting, graph theory, and business analytics projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
