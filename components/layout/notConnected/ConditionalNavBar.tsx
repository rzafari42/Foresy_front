'use client';

import { usePathname } from 'next/navigation';
import NavBar from '@/components/layout/notConnected/navBar';

export default function ConditionalNavBar() {
  const pathname = usePathname();
  
  // Liste des routes où la NavBar ne doit pas être affichée
  const hideNavBarRoutes = ['/connexion', '/inscription', "/mot-de-passe-oublie"];
  
  if (hideNavBarRoutes.includes(pathname)) {
    return null;
  }
  
  return <NavBar />;
}
