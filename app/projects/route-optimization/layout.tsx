import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Route Optimization Using Dijkstra Algorithm",
  description: "Applying graph theory and Dijkstra's shortest path algorithm to optimize TransJakarta routes toward popular tourist destinations in Jakarta.",
  openGraph: {
    title: "Route Optimization Using Dijkstra Algorithm | Mohammad Ilyas Suud",
    description: "Applying graph theory and Dijkstra's shortest path algorithm to optimize TransJakarta routes toward popular tourist destinations in Jakarta.",
    type: "article",
    images: [
      {
        url: "/projects/route-optimization/graph.png",
        width: 500,
        height: 350,
        alt: "Route Optimization Graph Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Route Optimization Using Dijkstra Algorithm | Mohammad Ilyas Suud",
    description: "Applying graph theory and Dijkstra's shortest path algorithm to optimize TransJakarta routes toward popular tourist destinations in Jakarta.",
    images: ["/projects/route-optimization/graph.png"],
  },
};

export default function RouteOptimizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
