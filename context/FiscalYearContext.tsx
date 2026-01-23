import { createContext } from "react";

const nowYear = new Date().getFullYear();

export const FiscalYearContext = createContext<number | null>(nowYear);