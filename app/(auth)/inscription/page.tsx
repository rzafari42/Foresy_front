import SignUpStepper from "@/components/auth/SignUpStepper"


const Inscription = () => {
    return (
        <section className="flex flex-col justify-self-center gap-8 w-full">
            <h2 className="text-4xl font-bold">Nous rejoindre</h2>
            <SignUpStepper />
        </section>
    )
}

export default Inscription;