"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/busyBoardLogo_light.svg"
import { BtnDegradedOrange } from "@/components/ui/btn-degraded-orange";
import { NavigationLinks } from "@/lib/constants/notConnectedNavigation";
import useWindowDimensions from "@/hooks/windowDimensions";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import Link from "next/link";


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { width } = useWindowDimensions();


    useEffect(() => {
        // Affiche le menu complet si la largeur de la fenêtre est supérieure à 1024px
        if (width > 1024 && !isMenuOpen) {
            setIsMenuOpen(true);
        } else if (width <= 1024 && isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [width]);

    return (
        <nav className="relative flex flex-row lg:items-center justify-center items-left p-6">
            <div className="flex-1 justify-start">
                <Link href="/">
                        <Image src={Logo} alt="Foresy Logo" width={150} height={50} style={{ width: "auto", height: "auto" }} priority/>
                </Link>
            </div>
            <div className="lg:hidden absolute top-10 right-8 flex items-center z-50">
                {
                    !isMenuOpen ?
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <RxHamburgerMenu size={24} />
                    </button> :
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <TfiClose size={24} />
                    </button>
                }
            </div>
            {
                isMenuOpen &&
                <div className="flex lg:flex-row flex-col lg:flex-2 flex-1 lg:w-full justify-between gap-8 absolute top-10 right-20 bg-white p-6 rounded-xl shadow-lg lg:static lg:bg-transparent lg:shadow-none lg:p-0 lg:rounded-none">
                    <div className="flex lg:flex-row flex-col justify-between items-center gap-8">
                        {
                            NavigationLinks.map((link) => (
                                <Link key={link.label} className={`${link.label.toLowerCase().replace(/\s+/g, '-')}-btn`} href={link.to}>
                                    {link.label}
                                </Link>
                            ))
                        }
                    </div>
                    <div className="flex lg:flex-row items-center lg:gap-4 flex-col gap-8">
                        <Link href="/connexion" className="login-btn">
                            Se connecter
                        </Link>
                        <Link href="/inscription">
                            <BtnDegradedOrange >
                                Créer un compte
                            </BtnDegradedOrange>
                        </Link>
                    </div>
                </div>
            }   
        </nav>
    )
}

export default NavBar;