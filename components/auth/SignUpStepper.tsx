"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ISignUpData, SignupStepKey } from "@/lib/types/auth";
import { IOptionsStep, IAuthStep, IFormStep } from "@/lib/types/signUp";
import SignUpSteps from "@/lib/constants/signUpSteps";
import OptionsStepComponent from "./OptionsStepComponent";
import SearchStepComponent from "./SearchStepComponent";
import AuthStepComponent from "./AuthStepComponent";
import FormStepComponent from "./FormStepComponent";
import { BackButton } from "../ui/back-btn";



const SignUpStepper = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [signUpData, setSignUpData] = useState<ISignUpData>({});
  const [searchResults, setSearchResults] = useState<Array<{ id: string; name: string; siren: string; address: string }>>([]);

  const stepKeys: SignupStepKey[] = ["STEP_ONE", "STEP_TWO", "STEP_TWO_BIS", /*"STEP_THREE",*/ "STEP_FOUR", "STEP_FIVE", "STEP_SIX"];
  const currentStepKey : SignupStepKey = stepKeys[currentStepIndex];
  const currentStep = SignUpSteps[currentStepKey];

  const router = useRouter();

  const handleNext = (companySize?: string) => {
    if (currentStepIndex < stepKeys.length - 1) {
      if (currentStepKey === "STEP_TWO") {
        // If company size is INDEPENDENT, go to STEP_TWO_BIS, else skip it
        companySize === "INDEPENDENT" ? 
          setCurrentStepIndex(currentStepIndex + 1) :
          setCurrentStepIndex(currentStepIndex + 2) ;
      }
      else 
        setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      console.log('currentStepKey', currentStepKey);
      console.log('signUpData', signUpData);
      // Special case: if going back from STEP_FOUR and companySizeDetail 
      // (meaning STEP_TWO_BIS was skipped) is not set, skip STEP_TWO_BIS
      if (currentStepKey === "STEP_FOUR" && signUpData.companySizeDetail === undefined) {
        setCurrentStepIndex(currentStepIndex - 2);
      }
      else 
        setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleStepOneSelect = (value: string) => {
    setSignUpData({ ...signUpData, activityStatus: value });
    setTimeout(handleNext, 300);
  };

  const handleStepTwoSelect = (value: string) => {
    setSignUpData({ 
      ...signUpData, 
      companySize: value,
      companySizeDetail: undefined // Reset detail if going back
    });
    setTimeout(() => handleNext(value), 300);
  };

  const handleStepTwoBisSelect = (value: string) => {
    setSignUpData({ ...signUpData, companySizeDetail: value });
    setTimeout(handleNext, 300);
  };
    
  const handleSearch = (query: string) => {

  
  };

  const handleCompanySelect = (companyId: string) => {
    setSignUpData({ ...signUpData, selectedCompany: companyId });
    setTimeout(handleNext, 300);

  };

  const handleStepFourSelect = (value: string) => {
    setSignUpData({ ...signUpData, isRegulated: value });
    setTimeout(handleNext, 300);
  };

  const handleAuthMethodSelect = (method: string) => {
    if (method === "EMAIL") {
      setTimeout(handleNext, 300);
    } else {
      // Implement OAuth 
    }
  };

  const handleFormSubmit = (formData: Record<string, string>) => {
    console.log("Form Data:", formData);
    setSignUpData({ ...signUpData, ...formData });
    console.log("Final signup data:", { ...signUpData, ...formData });
    // TODO: Submit to API
  };


  const renderStep = () => {
    switch (currentStepKey) {
      case "STEP_ONE":
        return (
          <OptionsStepComponent
            step={currentStep as IOptionsStep}
            onSelect={handleStepOneSelect}
            selectedValue={signUpData.activityStatus}
          />
        );

      case "STEP_TWO":
        return (
          <OptionsStepComponent
            step={currentStep as IOptionsStep}
            onSelect={handleStepTwoSelect}
            selectedValue={signUpData.companySize}
          />
        );
      
      case "STEP_TWO_BIS":
        return (
          <OptionsStepComponent
            step={currentStep as IOptionsStep}
            onSelect={handleStepTwoBisSelect}
            selectedValue={signUpData.companySizeDetail}
          />
        );

      /*case "STEP_THREE":
        return (
          <SearchStepComponent
            step={currentStep as SearchStep}
            onSearch={handleSearch}
            onSelect={handleCompanySelect}
            searchResults={searchResults}
          />
        );*/

      case "STEP_FOUR":
        return (
          <OptionsStepComponent
            step={currentStep as IOptionsStep}
            onSelect={handleStepFourSelect}
            selectedValue={signUpData.isRegulated}
          />
        );

      case "STEP_FIVE":
        return (
          <AuthStepComponent
            step={currentStep as IAuthStep}
            onSelectMethod={handleAuthMethodSelect}
          />
        );

      case "STEP_SIX":
        return (
          <FormStepComponent
            onSubmit={handleFormSubmit}
          />  
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full">
     
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">{currentStep.title}</h3>
        <p className="text-base text-gray-500 font-normal text-left">
          { currentStep.description }
        </p>
      </div>

      {
        renderStep()
      }
      {
        currentStepIndex > 0 ?
           (
            // Go back to previous step
            <BackButton onClick={handleBack} />
          ) :
          // Go back to previous page
          <BackButton onClick={router.back} /> 
      }
    </div>
  );
};

export default SignUpStepper;
