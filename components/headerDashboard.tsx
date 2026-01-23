import { usePathname } from "next/navigation";
import { ConnectedNavigationLinks } from "@/lib/constants/connectedNavigation";
import FiscalYearSelector from "./FiscalYearSelector";
import Notification from "./notification";

const HeaderDashboard = () => {
    const pathname = usePathname();
    const pathnameLabel = ConnectedNavigationLinks.top.concat(ConnectedNavigationLinks.bottom).find(link => link.to === pathname)?.label
    const printNotification = pathnameLabel !== 'Paramètres';
    
    return (
        <div className="flex w-full gap-6">
            <header className="flex flex-1 justify-between items-center rounded-2xl bg-white p-4">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        {pathnameLabel}
                    </h1>
                    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2">
                        <FiscalYearSelector />
                    </div>
                </div>
            </header>
            {
                printNotification &&
                <Notification />
            }
        </div>
    )
}

export default HeaderDashboard;