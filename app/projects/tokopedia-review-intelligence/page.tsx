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
  MessageSquareCode,
  LineChart,
  Layout,
  ExternalLink,
  BookOpen,
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

export default function TokopediaReviewPage() {
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
          Natural Language Processing
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Tokopedia Sentiment Analysis & Review Intelligence
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          End-to-end sentiment analysis pipeline built on 65,543 Tokopedia product
          reviews using TF-IDF, feature engineering, machine learning evaluation,
          class imbalance handling, and Streamlit deployment.
        </p>
      </div>

      {/* 2 Column Layout */}
      <div className="grid lg:grid-cols-12 gap-10">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-12">
          {/* Business Problem */}
          <section id="business-problem" className="scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-4">
              <ShieldCheck className="h-6 w-6 text-primary" />
              Business Problem
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-base">
              <p>
                Customer reviews contain valuable information regarding product
                quality, customer satisfaction, and purchasing experience.
              </p>
              <p>
                With tens of thousands of reviews generated every day, manual
                analysis becomes impractical. Businesses require an automated system
                capable of identifying customer sentiment accurately and
                efficiently.
              </p>
            </div>
          </section>

          {/* Dataset Overview */}
          <section
            id="dataset-overview"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-4">
              <Database className="h-6 w-6 text-primary" />
              Dataset Overview
            </h2>
            <div className="text-muted-foreground leading-relaxed text-base space-y-4 mb-6">
              <p>
                The dataset used in this project consists of 65,543 Tokopedia
                product reviews collected from multiple product categories.
              </p>
            </div>
            <Card className="border border-border/60 shadow-xs">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-muted-foreground">
                  Available Dataset Fields
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "review_text (Raw Review)",
                    "rating (1-5 Stars)",
                    "product_category",
                    "product_variant",
                    "product_price",
                    "sold_count",
                  ].map((field) => (
                    <Badge
                      key={field}
                      variant="outline"
                      className="px-3 py-1 text-xs text-foreground font-medium border-border"
                    >
                      {field}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Project Workflow */}
          <section
            id="project-workflow"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-6">
              <ListChecks className="h-6 w-6 text-primary" />
              Project Workflow & Data Preparation
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
              {[
                { step: "1", title: "Dataset Collection" },
                { step: "2", title: "Data Cleaning" },
                { step: "3", title: "Feature Eng." },
                { step: "4", title: "Vectorization" },
                { step: "5", title: "Model Training" },
                { step: "6", title: "Evaluation" },
                { step: "7", title: "Deployment" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col items-center justify-center p-3 rounded-xl border border-border/60 bg-card text-center transition-all hover:shadow-xs"
                >
                  <span className="flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary font-bold text-xs mb-1.5">
                    {item.step}
                  </span>
                  <span className="font-semibold text-[10px] text-foreground tracking-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <Card className="border border-border/60 shadow-xs">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-foreground">
                  Data Preparation Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm leading-relaxed">
                  <li>
                    Removed neutral reviews to create a binary sentiment
                    classification problem (Positive vs Negative).
                  </li>
                  <li>Encoded target labels: Positive = 1, Negative = 0.</li>
                  <li>Performed train-test split using an 80:20 ratio.</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Feature Engineering */}
          <section
            id="feature-engineering"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-6">
              <MessageSquareCode className="h-6 w-6 text-primary" />
              Feature Engineering
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "TF-IDF Vectorization",
                  desc: "Converted raw review text into numerical features using TF-IDF representation with 1000 maximum features.",
                },
                {
                  title: "Review Length Extraction",
                  desc: "Generated review_length feature to capture textual intensity, length, and metadata of the review text.",
                },
                {
                  title: "One-Hot Encoding",
                  desc: "Applied One-Hot Encoding to categorical variables such as product category and product variants.",
                },
                {
                  title: "Standard Scaling",
                  desc: "Normalized numeric features like product price and sold count to scale variables uniformly.",
                },
              ].map((item, idx) => (
                <Card key={idx} className="border border-border/60 hover:shadow-xs transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-bold text-foreground">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Class Imbalance Challenge */}
          <section
            id="class-imbalance"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
              Class Imbalance Challenge
            </h2>
            <div className="text-muted-foreground leading-relaxed text-base space-y-4 mb-6">
              <p>
                The dataset exhibited a severe imbalance between positive and negative
                reviews, which is typical for e-commerce sites where users leave mostly positive scores.
              </p>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6">
                <Card className="border border-border/60 shadow-xs">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        Positive Reviews
                      </span>
                      <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">
                        63,943 (98.8%)
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        Negative Reviews
                      </span>
                      <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">
                        798 (1.2%)
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="md:col-span-6 text-muted-foreground leading-relaxed text-sm space-y-4">
                <p>
                  To address this issue, <strong>RandomOverSampler</strong> was
                  applied to oversample the minority class, preventing model bias
                  towards the majority class and ensuring accurate negative review
                  detection.
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
              <LineChart className="h-6 w-6 text-primary" />
              Model Comparison & Evaluation
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-6">
              Three classification models were evaluated to identify the most
              reliable sentiment classification approach.
            </p>

            <Alert className="mb-6 bg-emerald-500/10 border-emerald-500/30 text-foreground dark:bg-emerald-500/20">
              <Trophy className="h-5 w-5 text-emerald-500" />
              <AlertTitle className="font-bold text-emerald-600 dark:text-emerald-400">
                Selected Model: Model Gamma
              </AlertTitle>
              <AlertDescription className="text-muted-foreground mt-1">
                Model Gamma demonstrated the best balance between positive and negative
                sentiment detection, achieving <strong>91%</strong> accuracy and a{" "}
                <strong>0.84</strong> Macro F1 Score.
              </AlertDescription>
            </Alert>

            <Card className="overflow-hidden border border-border/60">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold text-foreground">
                      Model
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      Accuracy
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      Macro F1
                    </TableHead>
                    <TableHead className="font-semibold text-foreground text-right">
                      Decision
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    ["Model Alpha", "78%", "0.50", "Rejected"],
                    ["Model Beta", "54%", "0.45", "Rejected"],
                    ["Model Gamma", "91%", "0.84", "Selected"],
                  ].map(([model, acc, f1, decision]) => (
                    <TableRow
                      key={model}
                      className={
                        decision === "Selected"
                          ? "bg-primary/5 hover:bg-primary/10 font-medium"
                          : "hover:bg-muted/20"
                      }
                    >
                      <TableCell className="text-foreground">{model}</TableCell>
                      <TableCell className="text-foreground">{acc}</TableCell>
                      <TableCell className="text-foreground">{f1}</TableCell>
                      <TableCell
                        className={`text-right font-semibold ${
                          decision === "Selected"
                            ? "text-green-600 dark:text-green-400"
                            : "text-muted-foreground/60"
                        }`}
                      >
                        {decision}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </section>

          {/* Classification Report Comparison */}
          <section
            id="reports-comparison"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h3 className="text-xl font-bold tracking-tight text-foreground mb-4">
              Classification Report Comparison
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm mb-6">
              Visual validation of performance matrixes across candidate models (Model Alpha, Beta, and Gamma):
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  src: "/projects/tokopedia-review-intelligence/alpha-report.png",
                  alt: "Model Alpha",
                },
                {
                  src: "/projects/tokopedia-review-intelligence/beta-report.png",
                  alt: "Model Beta",
                },
                {
                  src: "/projects/tokopedia-review-intelligence/gamma-report.png",
                  alt: "Model Gamma",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-xs font-semibold text-muted-foreground mb-2">
                    {item.alt}
                  </span>
                  <div className="relative group w-full bg-card border border-border/60 p-1.5 rounded-xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={250}
                      height={200}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { value: "91%", label: "Accuracy" },
                { value: "83%", label: "Negative Recall" },
                { value: "92%", label: "Positive Recall" },
                { value: "0.84", label: "Macro F1" },
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border/60 p-4 rounded-xl text-center shadow-xs"
                >
                  <div className="text-2xl font-bold text-primary">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Deployment Architecture & Details */}
          <section
            id="deployment"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-6">
              <Layout className="h-6 w-6 text-primary" />
              System Architecture & Deployment
            </h2>

            <div className="space-y-8">
              <div>
                <span className="text-sm font-semibold text-muted-foreground block mb-3">
                  Deployment Pipeline Flow
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "1. Review Input Text",
                    "2. TF-IDF Tokenization",
                    "3. Naive Bayes Classifier",
                    "4. Streamlit Dashboard",
                  ].map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-muted/40 rounded-xl border border-border/50 text-center text-xs font-semibold text-foreground flex items-center justify-center h-12"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-border/40">
                <span className="text-sm font-semibold text-muted-foreground block">
                  Streamlit Dashboard Preview
                </span>
                <div className="relative group max-w-2xl w-full bg-card border border-border/60 p-2 rounded-xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20 mx-auto">
                  <Image
                    src="/projects/tokopedia-review-intelligence/streamlit-app.png"
                    alt="Streamlit Deployment"
                    width={800}
                    height={500}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  The sentiment analysis model is served using a Streamlit app. It
                  is containerized, exported using Pickle serialization, and tunneled
                  publicly using Cloudflare Tunnel.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {[
                    {
                      title: "Pickle Serialization",
                      desc: "Trained pipelines are serialized into pickle objects for efficient production loading.",
                    },
                    {
                      title: "Streamlit UI",
                      desc: "Interactive slider bars, query fields, and graphs are rendered dynamically.",
                    },
                    {
                      title: "Cloudflare Tunnel",
                      desc: "Securely tunnels local host ports directly to a public Cloudflare sub-domain.",
                    },
                  ].map((item, idx) => (
                    <Card key={idx} className="border border-border/60 bg-muted/20">
                      <CardContent className="pt-4">
                        <h4 className="font-semibold text-foreground text-xs">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Recruiter Summary Card */}
          <section
            id="recruiter-summary"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <Card className="bg-slate-900 border-none text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
              <CardContent className="p-8 space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Recruiter Summary
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  This project demonstrates end-to-end NLP skills, including data
                  preparation, feature engineering, class imbalance handling, machine
                  learning evaluation, and deployment using Streamlit.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Key Learnings */}
          <section
            id="key-learnings"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <Card className="border border-border/60 shadow-xs">
              <CardHeader className="border-b border-border/30 pb-3">
                <CardTitle className="text-lg font-bold flex items-center gap-2 text-foreground">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Key Learnings
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm leading-relaxed">
                  <li>
                    Understanding why accuracy alone can be misleading in imbalanced
                    datasets, and relying on F1-scores.
                  </li>
                  <li>
                    Applying TF-IDF and feature engineering for large-scale text
                    classification.
                  </li>
                  <li>
                    Handling severe class imbalance in reviews using oversampling
                    (RandomOverSampler).
                  </li>
                  <li>
                    Comparing multiple machine learning models using precision, recall,
                    and F1-score to choose the production candidate.
                  </li>
                  <li>
                    Deploying machine learning solutions using Streamlit for real-world
                    usage.
                  </li>
                </ul>
              </CardContent>
            </Card>
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
                <span className="text-muted-foreground">Reviews</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">
                  65,543
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Models Evaluated</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">
                  3
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Accuracy</span>
                <span className="font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                  91%
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Macro F1</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">
                  0.84
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Category</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded text-xs truncate max-w-[150px]">
                  NLP
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
                  "Naive Bayes",
                  "TF-IDF",
                  "Streamlit",
                  "Cloudflare Tunnel",
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
