type Metric = {
  label: string;
  value: string;
};

type Props = {
  metrics: Metric[];
};

export default function ProjectMetrics({
  metrics,
}: Props) {
  return (
    <div
      className="
      grid
      md:grid-cols-4
      gap-6
      mt-16
      "
    >
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="
            bg-white
            rounded-3xl
            border
            border-slate-200
            p-8
            shadow-sm
            hover:shadow-lg
            transition
          "
        >
          <h3
            className="
            text-3xl
            font-bold
            text-blue-700
            "
          >
            {metric.value}
          </h3>

          <p className="mt-2 text-slate-600">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}