import { INavLink } from "@/lib/types/nav";
import { RiHomeLine, RiFilePaper2Line, RiPieChartLine, RiSettingsLine, RiLogoutBoxRLine } from "react-icons/ri";
import { RxBackpack } from "react-icons/rx";
import { LuHeartHandshake } from "react-icons/lu";

export const ConnectedNavigationLinks : 
    { top: INavLink[], bottom: INavLink[] } = {
    top : [
        { 
            label: "Tableau de bord", 
            to: "/dashboard",
            icon: RiHomeLine,
        },
        { 
            label: "Bizdev", 
            to: "/bizdev",
            icon: RxBackpack,
        },
        { 
            label: "Missions", 
            to: "/projects" ,
            icon: LuHeartHandshake,

        },
        { 
            label: "Charges", 
            to: "/expenses",
            icon: RiFilePaper2Line,
        },
        { 
            label: "Budget prévisionnel", 
            to: "/budget",
            icon: RiPieChartLine,
        },
    ],
    bottom : [
        { 
            label: "Paramètres", 
            to: "/settings",
            icon: RiSettingsLine,
        },
        { 
            label: "Déconnexion", 
            to: "/", // Temporary redirect to home page. Time to implement logout logic.
            //to: "/logout",
            icon: RiLogoutBoxRLine,
        },
    ] 
}