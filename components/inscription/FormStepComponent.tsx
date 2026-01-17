"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpInputs, signUpSchema } from "@/lib/schemas/schemas";

interface FormStepComponentProps {
  onSubmit: (data: Record<string, string>) => void;
  defaultValues?: Record<string, string>;
}

const FormStepComponent = ({ onSubmit }: FormStepComponentProps) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({
    resolver: zodResolver(signUpSchema),
  })


  const handleSubmitSignup: SubmitHandler<SignUpInputs> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitSignup)} className="flex flex-col gap-4 w-full">
      {/* First Line Fields (firstname + lastname) */}
      <div className="flex lg:flex-row flex-col gap-4 lg:gap-6">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="firstname" className="text-left text-sm font-medium text-gray-700">
            Prénom:
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="Prénom"
            {...register("firstName")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black"
          />
          {
            errors.firstName && (
              <span className="text-sm text-red-500">
                {errors.firstName?.message}
              </span>
            )
          }
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="lastname" className="text-left text-sm font-medium text-gray-700">
            Nom:
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="Nom"
            {...register("lastName")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black"
          />
          {
            errors.lastName && (
              <span className="text-sm text-red-500">
                {errors.lastName?.message}
              </span>
            )
          }
        </div>
      </div>

      {/* Second Line Fields (email) */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-left text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email")}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black"
        />
        {
          errors.email && (
            <span className="text-sm text-red-500">
              {errors.email?.message}
            </span>
          )
        }
      </div>

      {/* Third Line Fields (password) */}
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-left text-sm font-medium text-gray-700">
          Mot de passe:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Mot de passe"
          {...register("password")}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black"
        />
        {
          errors["password"] && (
            <span className="text-sm text-red-500">
              {errors.password?.message}
            </span>
          )
        }
      </div>

      {/* Fourth Line Fields (confirm password) */}
      <div className="flex flex-col gap-1">
        <label htmlFor="confirmPassword" className="text-left text-sm font-medium text-gray-700">
          Confirmer le mot de passe:
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirmer le mot de passe"
          {...register("confirmPassword")}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none  text-black"
        />
        {
          errors["confirmPassword"] && (
            <span className="text-sm text-red-500">
              {errors.confirmPassword?.message}
            </span>
          )
        }
      </div>
      <input type="submit" className="text-white text-base font-medium py-2.5 px-5 rounded-3xl focus:outline-none bg-gradient-to-r from-[#FF8A4C] to-[#F05252] cursor-pointer" value="Se connecter" />
    </form>
  );
};

export default FormStepComponent;
