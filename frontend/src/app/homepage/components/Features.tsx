"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Brain,
  Eye,
  BarChart3,
  Zap,
  Cpu,
  FunnelPlus,
} from "lucide-react";

const features = [
  {
    title: "Advanced AI Models",
    description:
      "Leverage state-of-the-art computer vision models for accurate image and video analysis.",
    icon: Brain,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Real-time Processing",
    description:
      "Process visual data in real-time with our high-performance AI infrastructure.",
    icon: Zap,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    title: "Object Detection",
    description:
      "Identify and track multiple objects with high precision and confidence scores.",
    icon: Eye,
    gradient: "from-blue-400 to-purple-500",
  },
  {
    title: "Detailed Analytics",
    description:
      "Gain insights with comprehensive analytics and visualizations of your visual data.",
    icon: BarChart3,
    gradient: "from-purple-400 to-blue-500",
  },
  {
    title: "Factory Automation",
    description:
      "Enhance production lines with real-time visual monitoring and automated quality control systems.",
    icon: Cpu,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Defect Filtration",
    description:
      "Automatically identify and classify manufacturing defects in real-time with high accuracy using advanced computer vision.",
    icon: FunnelPlus,
    gradient: "from-purple-600 to-blue-600",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-30 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 -z-10 h-77.5 w-77.5 rounded-full bg-purple-500/20 blur-[100px]" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-background via-background/80 to-background" />
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Powerful Features for Your Vision
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to build intelligent computer vision
            applications
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border border-border/40 bg-background/50 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:shadow-lg"
            >
              <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader className="pb-3">
                <div
                  className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-r ${feature.gradient} text-white`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Ready to get started?{" "}
            <a
              href="/dashboard"
              className="font-medium text-blue-500 transition-colors hover:text-blue-400"
            >
              Try Novum
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
