"use client";

import VideoPlayer from "./components/VideoPlayer";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground">
          Factory{" "}
          <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Dashboard
          </span>
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Data Overview Card */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Boxes
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Total Units Produced</span>
                <span className="font-medium text-foreground">1,248</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Defect Rate</span>
                <span className="font-medium text-green-500">0.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Uptime</span>
                <span className="font-medium text-foreground">98.5%</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Bottles
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Total Units Produced</span>
                <span className="font-medium text-foreground">1978</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Defect Rate</span>
                <span className="font-medium text-green-500">6%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Uptime</span>
                <span className="font-medium text-foreground">99%</span>
              </div>
            </div>
          </div>

          {/* Video Feed Card */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Live Feed
            </h2>
            <VideoPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
