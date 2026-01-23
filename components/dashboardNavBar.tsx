'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/images/busyBoardLogo_light.svg"
import LogoReduced from "@/public/images/busyBoardLogo_reduced.svg"
import { ConnectedNavigationLinks } from "@/lib/constants/connectedNavigation";
import { BsShopWindow } from "react-icons/bs";
import ArrowFoldBtn from "./ui/arrow-fold-btn";

const DashboardNavBar = () => {

  const path = usePathname()
  const [ isMenuOpen, setIsMenuOpen ] =  useState(true);

  const NavLinks = ({ links }: { links: typeof ConnectedNavigationLinks.top }) => {
    const linkClassName = (linkPath: string) => 
      `flex gap-2 px-4 py-2 rounded-2xl items-center text-base hover:bg-white! hover:text-orange-700! ${isMenuOpen ? 'w-full' : ''} ${path === linkPath ? 'bg-white! text-orange-700!' : ''}`;

    return (
      <>
        {
          links.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.label} href={link.to} className={linkClassName(link.to)}>
                {
                  Icon && 
                  <Icon size={16} />
                }
                {
                  isMenuOpen && link.label
                }
              </Link>
            );
          })}
      </>
    );
  };

  return (
    <nav className="relative flex flex-col rounded-3xl items-center bg-gray-100 overflow-visible h-full w-auto z-50">
      <div className="flex h-full w-full flex-col items-center gap-4 py-6 px-2 overflow-y-auto overflow-x-visible">
        {/* Fold button */}
          <div className="absolute top-[50%] -right-4 z-10">
            <ArrowFoldBtn isFold={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>

          <button className="flex rounded-2xl gap-2 px-4 py-2 items-baseline justify-center bg-gradient-orange-light text-orange-700 font-normal hover:cursor-pointer">
            <BsShopWindow size={16} />
            {
            isMenuOpen && 'Firstname Lastname'
            }
          </button>

          {/* Separator */}
          <span className="flex flex-col w-full h-0.25 bg-gray-200"></span>

          {/* Top navigation links */}
          <div className={`flex flex-col gap-2 w-full ${isMenuOpen ? 'items-start' : 'items-center'}`}>
            <NavLinks links={ConnectedNavigationLinks.top} />
          </div>
          
          {/* Bottom navigation links */}
          <div className={`flex flex-col gap-2 mt-auto w-full ${isMenuOpen ? 'items-start' : 'items-center'}`}>
            <NavLinks links={ConnectedNavigationLinks.bottom} />
          </div>

          {/* Logo */}
          <Link href='/dashboard' className={`flex mt-4 items-start w-full ${isMenuOpen ? 'justify-start' : 'justify-center'}`}>
            <Image 
              src={isMenuOpen ? Logo : LogoReduced} 
              alt="Foresy Logo" 
              width={isMenuOpen ? 150 : 30} 
              height={50} 
              priority
            />
          </Link>
      </div>
    </nav>
  )
}

export default DashboardNavBar;