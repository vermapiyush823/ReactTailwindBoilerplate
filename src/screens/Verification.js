import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Verification = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center mt-20 lg:px-96 text-center">
        <h1 className="text-3xl font-bold mb-8">Please verify your email...</h1>
        <div className="flex flex-col items-center mb-4">
          <svg
            className="w-20 h-20 text-pink-500 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p>
            Please verify your email address. We've sent a confirmation email
            to:
          </p>
        </div>
        <p className="text-lg font-bold mb-8">account@refero.design</p>
        <p className="text-gray-600 mb-4">
          Click the confirmation link in that email to begin using Dribbble.
        </p>
        <p className="text-gray-600 mb-8">
          Didn't receive the email? Check your Spam folder, it may have been
          caught by a filter. If you still don't see it, you can{" "}
          <a href="#" className="text-pink-500 hover:underline">
            resend the confirmation email
          </a>
          .
        </p>
        <p className="text-gray-600 mb-8">
          Wrong email address?{" "}
          <a href="#" className="text-pink-500 hover:underline">
            Change it
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Verification;
