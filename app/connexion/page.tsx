"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInInputs, signInSchema } from "@/lib/schemas/schemas";
import { SignInAPI } from "@/lib/api/auth";
import OnboardingConnexion from "@/components/layout/notConnected/OnboardingConnexion";
import { BackButton } from "@/components/ui/back-btn";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { googleAuth, githubAuth } from "@/lib/api/auth";

const ConnexionPage = () => {

    const router = useRouter();

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<SignInInputs>({
        resolver: zodResolver(signInSchema)
    });

    const connectOAuth = (type : string) => {
        switch (type) {
            case "google":
                googleAuth();
                break;
            case "github":
                githubAuth();
                break;
            default:
                break;
        }
        return;
    }

    const onSubmit: SubmitHandler<SignInInputs> = async (data) => {
        console.log("Registration Data:", data);

        await SignInAPI(data)
            .then((response) => {
                console.log("Signin successful:", response);
            })
            .catch((error) => {
                console.error("Signin error:", error);
            });
    };
    
    return (
        <OnboardingConnexion>
            <div className="flex flex-col justify-self-center gap-8 w-full">
                <h2 className="text-4xl font-bold">Ravi de vous revoir</h2>
                <div className="flex flex-col gap-2">
                    <button 
                        className="flex flex-row justify-center items-center lg:px-20 px-10 lg:py-4 py-2 gap-4 border border-gray-300 rounded-3xl text-base hover:cursor-pointer"
                        onClick={() => connectOAuth("google")}
                    >
                        <FcGoogle size={20} />
                        <span>Se connecter avec Google</span>
                    </button>
                    <button 
                        className="flex flex-row justify-center items-center lg:px-20 px-10 lg:py-4 py-2 gap-4 border border-gray-300 rounded-3xl text-base hover:cursor-pointer"
                        onClick={() => connectOAuth("github")}
                    >   
                        <FaGithub size={20} />
                        <span>Se connecter avec Github</span>
                    </button>
                </div>
                <div className="flex flex-row items-center gap-4 text-base text-gray-400 font-medium">
                    <div className="flex-1 h-px bg-gray-200"/>
                    <span>ou en utilisant votre email</span>
                    <div className="flex-1 h-px bg-gray-200"/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                    <div className="flex flex-col justify-center items-start gap-2">
                        <label htmlFor="email" className="text-sm text-gray-900">Email :</label>
                        <div className="flex flex-col justify-center items-start w-full gap-1">
                            <input 
                                id="email"
                                type="email" 
                                {...register("email")} 
                                placeholder="exemple@mail.com"
                                className="w-full px-4 py-3.5 border border-gray-300 text-balck text-base rounded-md"
                            />
                            {
                                errors.email && 
                                    <span className="text-red-500 text-sm">
                                        {errors.email.message}
                                    </span>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex justify-between w-full">
                            <label htmlFor="password" className="text-sm text-gray-900">Mot de passe :</label>
                            <Link href="/mot-de-passe-oublie" className="underline text-sm ">
                                Mot de passe oublié ?
                            </Link>
                        </div>
                        <div className="flex flex-col justify-center items-start w-full gap-1">
                            <input 
                                id="password"
                                type="password" 
                                {...register("password")} 
                                placeholder="********"
                                className="w-full px-4 py-3.5 border border-gray-300 text-black text-base rounded-md"
                            />
                            {
                                errors.password && 
                                    <span className="text-red-500 text-sm">
                                        {errors?.password.message}
                                    </span>
                            }
                        </div>
                    </div>
                    <input type="submit" className="text-white text-base font-medium py-2.5 px-5 rounded-3xl focus:outline-none bg-gradient-to-r from-[#FF8A4C] to-[#F05252] cursor-pointer" value="Se connecter" />
                </form>
                <Link href="/inscription" className="text-sm text-gray-500 font-medium self-center">
                    Vous n’avez pas de compte ? <span className="underline">Rejoignez-nous</span>
                </Link>
                <BackButton onClick={() => router.back()} />
            </div>
        </OnboardingConnexion>
    )
};

export default ConnexionPage;