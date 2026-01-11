import { size, z } from "zod";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// ===========================
// Types & Constants
// ===========================

export const SIGNUP_METHOD = {
  OAUTH: "OAUTH",
  EMAIL: "EMAIL",
} as const;

export const BUTTON_TYPE = {
  SUBMIT: "SUBMIT",
} as const;

export const ACTIVITY_STATUS = {
  REGISTERED: "REGISTERED",
  IN_CREATION: "IN_CREATION",
} as const;

export const COMPANY_SIZE = {
  INDEPENDENT: "INDEPENDENT",
  SMALL: "SMALL",
  LARGE: "LARGE",
} as const;

export const REGULATED_STATUS = {
  YES: "YES",
  NO: "NO",
} as const;

// ===========================
// Interfaces
// ===========================

export interface StepOption {
  label: string;
  description?: string;
  value?: string;
}

export interface BaseStep {
  title: string;
  description: string;
}

export interface OptionsStep extends BaseStep {
  options: StepOption[];
}

export interface SearchStep extends BaseStep {
  searchBar: {
    placeHolder: string;
  };
  alert: {
    label: string;
    description: string;
  };
}

export interface SignupMethodOption {
  type: typeof SIGNUP_METHOD[keyof typeof SIGNUP_METHOD];
  label: string;
  icon: React.ComponentType<{ size: number }>;
}

export interface AuthStep {
  title?: string;
  description?: string;
  signupOptions: SignupMethodOption[];
}

export interface FormField {
  label: string;
  placeholder: string;
  type?: string;
  name?: string;
}

export interface FormButton {
  type: typeof BUTTON_TYPE[keyof typeof BUTTON_TYPE];
  label: string;
}

export interface FormStep {
  title?: string;
  description?: string;
  fields: {
    first_line: FormField[];
    second_line: FormField[];
    third_line: FormField[];
  };
  buttons: FormButton[];
}

// ===========================
// Validation Schemas (Zod)
// ===========================

export const stepOneSchema = z.object({
  activityStatus: z.enum([ACTIVITY_STATUS.REGISTERED, ACTIVITY_STATUS.IN_CREATION]),
});

export const stepTwoSchema = z.object({
  companySize: z.enum([COMPANY_SIZE.INDEPENDENT, COMPANY_SIZE.SMALL, COMPANY_SIZE.LARGE]),
});

export const stepThreeSchema = z.object({
  searchQuery: z.string().min(1, "La recherche ne peut pas être vide"),
  selectedCompany: z.string().optional(),
});

export const stepFourSchema = z.object({
  isRegulated: z.enum([REGULATED_STATUS.YES, REGULATED_STATUS.NO]),
});

export const stepSixSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
});

// ===========================
// Sign Up Steps Configuration
// ===========================

const SignUpSteps = {
  STEP_ONE: {
    title: "Quelle situation correspond le mieux à votre activité ?",
    description: "Afin de mieux vous connaître et de personnaliser votre expérience, dites-nous si votre activité est déjà immatriculée ou en cours de création.",
    options: [
      {
        label: "Mon activité est immatriculée",
        description: "Vous disposez d'un numéro de SIREN/SIRET",
        value: ACTIVITY_STATUS.REGISTERED,
      },
      {
        label: "Mon activité est en cours de création",
        description: "Vous souhaitez simuler votre projet professionnel",
        value: ACTIVITY_STATUS.IN_CREATION,
      },
    ],
  } as OptionsStep,

  STEP_TWO: {
    title: "Quelle est la taille de votre activité ?",
    description: "Afin de mieux vous connaître et de personnaliser votre expérience, partagez-nous la taille de votre activité.",
    options: [
      {
        label: "Je suis indépendant",
        value: COMPANY_SIZE.INDEPENDENT,
      },
      {
        label: "Une entreprise de moins de 10 salariés",
        value: COMPANY_SIZE.SMALL,
      },
      {
        label: "Une entreprise de plus de 10 salariés",
        value: COMPANY_SIZE.LARGE,
      },
    ],
  } as OptionsStep,

  // STEP_THREE: {
  //   title: "Recherchez votre activité",
  //   description: "Afin que nous puissions récupérer automatiquement l'ensemble des informations nécessaires à la bonne gestion de votre activité, recherchez votre activité soit par la raison sociale soit par son numéro de SIREN/SIRET",
  //   searchBar: {
  //     placeHolder: "Raison sociale ou numéro de SIRET/SIREN",
  //   },
  //   alert: {
  //     label: "Vous ne trouvez pas votre entreprise individuelle ?",
  //     description: "Plusieurs résultats ont été trouvés. Dans le cas où vous ne trouvez pas votre entreprise individuelle parmi les résultats, effectuez une nouvelle recherche en utilisant votre numéro de SIRET/SIREN.",
  //   },
  // } as SearchStep,

  STEP_FOUR: {
    title: "Votre activité est-elle réglementée ?",
    description: "Les activités réglementées sont soumises à des spécificités de gestion que nous ne prenons pas encore en charge. Pas de panique, nous pouvons faire tout le reste !",
    options: [
      {
        label: "Oui, mon activité est réglementée",
        value: REGULATED_STATUS.YES,
      },
      {
        label: "Non, mon activité n'est pas réglementée",
        value: REGULATED_STATUS.NO,
      },
    ],
  } as OptionsStep,

  STEP_FIVE: {
    signupOptions: [
      {
        type: SIGNUP_METHOD.OAUTH,
        label: "Créer un compte avec Google",
        icon: FcGoogle,
      },
      {
        type: SIGNUP_METHOD.OAUTH,
        label: "Créer un compte avec Github",
        icon: FaGithub,
      },
      {
        type: SIGNUP_METHOD.EMAIL,
        label: "Créer un compte avec votre email",
        icon: MdEmail,
      },
    ],
  } as AuthStep,

  STEP_SIX: {
    title: "Créez votre compte",
    description: "Renseignez vos informations personnelles pour finaliser votre inscription.",
    fields: {
      first_line: [
        {
          label: "Prénom",
          placeholder: "Ex: Gustave",
          type: "text",
          name: "firstName",
        },
        {
          label: "Nom",
          placeholder: "Ex: Eiffel",
          type: "text",
          name: "lastName",
        },
      ],
      second_line: [
        {
          label: "Email",
          placeholder: "Ex: gustave.eiffel@mail.com",
          type: "email",
          name: "email",
        },
      ],
      third_line: [
        {
          label: "Mot de passe",
          placeholder: "********",
          type: "password",
          name: "password",
        },
      ],
    },
    buttons: [
      {
        type: BUTTON_TYPE.SUBMIT,
        label: "Valider mon inscription",
      },
    ],
  } as FormStep,
};

export default SignUpSteps;
