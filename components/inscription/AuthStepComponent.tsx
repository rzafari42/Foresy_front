"use client";

import { IAuthStep } from "@/lib/types/signUp";
import { SIGNUP_METHOD } from "@/lib/constants/signUpSteps";
  
interface AuthStepComponentProps {
  step: IAuthStep;
  onSelectMethod: (method: string) => void;
}

// Component for the authentication step with different signup options (e.g., Google, LinkedIn, Email)
const AuthStepComponent = ({ step, onSelectMethod }: AuthStepComponentProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {
        step.signupOptions.map((option, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 w-full"
          >
            {
              option.type === SIGNUP_METHOD.EMAIL && 
              <div className="flex flex-row items-center gap-4 text-base text-gray-400 font-medium">
                  <div className="flex-1 h-px bg-gray-200"/>
                  <span>ou en utilisant votre email</span>
                  <div className="flex-1 h-px bg-gray-200"/>
              </div>
            }
            <button
              onClick={() => onSelectMethod(option.type)}
              className="w-full flex justify-center gap-3 items-center px-16 py-3 border border-gray-300 rounded-3xl hover:cursor-pointer"
            >
              <div className="w-6 h-6 relative flex-shrink-0">
                <option.icon size={24} />
              </div>
              <span className="text-base font-medium">{option.label}</span>
            </button>
          </div>
      ))}
    </div>
  );
};

export default AuthStepComponent;
