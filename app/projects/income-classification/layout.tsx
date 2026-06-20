import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Income Classification Using Machine Learning",
  description: "Predicting whether an individual's annual income exceeds $50K using demographic and socio-economic features with machine learning models.",
  openGraph: {
    title: "Income Classification Using Machine Learning | Mohammad Ilyas Suud",
    description: "Predicting whether an individual's annual income exceeds $50K using demographic and socio-economic features with machine learning models.",
    type: "article",
    images: [
      {
        url: "/images/projects/income/income-distribution.jpg",
        width: 500,
        height: 350,
        alt: "Income Classification Using Machine Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Classification Using Machine Learning | Mohammad Ilyas Suud",
    description: "Predicting whether an individual's annual income exceeds $50K using demographic and socio-economic features with machine learning models.",
    images: ["/images/projects/income/income-distribution.jpg"],
  },
};

export default function IncomeClassificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
