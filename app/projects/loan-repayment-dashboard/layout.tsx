import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Repayment Analytics Dashboard",
  description: "Evaluate loan repayment performance, identify high-risk borrower profiles, and provide strategic recommendations for revolving fund sustainability.",
  openGraph: {
    title: "Loan Repayment Analytics Dashboard | Mohammad Ilyas Suud",
    description: "Evaluate loan repayment performance, identify high-risk borrower profiles, and provide strategic recommendations for revolving fund sustainability.",
    type: "article",
    images: [
      {
        url: "/projects/loan-dashboard/page1.png",
        width: 800,
        height: 500,
        alt: "Loan Repayment Analytics Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Repayment Analytics Dashboard | Mohammad Ilyas Suud",
    description: "Evaluate loan repayment performance, identify high-risk borrower profiles, and provide strategic recommendations for revolving fund sustainability.",
    images: ["/projects/loan-dashboard/page1.png"],
  },
};

export default function LoanRepaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
