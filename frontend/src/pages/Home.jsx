import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col">
      <header className="w-full flex justify-between items-center shadow px-4 sm:px-14 py-4 bg-white">
        <div className="text-xl sm:text-2xl font-bold text-blue-600">
          Payments App
        </div>
        <div className="flex justify-between items-center gap-2">
          <button
            onClick={() => navigate("/signup")}
            className="rounded-md bg-blue-500 hover:bg-blue-600 text-white border border-blue-700 py-2 font-medium px-5 hover:cursor-pointer focus:outline-none"
          >
            Signup
          </button>
          <button
            onClick={() => navigate("/signin")}
            className="rounded-md bg-blue-500 hover:bg-blue-600 text-white border border-blue-700 py-2 font-medium px-5 hover:cursor-pointer focus:outline-none"
          >
            Signin
          </button>
        </div>
      </header>
      <main className="flex-grow bg-slate-300 flex flex-col justify-center items-center text-center px-4">
        <h1 className="font-semibold text-2xl mb-2">
          Welcome to Payment's App
        </h1>
        <p className="text-lg mb-4">
          A safe and secure way to transfer your hard-earned money.
        </p>
        <p className="text-base mb-4">
          With our app, you can easily manage your finances, track your
          spending, and make transactions with just a few clicks.
        </p>
      </main>
      <footer className="w-full bg-white py-4 flex justify-center items-center shadow-inner">
        <div className="text-sm text-gray-500">
          © 2024 Payments App. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
