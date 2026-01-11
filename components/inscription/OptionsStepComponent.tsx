"use client";

import { OptionsStep } from "@/lib/constants/signUpSteps";
import { useState } from "react";

interface OptionsStepComponentProps {
  step: OptionsStep;
  onSelect: (value: string) => void;
  selectedValue?: string;
}

const OptionsStepComponent = ({ step, onSelect, selectedValue }: OptionsStepComponentProps) => {

  const handleSelect = (value: string) => {
    onSelect(value);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {
        step.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(option.value ? option.value : "")}
            className="flex flex-col p-6 border border-gray-200 rounded-lg text-left transition-all hover:bg-orange-50 cursor-pointer"
          >
            <h4 className="text-lg font-semibold mb-1">{option.label}</h4>
            {option.description && (
              <p className="text-sm text-gray-600">{option.description}</p>
            )}
          </button>
        ))
      }
    </div>
  );
};

export default OptionsStepComponent;
