"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Database,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Award,
  ListChecks,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LoanRepaymentDashboardPage() {
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
          Business Analytics
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Loan Repayment Analytics Dashboard
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Evaluate loan repayment performance, identify high-risk borrower
          profiles, and provide strategic recommendations for improving
          revolving fund sustainability.
        </p>
      </div>

      {/* 2 Column Layout */}
      <div className="grid lg:grid-cols-12 gap-10">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-12">
          {/* Overview & Business Problem */}
          <section id="project-overview" className="scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-4">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Project Overview
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-base">
              <p>
                This project combines business analysis, exploratory data
                analysis, and dashboard development to evaluate borrower
                repayment behavior. The objective was to identify factors
                influencing repayment performance and provide actionable
                recommendations for future lending decisions.
              </p>
            </div>
          </section>

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
                The organization needed a data-driven approach to improve the
                sustainability of its revolving fund program. Manual borrower
                assessment created challenges in identifying repayment risks,
                monitoring outstanding balances, and allocating funds
                effectively.
              </p>
            </div>
          </section>

          {/* Dashboard KPIs */}
          <section
            id="dashboard-kpis"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-6">
              <Wallet className="h-6 w-6 text-primary" />
              Dashboard KPIs
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border border-border/60 shadow-xs relative overflow-hidden group hover:border-blue-500/20 hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                <CardHeader className="pb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Total Disbursed
                  </span>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">
                    Rp98.5M
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Total funds distributed across all lending programs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/60 shadow-xs relative overflow-hidden group hover:border-green-500/20 hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
                <CardHeader className="pb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Total Repayment
                  </span>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">
                    Rp75.1M
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Total repayments successfully collected back from borrowers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/60 shadow-xs relative overflow-hidden group hover:border-red-500/20 hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                <CardHeader className="pb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Outstanding Balance
                  </span>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">
                    Rp23.4M
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Remaining unpaid balance currently active in the market.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Data Preparation */}
          <section
            id="data-preparation"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-6">
              <Database className="h-6 w-6 text-primary" />
              Data Preparation & Processing
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Data Cleaning",
                  desc: "Standardized borrower information, corrected inconsistent text entries, and handled missing values to ensure data quality.",
                },
                {
                  title: "Feature Engineering",
                  desc: "Created repayment rate indicators, borrower status categories, age groups, and loan segmentation variables for analysis.",
                },
                {
                  title: "Business Categorization",
                  desc: "Grouped borrowers by profession, location, program, loan purpose, and repayment status to support decision-making.",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 rounded-xl border border-border/60 bg-card hover:shadow-xs transition-all duration-200"
                >
                  <div className="flex items-center justify-center h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary">
                    <ListChecks className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EDA Findings */}
          <section
            id="eda-findings"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-6">
              <BarChart3 className="h-6 w-6 text-primary" />
              Key EDA Findings
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Age Segment Analysis",
                  desc: "Borrowers aged 67–80 years showed the highest repayment performance, while younger groups tended to have lower repayment consistency.",
                },
                {
                  title: "Loan Amount Analysis",
                  desc: "Smaller loans demonstrated significantly higher repayment rates compared to larger loans, reflecting lower debt burden.",
                },
                {
                  title: "Occupation Analysis",
                  desc: "Tailors, entrepreneurs, and housewives achieved stronger repayment performance than several other occupations.",
                },
                {
                  title: "Loan Purpose Analysis",
                  desc: "General trading and production-related loans showed stronger repayment behavior compared with agricultural and equipment-related purposes.",
                },
              ].map((finding, idx) => (
                <Card
                  key={idx}
                  className="border border-border/60 hover:shadow-sm hover:border-primary/20 transition-all duration-300"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-bold flex items-center gap-2 text-foreground">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      {finding.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {finding.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Dashboard Showcase */}
          <section
            id="dashboard-showcase"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-6">
              <Cpu className="h-6 w-6 text-primary" />
              Dashboard Showcase
            </h2>

            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-sm font-semibold text-muted-foreground block">
                  1. Dashboard Overview
                </span>
                <div className="relative group max-w-2xl w-full bg-card border border-border/60 p-2 rounded-xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <Image
                    src="/projects/loan-dashboard/page1.png"
                    alt="Loan Dashboard Overview"
                    width={800}
                    height={500}
                    className="rounded-lg object-cover w-full h-auto"
                    priority
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  The first dashboard page provides a high-level summary of loan
                  portfolio performance, repayment status, borrower
                  segmentation, and key financial indicators.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border/40">
                <span className="text-sm font-semibold text-muted-foreground block">
                  2. Borrower Demographics Analysis
                </span>
                <div className="relative group max-w-2xl w-full bg-card border border-border/60 p-2 rounded-xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <Image
                    src="/projects/loan-dashboard/page2.png"
                    alt="Borrower Analysis"
                    width={800}
                    height={500}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  This dashboard focuses on borrower demographics, age
                  segmentation, occupation categories, and repayment performance
                  across different customer groups.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border/40">
                <span className="text-sm font-semibold text-muted-foreground block">
                  3. Loan Performance Analysis
                </span>
                <div className="relative group max-w-2xl w-full bg-card border border-border/60 p-2 rounded-xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <Image
                    src="/projects/loan-dashboard/page3.png"
                    alt="Loan Performance Analysis"
                    width={800}
                    height={500}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  This dashboard highlights repayment behavior, outstanding
                  balances, loan utilization, and performance trends across
                  multiple loan purposes.
                </p>
              </div>
            </div>
          </section>

          {/* Business Insights */}
          <section
            id="business-insights"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <Card className="border border-border/60 shadow-xs">
              <CardHeader className="border-b border-border/30 pb-3">
                <CardTitle className="text-lg font-bold flex items-center gap-2 text-foreground">
                  <Award className="h-5 w-5 text-primary" />
                  Key Business Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="list-disc pl-5 space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <li>
                    Borrowers in older age segments generally demonstrated
                    higher repayment consistency.
                  </li>
                  <li>
                    Smaller loans showed stronger repayment performance than
                    larger loan amounts, suggesting lower debt burdens are
                    easier to manage.
                  </li>
                  <li>
                    Several occupation groups (such as tailors, entrepreneurs,
                    and housewives) consistently achieved above-average
                    repayment rates.
                  </li>
                  <li>
                    Portfolio risk was concentrated within specific loan
                    purposes and borrower segments, allowing targeted
                    interventions.
                  </li>
                  <li>
                    Dashboard monitoring enables faster decision-making,
                    automated tracking, and proactive loan risk management.
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
                <span className="text-muted-foreground">Borrowers</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">
                  89
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Total Disbursed</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">
                  Rp98.5M
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Repayment Rate</span>
                <span className="font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                  76.25%
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Outstanding</span>
                <span className="font-semibold text-destructive bg-destructive/10 px-2 py-0.5 rounded">
                  Rp23.4M
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Category</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">
                  Business Analytics
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Core Skills & Tools Card */}
          <Card className="border border-border/60 shadow-xs">
            <CardHeader className="border-b border-border/30 pb-4">
              <CardTitle className="text-lg font-bold flex items-center gap-2 text-foreground">
                <Cpu className="h-5 w-5 text-primary" />
                Skills & Analytics Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {[
                  "Business Analytics",
                  "Financial Modeling",
                  "Risk Assessment",
                  "Data Cleaning",
                  "Exploratory Data Analysis",
                  "Dashboard Design",
                  "KPI Monitoring",
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
