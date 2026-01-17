
export interface ISignUpData {
  activityStatus?: string;
  companySize?: string;
  companySizeDetail?: string;
  selectedCompany?: string;
  isRegulated?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}


export type SignupStepKey = "STEP_ONE" | "STEP_TWO" | "STEP_TWO_BIS" /*| "STEP_THREE"*/ | "STEP_FOUR" | "STEP_FIVE" | "STEP_SIX";
