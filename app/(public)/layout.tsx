import PublicNavBar from "@/components/publicNavBar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <PublicNavBar />
        <main>
          {children}
        </main>
    </>
  )
}

export default PublicLayout;