// import ProjectHero from "@/components/project/ProjectHero";
import ProjectMetrics from "@/components/project/ProjectMetrics";
import ProjectSection from "@/components/project/ProjectSection";
import ProjectImage from "@/components/project/ProjectImage";
import ProjectTable from "@/components/project/ProjectTable";

import ProjectHero from "@/components/project/ProjectHero";

export default function IncomeClassificationPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 pb-24">
      <ProjectHero
        category="Machine Learning"
        title="Income Classification Using Machine Learning"
        description="
  Predicting whether an individual's annual income exceeds $50K using demographic and socio-economic features.
  "
      />
      <ProjectMetrics
        metrics={[
          {
            label: "Records",
            value: "32,561",
          },
          {
            label: "Features",
            value: "15",
          },
          {
            label: "ROC-AUC",
            value: "91%",
          },
          {
            label: "Accuracy",
            value: "83%",
          },
        ]}
      />

      <ProjectSection title="Executive Summary">
        <p>
          This project aims to classify whether an individual's annual income
          exceeds $50,000 using demographic and socio-economic attributes.
        </p>

        <p className="mt-4">
          Several machine learning algorithms were evaluated, including Logistic
          Regression, K-Nearest Neighbor, Random Forest, XGBoost, Decision Tree,
          and Gradient Boosting.
        </p>

        <p className="mt-4">
          The final Gradient Boosting model achieved a ROC-AUC score above 0.90
          and demonstrated strong predictive performance for income segmentation
          tasks.
        </p>
      </ProjectSection>

      <ProjectSection title="Business Problem">
        <p>
          Income prediction plays an important role in customer segmentation,
          financial planning, credit assessment, and marketing strategy.
        </p>

        <p className="mt-4">
          Organizations need scalable approaches to identify income groups
          accurately without relying on manual processes.
        </p>
      </ProjectSection>

      <ProjectSection title="Dataset Overview">
        <p>Dataset Source: Kaggle Census Income Analysis and Modeling</p>

        <p className="mt-4">
          Target Variable: Income Category (&gt;50K or &lt;=50K)
        </p>
      </ProjectSection>

      <ProjectSection title="Project Workflow">
        <div
          className="
  grid
  md:grid-cols-5
  gap-4
  mt-8
  "
        >
          {[
            "Data Collection",
            "EDA",
            "Preprocessing",
            "Modeling",
            "Evaluation",
          ].map((step) => (
            <div
              key={step}
              className="
      bg-blue-50
      rounded-2xl
      p-5
      text-center
      font-semibold
      "
            >
              {step}
            </div>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Feature Description">
        <ProjectTable
          headers={["Feature", "Description"]}
          rows={[
            ["Age", "Age of individual"],
            ["Workclass", "Employment type"],
            ["Education", "Highest education level"],
            ["Occupation", "Occupation category"],
            ["Hours Per Week", "Working hours"],
            ["Capital Gain", "Investment gain"],
            ["Capital Loss", "Investment loss"],
          ]}
        />
      </ProjectSection>
      <ProjectSection title="Target Distribution">
        <ProjectImage
          src="/images/projects/income/income-distribution.png"
          alt="Income Distribution"
        />

        <p>
          The dataset is imbalanced, with approximately 75.9% of individuals
          belonging to the low-income class and 24.1% belonging to the
          high-income class.
        </p>
      </ProjectSection>

      <ProjectSection title="Class Balancing Using SMOTE">
        <div
          className="
  grid
  lg:grid-cols-2
  gap-8
  "
        >
          <ProjectImage
            src="/images/projects/income/balancing-smote.png"
            alt="Balancing Using SMOTE"
          />

          {/* <ProjectImage
  src="/images/projects/income/smote-after.png"
  alt="After SMOTE"
/> */}
        </div>

        <p>
          SMOTE was applied to improve minority class representation and reduce
          model bias toward the majority class.
        </p>
      </ProjectSection>
      <ProjectSection title="Model Comparison">
        <ProjectImage
          src="/images/projects/income/model-comparison.png"
          alt="Model Comparison"
        />

        <div
          className="
  bg-green-50
  border
  border-green-200
  rounded-2xl
  p-6
  mb-8
  "
        >
          <h3
            className="
    text-xl
    font-bold
    text-green-700
    "
          >
            Best Performing Model
          </h3>

          <p className="mt-3">
            Gradient Boosting achieved the highest ROC-AUC score of 94.61% and
            was selected as the final model.
          </p>
        </div>

        <ProjectTable
          headers={["Model", "ROC-AUC"]}
          rows={[
            ["Gradient Boosting", "94.61%"],

            ["XGBoost", "93.92%"],
            ["KNN", "91.81%"],
            ["Random Forest", "91.53%"],
            ["Logistic Regression", "89.45%"],
            ["Decision Tree", "84.82%"],
          ]}
        />
      </ProjectSection>

      <ProjectSection title="ROC Curve Analysis">
        <ProjectImage
          src="/images/projects/income/roc-curve.png"
          alt="ROC Curve"
        />

        <p>
          The final Gradient Boosting model achieved a ROC-AUC score of 91% on
          the test dataset.
        </p>
      </ProjectSection>

      <ProjectSection title="Model Evaluation">
        <ProjectImage
          src="/images/projects/income/confusion-matrix.png"
          alt="Confusion Matrix"
        />

        <ProjectTable
          headers={["Metric", "Value"]}
          rows={[
            ["Accuracy", "83%"],
            ["Precision", "85%"],
            ["Recall", "83%"],
            ["F1 Score", "83%"],
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Business Impact">
        <ul className="list-disc ml-6 space-y-3">
          <li>Customer segmentation for targeted marketing.</li>

          <li>Financial planning and risk assessment.</li>

          <li>Support for credit pre-screening.</li>

          <li>
            Potential application for public assistance targeting programs.
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Lessons Learned">
        <ul className="list-disc ml-6 space-y-3">
          <li>Feature engineering significantly affects model performance.</li>

          <li>Handling class imbalance is essential.</li>

          <li>
            Model comparison provides better justification than using a single
            model.
          </li>

          <li>
            Business interpretation is as important as predictive accuracy.
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <div className="flex flex-wrap gap-3">
          {[
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-Learn",
            "XGBoost",
            "Matplotlib",
            "Seaborn",
          ].map((tech) => (
            <span
              key={tech}
              className="
    px-4
    py-2
    rounded-lg
    bg-blue-50
    text-blue-700
    "
            >
              {tech}
            </span>
          ))}
        </div>
      </ProjectSection>

      <div
        className="
  mt-24
  text-center
  "
      >
        <a
          href="/"
          className="
    inline-block
    bg-blue-700
    text-white
    px-8
    py-4
    rounded-xl
    "
        >
          Back to Portfolio
        </a>
      </div>
    </main>
  );
}
