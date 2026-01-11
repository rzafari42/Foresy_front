"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SignUpSteps, { OptionsStep, SearchStep, AuthStep, FormStep } from "@/lib/constants/signUpSteps";
import OptionsStepComponent from "./OptionsStepComponent";
import SearchStepComponent from "./SearchStepComponent";
import AuthStepComponent from "./AuthStepComponent";
import FormStepComponent from "./FormStepComponent";
import { BackButton } from "../ui/back-btn";

type StepKey = "STEP_ONE" | "STEP_TWO" /*| "STEP_THREE"*/ | "STEP_FOUR" | "STEP_FIVE" | "STEP_SIX";

interface SignUpData {
  activityStatus?: string;
  companySize?: string;
  selectedCompany?: string;
  isRegulated?: string;
  authMethod?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const SignUpStepper = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [signUpData, setSignUpData] = useState<SignUpData>({});
  const [searchResults, setSearchResults] = useState<Array<{ id: string; name: string; siren: string; address: string }>>([]);

  const stepKeys: StepKey[] = ["STEP_ONE", "STEP_TWO"/*, "STEP_THREE"*/, "STEP_FOUR", "STEP_FIVE", "STEP_SIX"];
  const currentStepKey = stepKeys[currentStepIndex];
  const currentStep = SignUpSteps[currentStepKey];

  const router = useRouter();
  

  const handleNext = () => {
    if (currentStepIndex < stepKeys.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleStepOneSelect = (value: string) => {
    setSignUpData({ ...signUpData, activityStatus: value });
    console.log('Signu Data:', signUpData);
    setTimeout(handleNext, 300);
  };

  const handleStepTwoSelect = (value: string) => {
    setSignUpData({ ...signUpData, companySize: value });
    console.log('Signu Data:', signUpData);
    setTimeout(handleNext, 300);
  };

  const handleSearch = (query: string) => {
    // TODO: Implement actual API call
    // Simulate search results
    setTimeout(() => {
      setSearchResults([
        {
          id: "1",
          name: "Entreprise Exemple",
          siren: "123456789",
          address: "123 Rue de la Paix, 75001 Paris",
        },
        {
          id: "2",
          name: "Auto-Entreprise Test",
          siren: "987654321",
          address: "45 Avenue des Champs, 75008 Paris",
        },
      ]);
    }, 500);
  };

  const handleCompanySelect = (companyId: string) => {
    setSignUpData({ ...signUpData, selectedCompany: companyId });
    console.log('Signu Data:', signUpData);
    setTimeout(handleNext, 300);
  };

  const handleStepFourSelect = (value: string) => {
    setSignUpData({ ...signUpData, isRegulated: value });
    console.log('Signu Data:', signUpData);
    setTimeout(handleNext, 300);
  };

  const handleAuthMethodSelect = (method: string) => {
    setSignUpData({ ...signUpData, authMethod: method });
    if (method === "EMAIL") {
      setTimeout(handleNext, 300);
    } else {
      // TODO: Handle OAuth flow
      console.log("OAuth flow for:", method);
    }
  };

  const handleFormSubmit = (formData: Record<string, string>) => {
    setSignUpData({ ...signUpData, ...formData });
    // TODO: Submit to API
    console.log("Final signup data:", { ...signUpData, ...formData });
    alert("Inscription réussie ! (TODO: Implement API call)");
  };

  const renderStep = () => {
    switch (currentStepKey) {
      case "STEP_ONE":
        return (
          <OptionsStepComponent
            step={currentStep as OptionsStep}
            onSelect={handleStepOneSelect}
            selectedValue={signUpData.activityStatus}
          />
        );

      case "STEP_TWO":
        return (
          <OptionsStepComponent
            step={currentStep as OptionsStep}
            onSelect={handleStepTwoSelect}
            selectedValue={signUpData.companySize}
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
            step={currentStep as OptionsStep}
            onSelect={handleStepFourSelect}
            selectedValue={signUpData.isRegulated}
          />
        );

      case "STEP_FIVE":
        return (
          <AuthStepComponent
            step={currentStep as AuthStep}
            onSelectMethod={handleAuthMethodSelect}
          />
        );

      case "STEP_SIX":
        return (
          <FormStepComponent
            step={currentStep as FormStep}
            onSubmit={handleFormSubmit}
            defaultValues={{
              firstName: signUpData.firstName || "",
              lastName: signUpData.lastName || "",
              email: signUpData.email || "",
              password: signUpData.password || "",
            }}
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
          currentStepKey !== "STEP_SIX" && (
            <BackButton onClick={handleBack} />
          ) :
          <BackButton onClick={router.back} />
      }
    </div>
  );
};

export default SignUpStepper;
