import React, { useState } from "react";
import { Link } from "react-router-dom";
import sideImage from "../assets/image.png";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";

      isValid = false;
    }

    if (!formData.username.trim()) {
      errors.username = "Username is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (!formData.terms) {
      errors.terms = "You must agree to the terms and conditions";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
    }
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/3 flex-shrink-0">
        <img src={sideImage} alt="img" className="h-full w-full object-cover" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center ml-auto mr-auto"
      >
        <div className="p-8 rounded-lg max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-left">
            Sign up to continue
          </h1>
          <div className="flex gap-4">
            <div className="mb-4 w-1/2">
              <label htmlFor="name" className="inline-block font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John"
                className={`w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:border-transparent ${
                  errors.name
                    ? "border-red-500 focus:ring-red-600"
                    : "border-gray-300 focus:ring-blue-600"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4 w-1/2">
              <label htmlFor="username" className="block font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="John"
                className={`w-full px-3 py-2  bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:border-transparent ${
                  errors.username
                    ? "border-red-500 focus:ring-red-600"
                    : "border-gray-300 focus:ring-blue-600"
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="account@refero.design"
              className={`w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:border-transparent ${
                errors.email
                  ? "border-red-500 focus:ring-red-600"
                  : "border-gray-300 focus:ring-blue-600"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="6+ characters"
              className={`w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:border-transparent ${
                errors.password
                  ? "border-red-500 focus:ring-red-600"
                  : "border-gray-300 focus:ring-blue-600"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block  font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={`w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:border-transparent ${
                errors.confirmPassword
                  ? "border-red-500 focus:ring-red-600"
                  : "border-gray-300 focus:ring-blue-600"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <div className="mb-6 flex items-start">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className={`form-checkbox h-5 w-5 text-pink-500 rounded border-gray-300 focus:ring-pink-500 ${
                errors.terms
                  ? "border-red-500 focus:ring-red-600"
                  : "border-gray-300 focus:ring-blue-600"
              }`}
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              Creating an account means you're okay with our&nbsp;
              <Link to="#" className="text-blue-500">
                Terms of Service,&nbsp;
              </Link>
              <Link to="#" className="text-blue-500">
                Privacy Policy
              </Link>
              and our default&nbsp;
              <Link to="#" className="text-blue-500">
                Notification Settings
              </Link>
            </label>
          </div>
          <button className="w-1/2 bg-pink-500 text-white font-bold py-3 px-4 rounded-md hover:bg-pink-600 transition-colors duration-300">
            <Link to="/profile-setup">Sign Up</Link>
          </button>
          <p className="mt-4 text-sm text-gray-600">
            This site is protected by reCAPTCHA and the&nbsp;
            <Link to="#" className="text-blue-500">
              Google Privacy Policy&nbsp;
            </Link>
            and&nbsp;
            <Link to="#" className="text-blue-500">
              Terms of Service&nbsp;
            </Link>
            apply.
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
