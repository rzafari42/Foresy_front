import OnboardingConnexion from "@/components/OnboardingConnexion";


const ConnectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
        <OnboardingConnexion>
            {children}
        </OnboardingConnexion>
    </main>
  )
}

export default ConnectionLayout;