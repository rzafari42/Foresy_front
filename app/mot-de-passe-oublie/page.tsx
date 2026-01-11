'use client'
import Link from "next/link";
import { useForm, SubmitHandler} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordInputs, forgotPasswordSchema } from "@/lib/schemas";
import OnboardingConnexion from "@/components/layout/notConnected/OnboardingConnexion";

const ForgotterPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordInputs>({
        resolver: zodResolver(forgotPasswordSchema)
    });
    
    const onSubmit: SubmitHandler<ForgotPasswordInputs> = (data) => {
        console.log(data);
    };

    return(
        <OnboardingConnexion>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2 w-full">
                    <h2 className="text-4xl font-bold">Réinitialiser <br /> votre mot de passe</h2>
                    <p className="text-sm">
                        Saisissez l’adresse email que vous utilisez habituellement pour vous connecter à BusyBoard.
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm text-gray-900">Email :</label>
                        <div className="flex flex-col justify-center items-start w-full gap-1">
                            <input 
                                id="email"
                                type="email" 
                                {...register("email")} 
                                placeholder="exemple@mail.com"
                                className="w-full px-4 py-3.5 border border-gray-300 text-gray-500 text-base rounded-md"
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                        </div>
                    </div>
                    <input type="submit" className="text-white text-base font-medium py-2.5 px-5 rounded-3xl focus:outline-none bg-gradient-to-r from-[#FF8A4C] to-[#F05252] cursor-pointer" value="Réinitialiser le mot de passe" />
                </form>
                <Link href="/connexion" className="text-sm text-gray-500 font-medium self-center">
                    Vous avez déjà un compte ? <span className="underline">Se connecter</span>
                </Link>
            </div>
        </OnboardingConnexion>
    )
}

export default ForgotterPassword;