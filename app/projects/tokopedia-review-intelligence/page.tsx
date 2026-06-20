import ProjectHero from "@/components/project/ProjectHero";
import ProjectImage from "@/components/project/ProjectImage";
import ProjectMetrics from "@/components/project/ProjectMetrics";
import ProjectSection from "@/components/project/ProjectSection";

export default function TokopediaReviewPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <ProjectHero
        category="Natural Language Processing"
        title="Tokopedia Sentiment Analysis & Review Intelligence"
        description="
  End-to-end sentiment analysis pipeline built on
  65,543 Tokopedia product reviews using TF-IDF,
  feature engineering, machine learning evaluation,
  class imbalance handling, and Streamlit deployment.
  "
      />

      <ProjectMetrics
        metrics={[
          {
            label: "Reviews",
            value: "65,543",
          },
          {
            label: "Models",
            value: "3",
          },
          {
            label: "Accuracy",
            value: "91%",
          },
          {
            label: "Macro F1",
            value: "0.84",
          },
        ]}
      />

      <ProjectSection title="Business Problem">
        <p>
          Customer reviews contain valuable information regarding product
          quality, customer satisfaction, and purchasing experience.
        </p>

        <p className="mt-4">
          With tens of thousands of reviews generated every day, manual analysis
          becomes impractical. Businesses require an automated system capable of
          identifying customer sentiment accurately and efficiently.
        </p>
      </ProjectSection>

      <ProjectSection title="Dataset Overview">
        <p>
          Dataset used in this project consists of 65,543 Tokopedia product
          reviews collected from multiple product categories.
        </p>

        <div className="mt-6 space-y-2">
          <p>• review_text</p>

          <p>• rating</p>

          <p>• product_category</p>

          <p>• product_variant</p>

          <p>• product_price</p>

          <p>• sold_count</p>
        </div>
      </ProjectSection>

      <ProjectSection title="Project Workflow">
        <div className="space-y-6">
          <div>① Dataset Collection</div>

          <div>② Data Cleaning</div>

          <div>③ Feature Engineering</div>

          <div>④ TF-IDF Vectorization</div>

          <div>⑤ Model Training</div>

          <div>⑥ Model Evaluation</div>

          <div>⑦ Streamlit Deployment</div>
        </div>
      </ProjectSection>

      <ProjectSection title="Data Preparation">
        <ul className="space-y-4">
          <li>
            Removed neutral reviews to create a binary sentiment classification
            problem.
          </li>

          <li>Encoded target labels: Positive = 1, Negative = 0.</li>

          <li>Performed train-test split using an 80:20 ratio.</li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Feature Engineering">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">TF-IDF Vectorization</h3>

            <p>
              Converted review text into numerical features using TF-IDF with
              1000 maximum features.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Review Length</h3>

            <p>Generated review_length feature to capture textual intensity.</p>
          </div>

          <div>
            <h3 className="font-semibold">One Hot Encoding</h3>

            <p>Applied on product category and product variant features.</p>
          </div>

          <div>
            <h3 className="font-semibold">Standard Scaling</h3>

            <p>
              Normalized numerical features such as product price and sold
              count.
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Class Imbalance Challenge">
        <p>
          The dataset exhibited a severe imbalance between positive and negative
          reviews.
        </p>

        <div className="mt-6 bg-slate-50 rounded-xl p-6">
          <p>Positive Reviews: 63,943</p>

          <p>Negative Reviews: 798</p>
        </div>

        <p className="mt-6">
          RandomOverSampler was applied to improve minority class representation
          and reduce model bias.
        </p>
      </ProjectSection>

      <ProjectSection title="Model Comparison">
        <p className="mb-8">
          Three classification models were evaluated to identify the most
          reliable sentiment classification approach.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4">Model</th>

                <th className="text-left py-4">Accuracy</th>

                <th className="text-left py-4">Macro F1</th>

                <th className="text-left py-4">Decision</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-4">Model Alpha</td>
                <td>78%</td>
                <td>0.50</td>
                <td>Rejected</td>
              </tr>

              <tr className="border-b">
                <td className="py-4">Model Beta</td>
                <td>54%</td>
                <td>0.45</td>
                <td>Rejected</td>
              </tr>

              <tr>
                <td className="py-4 font-semibold text-green-700">
                  Model Gamma
                </td>
                <td className="font-semibold">91%</td>
                <td className="font-semibold">0.84</td>
                <td className="font-semibold text-green-700">Selected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ProjectSection>
      <ProjectSection title="Selected Model">
        <div
          className="
