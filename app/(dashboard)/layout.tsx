'use client';
import DashboardNavBar from "@/components/dashboardNavBar";
import HeaderDashboard from "@/components/headerDashboard";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  

  return (
    <div className="flex p-4 gap-2 min-h-screen bg-white">
      <DashboardNavBar />
      <section className="relative z-0 flex flex-1 flex-col p-6 gap-4 rounded-3xl bg-gray-50">
        <HeaderDashboard />
        <div className="flex flex-col gap-4">
          {children}
        </div>
      </section>
    </div>
  )
}

export default DashboardLayout;