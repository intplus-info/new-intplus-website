"use client";

import { useState } from "react";
import Image from "next/image";
import ArrowForward from "../../../public/arrow_forward.svg";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    details: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Basic validation rules
  const validate = () => {
    let errors = {};

    if (!formData.company) errors.company = "Company is required";
    if (!formData.name) errors.name = "Name is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.details) errors.details = "Project details are required";
    if (!formData.checkbox)
      errors.checkbox = "You must accept the Privacy Policy";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);

      // Simulate an API request
      setTimeout(() => {
        console.log("Form data:", formData);
        setIsSubmitting(false);
        // Optionally clear the form
        setFormData({
          company: "",
          name: "",
          phone: "",
          email: "",
          details: "",
          checkbox: false,
        });
        setErrors({});
      }, 2000);
    }
  };

  return (
    <div className="w-full h-auto relative p-5 lg:px-20 lg:p-0 lg:py-10 flex items-center justify-end text-[#16205F] mt-5">
      <div className="bg-servicesBackground bg-no-repeat bg-cover rounded-[4px] lg:ml-20 rounded-br-[50px] h-full w-[40%] lg:w-[65%] absolute top-0 left-0 z-[-10]"></div>
      <form
        onSubmit={handleSubmit}
        className="rounded-[4px] rounded-tl-[50px] lg:rounded-tl-[70px] p-[30px] lg:p-[50px] lg:ml-0 lg:w-1/2 max-w-[700px] bg-white shadow-xl"
      >
        <p className="text-[40px] font-semibold mb-[30px]">Contact Us</p>

        <div className="flex gap-x-2 mb-3 w-full justify-between flex-col lg:flex-row">
          <div className="flex flex-col gap-y-2 flex-1 mb-5 lg:mb-2">
            <label htmlFor="company" className="font-medium text-base">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="outline-none border-[#C5E0FF] border rounded-[4px] h-[55px] px-2"
            />
            {errors.company && (
              <span className="text-red-500 text-sm">{errors.company}</span>
            )}
          </div>
          <div className="flex flex-col gap-y-2 flex-1 mb-5 lg:mb-2">
            <label htmlFor="name" className="font-medium text-base">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="outline-none border-[#C5E0FF] border rounded-[4px] h-[55px] px-2"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </div>
        </div>

        <div className="flex gap-x-2 mb-3 w-full justify-between flex-col lg:flex-row">
          <div className="flex flex-col gap-y-2 flex-1 mb-5 lg:mb-2">
            <label htmlFor="phone" className="font-medium text-base">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="outline-none border-[#C5E0FF] border rounded-[4px] h-[55px] px-2"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </div>
          <div className="flex flex-col gap-y-2 flex-1 mb-5 lg:mb-2">
            <label htmlFor="email" className="font-medium text-base">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="outline-none border-[#C5E0FF] border rounded-[4px] h-[55px] px-2"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-y-2 mb-3">
          <label htmlFor="details" className="font-medium text-base">
            Project Details
          </label>
          <textarea
            name="details"
            id="details"
            value={formData.details}
            onChange={handleChange}
            className="outline-none border-[#C5E0FF] border rounded-[4px] min-h-[55px] resize-none p-2 mb-5 lg:mb-2"
          ></textarea>
          {errors.details && (
            <span className="text-red-500 text-sm">{errors.details}</span>
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex gap-x-2 items-baseline mb-">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}
              className="cursor-pointer w-[15px] h-[15px]"
            />
            <p>
              By sending this form I confirm that I have read and accept the{" "}
              <span className="font-semibold">Privacy Policy</span>
            </p>
          </div>
          {errors.checkbox && (
            <span className="text-red-500 text-sm">{errors.checkbox}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="uppercase bg-[#2D7EFF] text-white text-base rounded-[4px] py-3 px-[25px] font-medium flex items-center gap-2 mt-4"
        >
          {isSubmitting ? "Submitting..." : "Get Consultation"}
          <Image src={ArrowForward} alt="forward arrow" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
