import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tokopedia Sentiment Analysis & Review Intelligence",
  description: "End-to-end sentiment analysis pipeline built on 65,543 Tokopedia product reviews using TF-IDF, feature engineering, machine learning evaluation, and Streamlit deployment.",
  openGraph: {
    title: "Tokopedia Sentiment Analysis & Review Intelligence | Mohammad Ilyas Suud",
    description: "End-to-end sentiment analysis pipeline built on 65,543 Tokopedia product reviews using TF-IDF, feature engineering, machine learning evaluation, and Streamlit deployment.",
    type: "article",
    images: [
      {
        url: "/projects/tokopedia-review-intelligence/streamlit-app.png",
        width: 800,
        height: 500,
        alt: "Tokopedia Review Streamlit App Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokopedia Sentiment Analysis & Review Intelligence | Mohammad Ilyas Suud",
    description: "End-to-end sentiment analysis pipeline built on 65,543 Tokopedia product reviews using TF-IDF, feature engineering, machine learning evaluation, and Streamlit deployment.",
    images: ["/projects/tokopedia-review-intelligence/streamlit-app.png"],
  },
};

export default function TokopediaReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
