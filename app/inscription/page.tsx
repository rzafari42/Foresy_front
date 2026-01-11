import OnboardingConnexion from "@/components/layout/notConnected/OnboardingConnexion"
import SignUpStepper from "@/components/inscription/SignUpStepper"
import { BackButton } from "@/components/ui/back-btn";


const Inscription = () => {
    return (
        <OnboardingConnexion>
            <div className="flex flex-col justify-self-center gap-8 w-full">
                <h2 className="text-4xl font-bold">Nous rejoindre</h2>
                <SignUpStepper />
            </div>
        </OnboardingConnexion>
    )
}

export default Inscription;