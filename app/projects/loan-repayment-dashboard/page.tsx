import ProjectHero from "@/components/project/ProjectHero";
import ProjectImage from "@/components/project/ProjectImage";
import ProjectMetrics from "@/components/project/ProjectMetrics";
import ProjectSection from "@/components/project/ProjectSection";

export default function LoanRepaymentDashboardPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <ProjectHero
        category="Business Analytics"
        title="Loan Repayment Analytics Dashboard"
        description="Business analytics project to evaluate loan repayment performance, identify high-risk borrower profiles, and provide strategic recommendations for improving the sustainability of a revolving fund program."
      />

      <ProjectMetrics
        metrics={[
          {
            label: "Borrowers",
            value: "89",
          },
          {
            label: "Portfolio",
            value: "Rp98.5M",
          },
          {
            label: "Repayment",
            value: "76.25%",
          },
          {
            label: "Outstanding",
            value: "Rp23.4M",
          },
        ]}
      />

      <ProjectSection title="Business Problem">
        <p>
          The organization needed a data-driven approach to improve the
          sustainability of its revolving fund program. Manual borrower
          assessment created challenges in identifying repayment risks,
          monitoring outstanding balances, and allocating funds effectively.
        </p>
      </ProjectSection>

      <ProjectSection title="Project Overview">
        <p>
          This project combines business analysis, exploratory data analysis,
          and dashboard development to evaluate borrower repayment behavior. The
          objective was to identify factors influencing repayment performance
          and provide actionable recommendations for future lending decisions.
        </p>
      </ProjectSection>

      <ProjectSection title="Dashboard KPI">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Total Disbursed</h3>
            <p className="text-3xl font-bold text-blue-600">Rp98.5M</p>
            <p className="text-sm text-slate-500 mt-2">
              Total funds distributed across all programs.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Total Repayment</h3>
            <p className="text-3xl font-bold text-green-600">Rp75.1M</p>
            <p className="text-sm text-slate-500 mt-2">
              Total repayments successfully collected.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Outstanding Balance</h3>
            <p className="text-3xl font-bold text-red-500">Rp23.4M</p>
            <p className="text-sm text-slate-500 mt-2">
              Remaining unpaid balance from borrowers.
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Data Preparation">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Data Cleaning</h3>

            <p>
              Standardized borrower information, corrected inconsistent text
              entries, and handled missing values to ensure data quality.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Feature Engineering</h3>

            <p>
              Created repayment rate indicators, borrower status categories, age
              groups, and loan segmentation variables for analysis.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Business Categorization</h3>

            <p>
              Grouped borrowers by profession, location, program, loan purpose,
              and repayment status to support decision-making.
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="EDA Findings">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold mb-3">Age Segment Analysis</h3>

            <p>
              Borrowers aged 67–80 years showed the highest repayment
              performance, while younger groups tended to have lower repayment
              consistency.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold mb-3">Loan Amount Analysis</h3>

            <p>
              Smaller loans demonstrated significantly higher repayment rates
              compared to larger loans.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold mb-3">Occupation Analysis</h3>

            <p>
              Tailors, entrepreneurs, and housewives achieved stronger repayment
              performance than several other occupations.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold mb-3">Loan Purpose Analysis</h3>

            <p>
              General trading and production-related loans showed stronger
              repayment behavior compared with agricultural and
              equipment-related purposes.
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Dashboard Showcase">
        <div className="space-y-16">
          <ProjectImage
            src="/projects/loan-dashboard/page1.png"
            alt="Loan Dashboard Overview"
          />

          <div>
            <h3 className="text-xl font-semibold mb-3">Dashboard Overview</h3>

            <p>
              The first dashboard page provides a high-level summary of loan
              portfolio performance, repayment status, borrower segmentation,
              and key financial indicators.
            </p>
          </div>
        </div>
      </ProjectSection>
      <ProjectSection title="Key Business Insights">
        <ul className="space-y-4 list-disc pl-5">
          <li>
            Borrowers in older age segments generally demonstrated higher
            repayment consistency.
          </li>

          <li>
            Smaller loans showed stronger repayment performance than larger loan
            amounts.
          </li>

          <li>
            Several occupation groups consistently achieved above-average
            repayment rates.
          </li>

          <li>
            Portfolio risk was concentrated within specific loan purposes and
            borrower segments.
          </li>

          <li>
            Dashboard monitoring enables faster decision-making and loan risk
            management.
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Borrower Analysis Dashboard">
        <ProjectImage
          src="/projects/loan-dashboard/page2.png"
          alt="Borrower Analysis"
        />

        <p className="mt-6">
          This dashboard focuses on borrower demographics, age segmentation,
          occupation categories, and repayment performance across different
          customer groups.
        </p>
      </ProjectSection>
      <ProjectSection title="Loan Performance Dashboard">
        <ProjectImage
          src="/projects/loan-dashboard/page3.png"
          alt="Loan Performance Analysis"
        />

        <p className="mt-6">
          This dashboard highlights repayment behavior, outstanding balances,
          loan utilization, and performance trends across multiple loan
          purposes.
        </p>
      </ProjectSection>
    </main>
  );
}
