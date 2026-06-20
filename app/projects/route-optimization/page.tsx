import ProjectHero from "@/components/project/ProjectHero";
import ProjectMetrics from "@/components/project/ProjectMetrics";
import ProjectSection from "@/components/project/ProjectSection";
import ProjectImage from "@/components/project/ProjectImage";

export default function RouteOptimizationPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <ProjectHero
        category="Mathematical Modeling"
        title="Route Optimization Using Dijkstra Algorithm"
        description="
        Applying graph theory and Dijkstra's shortest path algorithm
        to optimize TransJakarta routes toward popular tourist
        destinations in Jakarta.
        "
      />

      <ProjectMetrics
        metrics={[
          {
            label: "Destinations",
            value: "6",
          },
          {
            label: "Bus Stops/Nodes",
            value: "11",
          },

          {
            label: "Edges",
            value: "14",
          },
          {
            label: "Shortest Path",
            value: "9.3 km",
          },
        ]}
      />

      <ProjectSection title="Project Overview">
        <p>
          This project focuses on finding the shortest route between
          TransJakarta bus stops and several popular tourist destinations in
          Jakarta using the Dijkstra Algorithm.
        </p>

        <p className="mt-4">
          The transportation network is modeled as a weighted graph, where each
          bus stop represents a node and each connection represents an edge
          weighted by travel distance.
        </p>

        <p className="mt-4">
          All calculations were performed manually to demonstrate a complete
          understanding of graph theory and shortest path optimization.
        </p>
      </ProjectSection>

      <ProjectSection title="Problem Background">
        <p>
          Jakarta contains numerous tourist attractions connected through the
          TransJakarta Bus Rapid Transit network.
        </p>

        <p className="mt-4">
          Determining the most efficient route can be difficult due to multiple
          transfer points and route alternatives.
        </p>

        <p className="mt-4">
          This project applies graph theory and Dijkstra's Algorithm to identify
          the shortest travel routes from Halte Rawamangun (UNJ) to popular
          destinations.
        </p>
      </ProjectSection>

      <ProjectSection title="Project Objectives">
        <ul className="list-disc pl-6 space-y-3">
          <li>Collect distance information between TransJakarta stops.</li>
          <li>Build a weighted graph representation.</li>
          <li>Apply Dijkstra's shortest path algorithm.</li>
          <li>Determine optimal routes toward tourist destinations.</li>
          <li>Demonstrate practical applications of graph theory.</li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Data Collection">
        <p>Distance data was collected manually using Google Maps.</p>

        <p className="mt-4">
          Each connection between bus stops was recorded and converted into
          graph edges.
        </p>

        <p className="mt-4">
          The resulting network represents major TransJakarta routes leading
          toward popular tourist destinations across Jakarta.
        </p>
      </ProjectSection>

      <ProjectSection title="Graph Modeling">
        <ProjectImage
          src="/projects/route-optimization/graph.png"
          alt="Weighted Graph Representation"
        />

        <p className="mt-6">
          The transportation network is represented as a weighted graph.
        </p>

        <p className="mt-4">
          Vertices represent bus stops while edges represent direct connections
          between stops.
        </p>

        <p className="mt-4">
          Edge weights correspond to travel distance in kilometers.
        </p>
      </ProjectSection>

      <ProjectSection title="Dijkstra Algorithm Methodology">
        <ol className="list-decimal pl-6 space-y-3">
          <li>Initialize the starting node with distance 0.</li>
          <li>Assign infinity to all remaining nodes.</li>
          <li>Select the unvisited node with minimum distance.</li>
          <li>Update neighboring node distances.</li>
          <li>Mark the node as visited.</li>
          <li>Repeat until all nodes have been processed.</li>
        </ol>
      </ProjectSection>

      <ProjectSection title="Manual Iteration Process">
        <p>
          The Dijkstra Algorithm was executed manually across ten iterations.
          Each iteration updates the shortest known distance from Halte
          Rawamangun (UNJ) to all remaining nodes in the network.
        </p>
        <ProjectImage
          src="/projects/route-optimization/iterations.png"
          alt="Dijkstra Iteration Table"
        />
      </ProjectSection>

      <ProjectSection title="Optimization Results (From Rawamangun)">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6">
            <h3 className="text-3xl font-bold">9.3 km</h3>
            <p>Bundaran HI</p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="text-3xl font-bold">9.6 km</h3>
            <p>Monas</p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="text-3xl font-bold">10.7 km</h3>
            <p>GBK</p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="text-3xl font-bold">12.1 km</h3>
            <p>Ancol</p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="text-3xl font-bold">12.2 km</h3>
            <p>TMII</p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="text-3xl font-bold">15.5 km</h3>
            <p>Kota Tua</p>
          </div>
        </div>
      </ProjectSection>
      <ProjectSection title="Real-World Impact">
        <ul>
          <li>Supports efficient route planning.</li>

          <li>Reduces travel distance and commuting time.</li>

          <li>Demonstrates transportation network optimization.</li>

          <li>Illustrates practical implementation of graph theory.</li>

          <li>
            Provides decision-support insights for public transportation users.
          </li>
        </ul>
      </ProjectSection>
      <ProjectSection title="Key Findings & Insights">
        <ul className="list-disc pl-6 space-y-3">
          <li>Shortest routes are not always visually direct routes.</li>
          <li>Simpang Pramuka acts as a major transit hub.</li>
          <li>Flyover Pramuka frequently appears in optimal paths.</li>
          <li>
            Graph theory provides an effective framework for transportation
            optimization.
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Skills Demonstrated">
        <div className="flex flex-wrap gap-3">
          {[
            "Graph Theory",
            "Shortest Path Optimization",
            "Transportation Analytics",
            "Network Modeling",
            "Operations Research",
            "Decision Support Systems",
          ].map((skill) => (
            <span
              key={skill}
              className="
                px-4 py-2
                bg-blue-50
                text-blue-700
                rounded-lg
                text-sm
                font-medium
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </ProjectSection>
    </main>
  );
}
