import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-700 font-semibold">CERTIFICATIONS</p>

        <h2 className="text-4xl font-bold mt-3 mb-12">
          Professional Certifications
        </h2>

        <div
          className="
  flex
  flex-wrap
  justify-center
  gap-8
  mt-12
  "
        >
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="
              bg-white
              rounded-2xl
              p-8
              shadow-sm
              "
            >
              <h3 className="font-bold text-xl">{cert.title}</h3>

              <p className="text-blue-700 mt-2">{cert.issuer}</p>

              <p className="text-slate-500 mt-1">{cert.year}</p>
              <p
                className="
  mt-4
  text-slate-600
  leading-relaxed
  "
              >
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
