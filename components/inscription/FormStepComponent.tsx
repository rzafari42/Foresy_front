"use client";

import { FormStep } from "@/lib/constants/signUpSteps";
import { useState } from "react";

interface FormStepComponentProps {
  step: FormStep;
  onSubmit: (data: Record<string, string>) => void;
  defaultValues?: Record<string, string>;
}

const FormStepComponent = ({ step, onSubmit, defaultValues = {} }: FormStepComponentProps) => {
  const [formData, setFormData] = useState<Record<string, string>>(defaultValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors: Record<string, string> = {};
    const allFields = [
      ...step.fields.first_line,
      ...step.fields.second_line,
      ...step.fields.third_line,
    ];

    allFields.forEach((field) => {
      if (field.name && !formData[field.name]) {
        newErrors[field.name] = `${field.label} est requis`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  const renderField = (field: { label: string; placeholder: string; type?: string; name?: string }, index: number) => (
    <div key={index} className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {field.label}
      </label>
      <input
        type={field.type || "text"}
        name={field.name}
        placeholder={field.placeholder}
        value={formData[field.name || ""] || ""}
        onChange={(e) => handleChange(field.name || "", e.target.value)}
        className={`px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
          errors[field.name || ""]
            ? "border-red-500 focus:border-red-500"
            : "border-gray-200 focus:border-orange-500"
        }`}
      />
      {errors[field.name || ""] && (
        <span className="text-sm text-red-500">{errors[field.name || ""]}</span>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      {/* First Line */}
      {step.fields.first_line.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {step.fields.first_line.map((field, index) => renderField(field, index))}
        </div>
      )}

      {/* Second Line */}
      {step.fields.second_line.length > 0 && (
        <div className="flex flex-col gap-4">
          {step.fields.second_line.map((field, index) => renderField(field, index))}
        </div>
      )}

      {/* Third Line */}
      {step.fields.third_line.length > 0 && (
        <div className="flex flex-col gap-4">
          {step.fields.third_line.map((field, index) => renderField(field, index))}
        </div>
      )}

      {/* Submit Button */}
      {step.buttons.map((button, index) => (
        <button
          key={index}
          type="submit"
          className="w-full py-3 text-white font-semibold rounded-lg hover:bg-orange-50 transition-colors cursor-pointer"
        >
          {button.label}
        </button>
      ))}
    </form>
  );
};

export default FormStepComponent;
