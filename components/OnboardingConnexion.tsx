"use client";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import Stack from "@/public/images/stack.svg"
import Logo from "@/public/images/busyBoardLogo_light.svg"

const OnboardingConnexion = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();
    
    return (
        <div className="flex flex-row w-full min-h-screen">
            <div className="hidden lg:flex flex-col bg-linear-to-r from-[#FF8A4C] to-[#F05252] w-1/2 justify-center items-center">
                <Image src={Stack} alt="Foresy Logo"/>
                <h1 className="text-white text-xl mt-8">Additional information about benefit</h1>
            </div>
            <div className="flex flex-col py-10 px-24 lg:w-1/2 w-full items-start lg:text-left text-center gap-32">
                <Link href="/" className="">
                    <Image src={Logo} alt="Foresy Logo"  />
                </Link>
                {
                    children
                }
            </div>
        </div>
    )

}

export default OnboardingConnexion;