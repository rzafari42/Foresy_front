import {
  IOptionsStep,
  IAuthStep,
  IFormStep,
} from "@/lib/types/signUp";

import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const SIGNUP_METHOD = {
  OAUTH: "OAUTH",
  EMAIL: "EMAIL",
} as const;

const BUTTON_TYPE = {
  SUBMIT: "SUBMIT",
} as const;

const ACTIVITY_STATUS = {
  REGISTERED: "REGISTERED",
  IN_CREATION: "IN_CREATION",
} as const;

const COMPANY_SIZE = {
  INDEPENDENT: "INDEPENDENT",
  SMALL: "SMALL",
  LARGE: "LARGE",
} as const;

const COMPANY_SIZE_DETAILED = {
  INDEPENDENT: "INDEPENDENT",
  AUTO_ENTREPRENEUR: "AUTO_ENTREPRENEUR",
  EURL: "EURL",
  SASU: "SASU",
  SA_SAS: "SA_SAS",
} as const;

const REGULATED_STATUS = {
  YES: "YES",
  NO: "NO",
} as const;


/**
 *  Etapes d'inscription
 */

const SignUpSteps = {
  // Rensignement de la situation de l'activité
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
  } as IOptionsStep,

  // Rensignement de la taille de l'activité
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
  } as IOptionsStep,

  // Renseignement du type d'activité indépendante
  STEP_TWO_BIS: {
    title: "Quelle est la taille de votre activité ?",
    description: "Afin de mieux vous connaître et de personnaliser votre expérience, partagez-nous la taille de votre activité.",
    options: [
      {
        label: "Indépendant",
        description: "EI ou profession libérale",
        value: COMPANY_SIZE_DETAILED.INDEPENDENT,
      },
      {
        label: "Auto-entrepreneur",
        value: COMPANY_SIZE_DETAILED.AUTO_ENTREPRENEUR,
      },
      {
        label: "EURL",
        value: COMPANY_SIZE_DETAILED.EURL,
      },
      {
        label: "SASU",
        value: COMPANY_SIZE_DETAILED.SASU,
      },
      {
        label: "SA ou SAS",
        value: COMPANY_SIZE_DETAILED.SA_SAS,
      }
    ]
  } as IOptionsStep,

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

  // Renseignement du statut réglementé
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
  } as IOptionsStep,

  // Choix du mode d'inscription
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
  } as IAuthStep,

  // Inscription via email
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
  } as IFormStep,
};

export default SignUpSteps;
