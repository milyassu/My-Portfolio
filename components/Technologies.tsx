const technologies = [
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "Power BI",
  "PySpark",
  "Git",
];

export default function Technologies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-12">
          Trusted Technologies
        </h2>

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          "
        >
          {technologies.map((tech) => (
            <div
              key={tech}
              className="
              bg-slate-50
              rounded-2xl
              p-6
              text-center
              font-semibold
              "
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
