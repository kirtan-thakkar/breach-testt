"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const Login = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isLogin) {
        const loginData = new URLSearchParams();
        loginData.append("username", formData.email);
        loginData.append("password", formData.password);

        const response = await fetch("http://localhost:8000/api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: loginData,
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.detail || "Login failed");

        localStorage.setItem("token", data.access_token);
        alert("Login successful!");
        router.push("/");
      } else {
        // signup
        const response = await fetch("http://localhost:8000/api/v1/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: formData.full_name,
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.detail || "Signup failed");

        alert("Account created successfully! Please log in.");
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
            {isLogin ? "Welcome Back" : "Create your Account"}
          </h1>

          <div className="max-w-xl w-full mx-auto flex flex-col gap-4">
            {error && (
              <div className="p-3 bg-red-100 text-red-600 rounded-md text-sm border border-red-200">
                {error}
              </div>
            )}

            {!isLogin && (
              <div className="flex flex-col gap-2">
                <label htmlFor="full_name" className="block text-primary text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  required={!isLogin}
                  className="w-full border border-neutral-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.full_name}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="block text-primary text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
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
                required
                className="w-full border border-neutral-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button
              disabled={loading}
              className={`w-full cursor-pointer py-2 px-2 bg-black text-white rounded-md hover:opacity-80 transition-opacity ${loading ? "opacity-50" : ""}`}
            >
              {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
            </button>

            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-neutral-600 hover:text-black self-center"
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
export default Login;
