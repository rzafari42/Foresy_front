'use client';
import DashboardNavBar from "@/components/dashboardNavBar";
import HeaderDashboard from "@/components/headerDashboard";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  

  return (
    <div className="flex p-4 gap-2 h-screen bg-white">
      <DashboardNavBar />
      <section className="relative z-0 flex flex-1 flex-col flex-grow p-6 gap-4 rounded-3xl bg-gray-50">
        <HeaderDashboard />
        {children}
      </section>
    </div>
  )
}

export default DashboardLayout;