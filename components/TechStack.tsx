const techs = [
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "XGBoost",
  "PySpark",
  "TensorFlow",
  "Git",
  "Streamlit",
  "Looker Studio",
  "Power BI",
];

export default function TechStack() {
  return (
    <section className="py-24">
      <div 
      className="max-w-6xl mx-auto px-6">
        
        <p className="text-blue-700 font-semibold">TECH STACK</p>

        <h2 className="text-4xl font-bold mt-3 mb-10">
          Technologies I Work With
        </h2>

        <div
          className="
          flex
          flex-wrap
          gap-4
          "
        >
          {techs.map((tech) => (
            <div
              key={tech}
              className="
              px-5
              py-3
              rounded-xl
              bg-slate-100
              hover:bg-blue-50
              transition
              font-medium
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
