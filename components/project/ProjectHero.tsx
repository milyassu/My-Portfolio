type ProjectHeroProps = {
  category: string;
  title: string;
  description: string;
};

export default function ProjectHero({
  category,
  title,
  description,
}: ProjectHeroProps) {
  return (
    <section
      className="
      relative
      pt-32
      pb-24
      overflow-hidden
      "
    >
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-blue-50
        via-white
        to-sky-50
        -z-10
        "
      />

      <div className="max-w-5xl">

        <p
          className="
          text-blue-700
          font-semibold
          uppercase
          tracking-wider
          "
        >
          {category}
        </p>

        <h1
          className="
          text-5xl
          lg:text-7xl
          font-bold
          mt-4
          leading-tight
          "
        >
          {title}
        </h1>

        <p
          className="
          mt-8
          text-xl
          text-slate-600
          leading-9
          "
        >
          {description}
        </p>

      </div>
    </section>
  );
}