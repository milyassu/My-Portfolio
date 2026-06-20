"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Trophy, Award, GraduationCap } from "lucide-react";

const stats = [
  {
    value: "4",
    label: "Projects",
    icon: Briefcase,
    color: "text-blue-500 bg-blue-500/10 dark:bg-blue-500/20",
    borderColor: "hover:border-blue-500/30",
  },
  {
    value: "7",
    label: "Awards",
    icon: Trophy,
    color: "text-amber-500 bg-amber-500/10 dark:bg-amber-500/20",
    borderColor: "hover:border-amber-500/30",
  },
  {
    value: "2",
    label: "Certifications",
    icon: Award,
    color: "text-purple-500 bg-purple-500/10 dark:bg-purple-500/20",
    borderColor: "hover:border-purple-500/30",
  },
  {
    value: "3.60",
    label: "GPA",
    icon: GraduationCap,
    color: "text-emerald-500 bg-emerald-500/10 dark:bg-emerald-500/20",
    borderColor: "hover:border-emerald-500/30",
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 w-full">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`group flex items-center gap-3.5 p-4 rounded-xl border border-border/60 bg-card/45 backdrop-blur-xs transition-all duration-300 ${stat.borderColor} hover:shadow-md hover:bg-card`}
          >
            <div className={`p-2.5 rounded-lg transition-colors duration-300 ${stat.color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-foreground leading-none tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1.5 font-medium">
                {stat.label}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
