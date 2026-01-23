import { useContext, useState } from "react";
import {  Dropdown, DropdownItem } from "flowbite-react";
import { GetAvailableYears } from "@/lib/utils/date";
import { FiscalYearContext } from "@/context/FiscalYearContext";

const dropdownTheme = {
  floating: {
    base: "items-center z-10 w-fit border border-gray-200 bg-white text-black shadow-lg !rounded-xl",
    item: {
      base: "flex w-full cursor-pointer items-center justify-center text-sm !text-black bg-white hover:!bg-gray-100 rounded-xl",
    }
  }
};

const FiscalYearSelector = () => {
    const currentFiscalYear = useContext(FiscalYearContext);
    const [fiscalYear, setFiscalYear] = useState<number | null>(currentFiscalYear);

    const availableYears = GetAvailableYears(5);
    return (
        <Dropdown
          label={`Exercice ${fiscalYear}`}
          inline={true}
          arrowIcon={true}
          className="!bg-white border border-gray-200 rounded-xl mt-2 !p-0 justify-center items-center"
          theme={dropdownTheme}
        >
        {
            availableYears.map((y) => (
                <DropdownItem 
                    key={y} 
                    onClick={() => setFiscalYear(Number(y))} 
                >
                    {y}
                </DropdownItem>
            ))
        }
        </Dropdown>
    );
}

export default FiscalYearSelector;