"use client";
import { useState } from "react";

import Navbar from "@/components/Navbar";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section>
      <Navbar />
      <form
        className="max-w-2xl mx-auto py-10 px-4 w-full"
        onSubmit={handleSubmit}
      >
        <div className="py-10 bg-white shadow-aceternity rounded-2xl flex flex-col gap-6">
          <h1 className="text-primary text-2xl md:text-3xl font-medium tracking-tight text-center">
            Welcome to Breach, Please Sign Up
          </h1>
          <div className="max-w-xl w-full mx-auto flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="block text-primary text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-neutral-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="block text-primary text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-neutral-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="block text-primary text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-neutral-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button className="w-full cursor-pointer py-2 px-2 bg-black text-white">
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
export default Login;
