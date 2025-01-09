"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
type FocusedFields = {
  [key: string]: boolean;
};

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  experience: number;
  jobTitle: string | null;
  aboutExperience: string;
  cv: string;
  playlist: string;
  favComic: string;
};
const formFields = [
  { type: "text", name: "fullName", label: "Full Name" },
  { type: "email", name: "email", label: "Email" },
  { type: "tel", name: "phoneNumber", label: "Phone Number" },
  { type: "text", name: "project_company_name", label: "Project/Company Name" },
];

const Form: React.FC = () => {
  const Router = useRouter();

  const [focused, setFocused] = useState<FocusedFields>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [fieldsRequired, setFieldsRequired] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    experience: 0,
    jobTitle: null,
    aboutExperience: "",
    cv: "",
    playlist: "",
    favComic: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleFocus = (field: string) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field: string, value: string) => {
    if (!value) {
      setFocused({ ...focused, [field]: false });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(1);
    setFieldsRequired(false);
    const {
      fullName,
      email,
      phoneNumber,
      experience,
      jobTitle,
      aboutExperience,
      cv,
      favComic,
      playlist,
    } = formData;
    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !experience ||
      !jobTitle ||
      jobTitle === "" ||
      jobTitle === " " ||
      !aboutExperience ||
      !cv
    ) {
      alert("Please fill all the fields required");
      setFieldsRequired(true);
      setIsSubmitting(false);

      return;
    }

    const dataToSend = {
      fullName,
      email,
      phoneNumber,
      experience,
      jobTitle,
      aboutExperience,
      cv,
      favComic,
      playlist,
    };

    if (!fieldsRequired) {
      try {
        const response = await fetch("/api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });

        if (response.ok) {
          setIsModalOpen(true); // Open modal upon success
          setIsSubmitting(false);
          setFormData({
            fullName: "",
            email: "",
            phoneNumber: "",
            experience: 0,
            jobTitle: null,
            aboutExperience: "",
            cv: "",
            playlist: "",
            favComic: "",
          });
        } else {
          setIsModalOpen(true);
          alert("Failed to submit form. Please try again.");
          setIsSubmitting(false);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form. Please try again.");
        setIsSubmitting(false);
      }
    }
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    Router.push("https://youtu.be/xvFZjo5PgG0?si=h9qItXjsVyKBb6fK");
  };

  return (
    <div id="contact" className="min-h-screen transition-colors  bg-[#0E0D0D] flex items-center justify-center text-white px-4">
      <div className="w-full max-w-4xl p-8 rounded-lg shadow-lg">
        <div className="text-5xl w-full max-md:text-3xl max-md:mb-5  max-md:items-start max-md:justify-start max-md:m-0 max-md:p-0  font-bold md:mb-6 md:pr-32">
          <span>Kya Hum Iss </span>
          <span className="text-[#80D3FF] "> Project idea </span>{" "}
          <span>ko haqeeqat mein badal de?</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-x-10 gap-y-4 py-5 grid-cols-2 md:grid-cols-2">
            {formFields.map((field, index) => (
              <div key={index} className="relative mb-6">
                <input
                  required
                  disabled={isSubmitting}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof FormData] || ""}
                  onFocus={() => handleFocus(field.name)}
                  onBlur={(e) => handleBlur(field.name, e.target.value)}
                  onChange={handleChange}
                  className="w-full disabled:text-[#80D3FF]  bg-[#0E0D0D] rounded-none text-white py-3 px-2 outline-none border border-t-0 border-l-0 border-r-0 border-[#80D3FF] transition"
                />
                <label
                  className={`absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-200 ${
                    focused[field.name]
                      ? "-translate-y-10 left-0 text-sm text-[#80D3FF]"
                      : ""
                  }`}
                >
                  {field.label}*
                </label>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <h3 className="text-3xl py-5">
              I<span className="text-primary">'</span>m Interested in:
            </h3>
            <div className="grid grid-cols-4 md:grid max-md:grid-cols-2 justify-between gap-10 mb-6">
              {[
                "Events",
                "Website Development",
                "Content Creation",
                "Other",
              ].map((option) => (
                <button
                  key={option}
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => {
                    const newJobTitle = selected === option ? null : option;
                    setSelected(newJobTitle);
                    setFormData((prev) => ({
                      ...prev,
                      jobTitle: newJobTitle, // Update jobTitle directly based on new selected option
                    }));
                  }}
                  className={` hover:bg-[#80D3FF] ${
                    formData.jobTitle === option
                      ? "disabled:bg-[#c8e5f5] bg-[#80D3FF] border border-[#80D3FF]"
                      : "border border-white bg-transparent "
                  } py-2 px-2 rounded-3xl transition`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center transition-all gap-5 disabled:bg-[#d0e9f7] disabled:opacity-75 hover:border-white hover:border hover:bg-transparent bg-[#80D3FF] py-3 rounded-xl text-white font-semibold hover:bg-[#80D3FF] "
          >
            SUBMIT{" "}
            {isSubmitting && (
              <span className="animate-spin inline-block w-5 h-5  border-4 border-t-transparent border-white rounded-full"></span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
