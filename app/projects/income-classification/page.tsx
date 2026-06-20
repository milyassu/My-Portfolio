"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Database,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  Trophy,
  Cpu,
  Award,
  ListChecks,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function IncomeClassificationPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 mt-16 transition-all duration-300">
      {/* Back Button */}
      <div className="mb-8">
        <Button
          variant="ghost"
          asChild
          className="group text-muted-foreground hover:text-foreground"
        >
          <Link href="/#projects" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </Button>
      </div>

      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-muted/20 p-8 md:p-12 mb-12">
        <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-background/0 to-primary/5 -z-10" />
        <Badge
          variant="secondary"
          className="mb-4 text-xs font-semibold px-3 py-1 uppercase tracking-wider bg-primary/10 text-primary border-primary/20"
        >
          Machine Learning
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Income Classification Using Machine Learning
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Predicting whether an individual's annual income exceeds $50K using
          demographic and socio-economic features.
        </p>
      </div>

      {/* 2 Column Layout */}
      <div className="grid lg:grid-cols-12 gap-10">
        {/* Left Column: Case Study Details (8 cols) */}
        <div className="lg:col-span-8 space-y-12">
          {/* Executive Summary */}
          <section id="executive-summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-4">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Executive Summary
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-base">
              <p>
                This project aims to classify whether an individual's annual
                income exceeds $50,000 using demographic and socio-economic
                attributes.
              </p>
              <p>
                Several machine learning algorithms were evaluated, including
                Logistic Regression, K-Nearest Neighbor, Random Forest, XGBoost,
                Decision Tree, and Gradient Boosting.
              </p>
              <p>
                The final Gradient Boosting model achieved a ROC-AUC score above
                0.90 and demonstrated strong predictive performance for income
                segmentation tasks.
              </p>
            </div>
          </section>

          {/* Business Problem */}
          <section
            id="business-problem"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-4">
              <ShieldCheck className="h-6 w-6 text-primary" />
              Business Problem
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-base">
              <p>
                Income prediction plays an important role in customer
                segmentation, financial planning, credit assessment, and marketing
                strategy.
              </p>
              <p>
                Organizations need scalable approaches to identify income groups
                accurately without relying on manual processes.
              </p>
            </div>
          </section>

          {/* Project Workflow */}
          <section
            id="project-workflow"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-6">
              <ListChecks className="h-6 w-6 text-primary" />
              Project Workflow
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { step: "1", title: "Data Collection" },
                { step: "2", title: "EDA" },
                { step: "3", title: "Preprocessing" },
                { step: "4", title: "Modeling" },
                { step: "5", title: "Evaluation" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col items-center justify-center p-4 rounded-xl border border-border/60 bg-card text-center transition-all hover:shadow-xs"
                >
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-bold text-sm mb-2">
                    {item.step}
                  </span>
                  <span className="font-semibold text-xs text-foreground tracking-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Feature Description */}
          <section
            id="feature-description"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-6">
              <Database className="h-6 w-6 text-primary" />
              Feature Description
            </h2>
            <Card className="overflow-hidden border border-border/60">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-1/3 font-semibold text-foreground">
                      Feature
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      Description
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    ["Age", "Age of individual"],
                    ["Workclass", "Employment type"],
                    ["Education", "Highest education level"],
                    ["Occupation", "Occupation category"],
                    ["Hours Per Week", "Working hours"],
                    ["Capital Gain", "Investment gain"],
                    ["Capital Loss", "Investment loss"],
                  ].map(([feature, desc]) => (
                    <TableRow key={feature} className="hover:bg-muted/20">
                      <TableCell className="font-semibold text-foreground">
                        {feature}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {desc}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </section>

          {/* Target Distribution */}
          <section
            id="target-distribution"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
              Target Distribution
            </h2>
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 text-muted-foreground leading-relaxed text-base space-y-4">
                <p>
                  The dataset is imbalanced, with approximately{" "}
                  <strong>75.9%</strong> of individuals belonging to the
                  low-income class and <strong>24.1%</strong> belonging to the
                  high-income class.
                </p>
                <p>
                  Imbalanced target variables can lead models to favor the majority
                  class, making balancing techniques crucial.
                </p>
              </div>
              <div className="md:col-span-6 flex justify-center">
                <div className="relative group max-w-sm w-full bg-card border border-border/60 p-2 rounded-xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <Image
                    src="/images/projects/income/income-distribution.jpg"
                    alt="Income Distribution"
                    width={500}
                    height={350}
                    className="rounded-lg object-cover w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Class Balancing Using SMOTE */}
          <section
            id="class-balancing"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
              Class Balancing Using SMOTE
            </h2>
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 flex justify-center">
                <div className="relative group max-w-sm w-full bg-card border border-border/60 p-2 rounded-xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <Image
                    src="/images/projects/income/balancing-smote.png"
                    alt="Balancing Using SMOTE"
                    width={500}
                    height={350}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:col-span-6 text-muted-foreground leading-relaxed text-base space-y-4">
                <p>
                  SMOTE (Synthetic Minority Over-sampling Technique) was applied to
                  generate synthetic examples for the minority class.
                </p>
                <p>
                  This improves minority class representation and reduces model bias
                  toward the majority class, leading to better classification.
                </p>
              </div>
            </div>
          </section>

          {/* Model Comparison */}
          <section
            id="model-comparison"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-6">
              <Cpu className="h-6 w-6 text-primary" />
              Model Comparison
            </h2>

            <Alert className="mb-6 bg-emerald-500/10 border-emerald-500/30 text-foreground dark:bg-emerald-500/20">
              <Trophy className="h-5 w-5 text-emerald-500" />
              <AlertTitle className="font-bold text-emerald-600 dark:text-emerald-400">
                Best Performing Model
              </AlertTitle>
              <AlertDescription className="text-muted-foreground mt-1">
                Gradient Boosting achieved the highest ROC-AUC score of{" "}
                <strong>94.61%</strong> and was selected as the final model.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-12 gap-6 items-center mb-8">
              <div className="md:col-span-6">
                <Card className="overflow-hidden border border-border/60">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-semibold text-foreground">
                          Model
                        </TableHead>
                        <TableHead className="font-semibold text-foreground text-right">
                          ROC-AUC
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ["Gradient Boosting", "94.61%"],
                        ["XGBoost", "93.92%"],
                        ["KNN", "91.81%"],
                        ["Random Forest", "91.53%"],
                        ["Logistic Regression", "89.45%"],
                        ["Decision Tree", "84.82%"],
                      ].map(([model, auc]) => (
                        <TableRow
                          key={model}
                          className={
                            model === "Gradient Boosting"
                              ? "bg-primary/5 hover:bg-primary/10 font-medium"
                              : "hover:bg-muted/20"
                          }
                        >
                          <TableCell className="text-foreground">
                            {model}
                          </TableCell>
                          <TableCell className="text-right text-foreground font-semibold">
                            {auc}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </div>
              <div className="md:col-span-6 flex justify-center">
                <div className="relative group max-w-sm w-full bg-card border border-border/60 p-2 rounded-xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <Image
                    src="/images/projects/income/model-comparison.png"
                    alt="Model Comparison"
                    width={500}
                    height={350}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Model Evaluation & ROC Curve */}
          <section
            id="model-evaluation"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-6">
              <Cpu className="h-6 w-6 text-primary" />
              Model Evaluation
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold text-muted-foreground mb-3">
                  Confusion Matrix
                </span>
                <div className="relative group w-full bg-card border border-border/60 p-2 rounded-xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <Image
                    src="/images/projects/income/confusion-matrix.png"
                    alt="Confusion Matrix"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold text-muted-foreground mb-3">
                  ROC Curve Analysis
                </span>
                <div className="relative group w-full bg-card border border-border/60 p-2 rounded-xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <Image
                    src="/images/projects/income/roc-curve.png"
                    alt="ROC Curve"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 text-muted-foreground leading-relaxed text-base space-y-4">
                <p>
                  The final Gradient Boosting model achieved a ROC-AUC score of
                  91% on the test dataset.
                </p>
                <p>
                  Precision of 85% means that 85% of predicted high-income
                  individuals actually belong to that class, while a recall of
                  83% ensures that the model successfully catches 83% of the
                  actual high-income individuals in the test set.
                </p>
              </div>
              <div className="md:col-span-6">
                <Card className="overflow-hidden border border-border/60">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-semibold text-foreground">
                          Metric
                        </TableHead>
                        <TableHead className="font-semibold text-foreground text-right">
                          Value
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ["Accuracy", "83%"],
                        ["Precision", "85%"],
                        ["Recall", "83%"],
                        ["F1 Score", "83%"],
                      ].map(([metric, val]) => (
                        <TableRow key={metric} className="hover:bg-muted/20">
                          <TableCell className="text-foreground">
                            {metric}
                          </TableCell>
                          <TableCell className="text-right text-foreground font-semibold">
                            {val}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </div>
            </div>
          </section>

          {/* Business Impact & Lessons Learned */}
          <section
            id="business-impact"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-border/60 shadow-xs">
                <CardHeader className="border-b border-border/30 pb-3">
                  <CardTitle className="text-lg font-bold flex items-center gap-2 text-foreground">
                    <Award className="h-5 w-5 text-primary" />
                    Business Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm leading-relaxed">
                    <li>
                      Customer segmentation for targeted marketing campaigns.
                    </li>
                    <li>
                      Financial planning and automated risk assessment modeling.
                    </li>
                    <li>Support for loan credit pre-screening.</li>
                    <li>
                      Potential application for public assistance targeting
                      programs.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-border/60 shadow-xs">
                <CardHeader className="border-b border-border/30 pb-3">
                  <CardTitle className="text-lg font-bold flex items-center gap-2 text-foreground">
                    <ListChecks className="h-5 w-5 text-primary" />
                    Lessons Learned
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm leading-relaxed">
                    <li>
                      Feature engineering significantly affects overall model
                      performance.
                    </li>
                    <li>
                      Handling class imbalance using SMOTE is essential for
                      unbiased classification.
                    </li>
                    <li>
                      Model comparison provides better justification than using
                      a single model.
                    </li>
                    <li>
                      Business interpretation is as important as predictive
                      accuracy.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Sidebar (4 cols) */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-6">
          {/* Project Details Card */}
          <Card className="border border-border/60 shadow-xs">
            <CardHeader className="border-b border-border/30 pb-4">
              <CardTitle className="text-lg font-bold flex items-center gap-2 text-foreground">
                <Database className="h-5 w-5 text-primary" />
                Project Details
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Records</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">
                  32,561
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Features</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">
                  15
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">ROC-AUC</span>
                <span className="font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                  91%
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Accuracy</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">
                  83%
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Category</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">
                  Machine Learning
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Source</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded text-xs truncate max-w-[150px]">
                  Kaggle Census
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Technology Stack Card */}
          <Card className="border border-border/60 shadow-xs">
            <CardHeader className="border-b border-border/30 pb-4">
              <CardTitle className="text-lg font-bold flex items-center gap-2 text-foreground">
                <Cpu className="h-5 w-5 text-primary" />
                Technology Stack
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Pandas",
                  "NumPy",
                  "Scikit-Learn",
                  "XGBoost",
                  "Matplotlib",
                  "Seaborn",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1 font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer Back Button */}
      <div className="mt-20 text-center">
        <Button
          asChild
          className="px-8 py-6 rounded-xl font-semibold shadow-md active:scale-95 transition-all text-primary-foreground"
        >
          <Link href="/#projects" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </div>
    </main>
  );
}