bg-green-50
border
border-green-200
rounded-2xl
p-8
"
        >
          <h3
            className="
text-2xl
font-bold
text-green-700
"
          >
            Model Gamma Selected
          </h3>

          <p className="mt-4">
            Model Gamma demonstrated the best balance between positive and
            negative sentiment detection, achieving 91% accuracy and 0.84 Macro
            F1 Score.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Classification Report Comparison">
        <p className="mb-8">
          Performance comparison across all candidate models.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectImage
            src="/projects/tokopedia-review-intelligence/alpha-report.png"
            alt="Model Alpha Classification Report"
          />

          <ProjectImage
            src="/projects/tokopedia-review-intelligence/beta-report.png"
            alt="Model Beta Classification Report"
          />

          <ProjectImage
            src="/projects/tokopedia-review-intelligence/gamma-report.png"
            alt="Model Gamma Classification Report"
          />
        </div>
      </ProjectSection>
      <ProjectSection title="Final Model Performance">
        <p>
          Model Gamma achieved the strongest balance between precision, recall,
          and F1-score, making it the final production candidate.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="text-3xl font-bold">91%</h3>
            <p>Accuracy</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="text-3xl font-bold">83%</h3>
            <p>Negative Recall</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="text-3xl font-bold">92%</h3>
            <p>Positive Recall</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="text-3xl font-bold">0.84</h3>
            <p>Macro F1</p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Deployment Architecture">
        <div
          className="
grid
md:grid-cols-4
gap-6
"
        >
          <div>Review Input</div>

          <div>TF-IDF</div>

          <div>Naive Bayes</div>

          <div>Streamlit UI</div>
        </div>
      </ProjectSection>

      <ProjectSection title="Deployment">
        <p className="mb-8">
          The final sentiment analysis model was deployed using Streamlit and
          served through Cloudflare Tunnel.
        </p>

        <ProjectImage
          src="/projects/tokopedia-review-intelligence/streamlit-app.png"
          alt="Streamlit Deployment"
        />

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-xl">Pickle Serialization</div>

          <div className="bg-slate-50 p-6 rounded-xl">Streamlit UI</div>

          <div className="bg-slate-50 p-6 rounded-xl">Cloudflare Tunnel</div>
        </div>
      </ProjectSection>

      <ProjectSection title="Project Impact">
        <div
          className="
grid
md:grid-cols-3
gap-6
"
        >
          <div>
            <h3>65K+</h3>
            <p>Reviews Processed</p>
          </div>

          <div>
            <h3>91%</h3>
            <p>Classification Accuracy</p>
          </div>

          <div>
            <h3>Real-Time</h3>
            <p>Sentiment Prediction</p>
          </div>
        </div>
      </ProjectSection>
      <ProjectSection title="Recruiter Summary">
        <div
          className="
bg-slate-900
text-white
p-8
rounded-3xl
"
        >
          <p>
            This project demonstrates end-to-end NLP skills, including data
            preparation, feature engineering, class imbalance handling, machine
            learning evaluation, and deployment using Streamlit.
          </p>
        </div>
      </ProjectSection>
      <ProjectSection title="Key Learnings">
        <ul className="space-y-4">
          <li>
            Understanding why accuracy alone can be misleading in imbalanced
            datasets.
          </li>

          <li>
            Applying TF-IDF and feature engineering for large-scale text
            classification.
          </li>

          <li>Handling severe class imbalance using RandomOverSampler.</li>

          <li>
            Comparing multiple machine learning models using precision, recall,
            and F1-score.
          </li>

          <li>
            Deploying machine learning solutions using Streamlit for real-world
            usage.
          </li>
        </ul>
      </ProjectSection>
    </main>
  );
}
