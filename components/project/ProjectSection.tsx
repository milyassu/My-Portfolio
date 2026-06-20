import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function ProjectSection({
  title,
  children,
}: Props) {
  return (
    <section className="mt-24">
      <h2
        className="
        text-3xl
        font-bold
        mb-6
        "
      >
        {title}
      </h2>

      <div
        className="
        text-slate-600
        leading-8
        "
      >
        {children}
      </div>
    </section>
  );
}