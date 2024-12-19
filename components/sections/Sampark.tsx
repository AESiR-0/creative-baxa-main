"use client";

import React, { useState } from "react";

export default function Sampark() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focused, setFocused] = useState(false);
    const [selected, setSelected] = useState('');
    const [formData, setFormData] = useState({
        interestedIn: "",
        contact: ''
    })
    return (
        <div className="flex relative px-10 flex-col items-start gap-16 justify-center min-h-screen bg-secondary text-white p-6">
            <div className="text-6xl w-full max-md:text-3xl max-md:mb-5  max-md:items-start max-md:justify-start max-md:m-0 max-md:p-0  font-bold md:mb-6  md:pr-32">
                Kya Hum Iss
                <span className="text-[#80D3FF] "> Project idea</span>{" "}
                <span>ko <br /> haqeeqat mein badal de?</span>
            </div>
            <div className="relative w-96">
                <input
                    required
                    disabled={isSubmitting}
                    type='text'
                    name='contact'
                    value={formData.contact}
                    onFocus={() => setFocused(false)}
                    onBlur={(e) => setFocused(true)}
                    onChange={(e) => {
                        setFormData((prev) => ({
                            ...prev,
                            contact: e.target.value,
                        }));
                    }}
                    className="w-full disabled:text-[#80D3FF] bg-secondary rounded-none text-white py-3 px-2 outline-none border border-t-0 border-l-0 border-r-0 border-[#80D3FF] transition"
                />
                <label
                    className={`absolute left-1 top-1/2 transform -translate-y-1/2 text-white text-xl pointer-events-none transition-all duration-200 ${!focused
                        ? "-translate-y-10 left-0 text-sm text-[#80D3FF]"
                        : ""
                        }`}
                >
                    Email or Phone Number*
                </label>
            </div>
            <div className="">
                <p className="text-3xl mb-16">I'm Interested in:</p>

                <div className="grid grid-cols-4 md:grid max-md:grid-cols-2 justify-between gap-5 mb-6">
                    {[
                        "Events",
                        "Content Creation",
                        "Website Development",
                        "Other",
                    ].map((option) => (
                        <button
                            key={option}
                            type="button"
                            disabled={isSubmitting}
                            onClick={() => {
                                // Toggle the jobTitle in the form data and set the selected option
                                const newJobTitle = selected === option ? null : option;
                                setSelected(newJobTitle || '');
                                setFormData((prev) => ({
                                    ...prev,
                                    jobTitle: newJobTitle, // Update jobTitle directly based on new selected option
                                }));
                            }}
                            className={` hover:bg-[#80D3FF] ${formData.interestedIn === option
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
                className="w-40 text-xl flex justify-center items-center transition-all  disabled:bg-[#d0e9f7] disabled:opacity-75 hover:border-white hover:border hover:bg-transparent bg-[#80D3FF] py-3 rounded-xl text-white font-semibold hover:bg-[#80D3FF] "
            >
                Submit
                {isSubmitting && (
                    <span className="animate-spin inline-block w-5 h-5  border-4 border-t-transparent border-white rounded-full"></span>
                )}
            </button>
        </div>
    );
}
