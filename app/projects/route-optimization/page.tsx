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
  TrendingUp,
  Cpu,
  Award,
  ListChecks,
  MapPin,
  Route,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RouteOptimizationPage() {
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
          Mathematical Modeling
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Route Optimization Using Dijkstra Algorithm
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Applying graph theory and Dijkstra's shortest path algorithm to optimize
          TransJakarta routes toward popular tourist destinations in Jakarta.
        </p>
      </div>

      {/* 2 Column Layout */}
      <div className="grid lg:grid-cols-12 gap-10">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-12">
          {/* Project Overview */}
          <section id="project-overview" className="scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-4">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Project Overview
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-base">
              <p>
                This project focuses on finding the shortest route between
                TransJakarta bus stops and several popular tourist destinations in
                Jakarta using the Dijkstra Algorithm.
              </p>
              <p>
                The transportation network is modeled as a weighted graph, where
                each bus stop represents a node and each connection represents an
                edge weighted by travel distance.
              </p>
              <p>
                All calculations were performed manually to demonstrate a complete
                understanding of graph theory and shortest path optimization.
              </p>
            </div>
          </section>

          {/* Problem Background */}
          <section
            id="problem-background"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-4">
              <ShieldCheck className="h-6 w-6 text-primary" />
              Problem Background
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-base">
              <p>
                Jakarta contains numerous tourist attractions connected through the
                TransJakarta Bus Rapid Transit network.
              </p>
              <p>
                Determining the most efficient route can be difficult due to multiple
                transfer points and route alternatives.
              </p>
              <p>
                This project applies graph theory and Dijkstra's Algorithm to identify
                the shortest travel routes from Halte Rawamangun (UNJ) to popular
                destinations.
              </p>
            </div>
          </section>

          {/* Project Objectives */}
          <section
            id="project-objectives"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <Card className="border border-border/60 shadow-xs">
              <CardHeader className="border-b border-border/30 pb-3">
                <CardTitle className="text-lg font-bold flex items-center gap-2 text-foreground">
                  <ListChecks className="h-5 w-5 text-primary" />
                  Project Objectives
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm leading-relaxed">
                  <li>Collect distance information between TransJakarta stops.</li>
                  <li>Build a weighted graph representation.</li>
                  <li>Apply Dijkstra's shortest path algorithm.</li>
                  <li>Determine optimal routes toward tourist destinations.</li>
                  <li>Demonstrate practical applications of graph theory.</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Data Collection & Graph Modeling */}
          <section
            id="graph-modeling"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-4">
              <Database className="h-6 w-6 text-primary" />
              Graph Modeling & Data Collection
            </h2>
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 text-muted-foreground leading-relaxed text-base space-y-4">
                <p>
                  Distance data was collected manually using Google Maps. Each connection
                  between bus stops was recorded and converted into graph edges.
                </p>
                <p>
                  Vertices represent bus stops while edges represent direct connections.
                  Edge weights correspond to travel distance in kilometers.
                </p>
              </div>
              <div className="md:col-span-6 flex justify-center">
                <div className="relative group max-w-sm w-full bg-card border border-border/60 p-2 rounded-xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <Image
                    src="/projects/route-optimization/graph.png"
                    alt="Weighted Graph Representation"
                    width={500}
                    height={350}
                    className="rounded-lg object-cover w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Dijkstra Algorithm Methodology */}
          <section
            id="methodology"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-6">
              <Cpu className="h-6 w-6 text-primary" />
              Dijkstra Algorithm Methodology
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { step: "1", title: "Initialization", desc: "Initialize the starting node (UNJ Rawamangun) with distance 0 and all remaining nodes with infinity." },
                { step: "2", title: "Select Node", desc: "Select the unvisited node with the minimum tentative distance as the current node." },
                { step: "3", title: "Update Distances", desc: "Calculate distance for neighboring unvisited nodes. Update if the new path is shorter." },
                { step: "4", title: "Mark Visited", desc: "Mark the current node as visited. Repeat until all nodes in the network are visited." },
              ].map((item) => (
                <div key={item.step} className="p-4 rounded-xl border border-border/60 bg-card hover:shadow-xs transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary font-bold text-xs">
                      {item.step}
                    </span>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Manual Iteration Process */}
          <section
            id="manual-iterations"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
              Manual Iteration Process
            </h2>
            <div className="text-muted-foreground leading-relaxed text-base space-y-4 mb-6">
              <p>
                The Dijkstra Algorithm was executed manually across ten iterations.
                Each iteration updates the shortest known distance from Halte Rawamangun (UNJ)
                to all remaining nodes in the network.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative group max-w-xl w-full bg-card border border-border/60 p-2 rounded-xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20">
                <Image
                  src="/projects/route-optimization/iterations.png"
                  alt="Dijkstra Iteration Table"
                  width={700}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Optimization Results */}
          <section
            id="optimization-results"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5 mb-6">
              <Navigation className="h-6 w-6 text-primary" />
              Optimal Routes (From Rawamangun)
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { dist: "9.3 km", destination: "Bundaran HI" },
                { dist: "9.6 km", destination: "Monas" },
                { dist: "10.7 km", destination: "GBK" },
                { dist: "12.1 km", destination: "Ancol" },
                { dist: "12.2 km", destination: "TMII" },
                { dist: "15.5 km", destination: "Kota Tua" },
              ].map((res, idx) => (
                <Card key={idx} className="border border-border/60 hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <span className="text-2xl font-bold text-primary">{res.dist}</span>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <span className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                      {res.destination}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Real-World Impact & Insights */}
          <section
            id="impact-insights"
            className="scroll-mt-24 border-t border-border/40 pt-10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-border/60 shadow-xs">
                <CardHeader className="border-b border-border/30 pb-3">
                  <CardTitle className="text-lg font-bold flex items-center gap-2 text-foreground">
                    <Award className="h-5 w-5 text-primary" />
                    Real-World Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm leading-relaxed">
                    <li>Supports efficient commuting and route planning.</li>
                    <li>Reduces travel distance and transit waiting time.</li>
                    <li>Demonstrates transportation network optimization.</li>
                    <li>Provides decision-support insights for public transit users.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-border/60 shadow-xs">
                <CardHeader className="border-b border-border/30 pb-3">
                  <CardTitle className="text-lg font-bold flex items-center gap-2 text-foreground">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Key Findings
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm leading-relaxed">
                    <li>Shortest routes are not always visually direct routes.</li>
                    <li>Simpang Pramuka acts as a major transit hub.</li>
                    <li>Flyover Pramuka frequently appears in optimal paths.</li>
                    <li>Graph theory provides a robust framework for transit routing.</li>
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
                <span className="text-muted-foreground">Destinations</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">
                  6
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Stops (Nodes)</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">
                  11
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Connections (Edges)</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">
                  14
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Shortest Path</span>
                <span className="font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                  9.3 km
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Origin</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded text-xs truncate max-w-[150px]">
                  Halte Rawamangun
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Category</span>
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded text-xs">
                  Math Modeling
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Core Skills & Tools Card */}
          <Card className="border border-border/60 shadow-xs">
            <CardHeader className="border-b border-border/30 pb-4">
              <CardTitle className="text-lg font-bold flex items-center gap-2 text-foreground">
                <Cpu className="h-5 w-5 text-primary" />
                Skills Demonstrated
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {[
                  "Graph Theory",
                  "Shortest Path Optimization",
                  "Transportation Analytics",
                  "Network Modeling",
                  "Operations Research",
                  "Decision Support Systems",
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
