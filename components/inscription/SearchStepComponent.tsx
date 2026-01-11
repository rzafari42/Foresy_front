"use client";

import { SearchStep } from "@/lib/constants/signUpSteps";
import { useState } from "react";
import { IoMdSearch, IoIosAlert, IoIosClose } from "react-icons/io";
import { BtnDegradedOrange } from "../ui/btn-degraded-orange";

interface SearchStepComponentProps {
  step: SearchStep;
  onSearch: (query: string) => void;
  onSelect: (companyId: string) => void;
  searchResults?: Array<{ id: string; name: string; siren: string; address: string }>;
  isLoading?: boolean;
}


// Bar de recherche //

const SearchStepComponent = ({ step, onSearch, onSelect, searchResults = [], isLoading = false }: SearchStepComponentProps) => {
  const [query, setQuery] = useState("");
  const [printAlert, setPrintAlert] = useState(true);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length >= 2) {
      onSearch(value);
    }
  };

  const handleSelect = (id: string) => {
    onSelect(id);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center relative p-2 gap-3 border border-gray-300 rounded-lg">
        <div className=" text-gray-400">
          <IoMdSearch size={20} />
        </div>
        <input
          type="text"
          placeholder={step.searchBar.placeHolder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full focus:outline-none"
        />
        <BtnDegradedOrange onClick={() => onSearch(query)} style="right-4 rounded-lg px-4 py-2 text-sm">
          Rechercher
        </BtnDegradedOrange>
      </div>

      {/* Alert */}
      {
          printAlert && (
            <div className="flex flex-col gap-3 p-4 bg-blue-100 rounded-lg">
                <div className="flex items-center text-blue-700 gap-3">
                    <IoIosAlert size={20} />
                    <p className="text-base font-semibold text-blue-700">{step.alert.label}</p>
                    <button  className="ml-auto cursor-pointer" onClick={() => setPrintAlert(false)}>
                      <IoIosClose size={20}  />
                    </button>
                </div>
                <p className="text-sm text-blue-700">{step.alert.description}</p>
            </div>
          )
      }

      {/* Loading State */}
      {
        isLoading && (
            <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
            </div>
        )
      }

      {/* Search Results */}
      {!isLoading && searchResults.length > 0 && (
        <div className="flex flex-col gap-3">
          {searchResults.map((result) => (
            <button
              key={result.id}
              onClick={() => handleSelect(result.id)}
              className="flex flex-col p-4 border border-gray-200 rounded-lg text-left transition-all hover:bg-orange-50 cursor-pointer"
            >
              <h4 className="text-base font-semibold mb-1">
                {result.name} - {result.siren}
              </h4>
              <p className="text-sm text-gray-500">{result.address}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchStepComponent;
