"use client";

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
              Production Metrics
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

          {/* Video Feed Card */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Live Feed
            </h2>
            <div className="aspect-video overflow-hidden rounded-lg bg-muted/50 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-blue-500/10 p-2.5 text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">
                  Live video feed will appear here
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Connecting camera to videostream
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
