import { useState } from "react";
import axiosIntance from "../../api/axiosIntance";
import { Mail, Lock } from "lucide-react";
import { set } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { roleRoutes } from "../../routes/RoleRoutes";
const Login = ({setIsLoggedIn}) => {
  const [formData, setformData] = useState({
    emailId: "",
    password: "",
  });
const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {login} = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const res = await axiosIntance.post(
        "/auth/login",
        formData
      );
      console.log(res.data.token)
      console.log(res.data.user)
      const token = res.data.token
      const user = res.data.user

      login(token,user)
      navigate(roleRoutes[user.role])

      console.log(res.data);
      setIsLoggedIn(true);
      Navigate('/courses')
      alert("Login Successful");
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 items-center justify-center p-12">
        <div className="text-white max-w-lg">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Welcome Back
          </h1>

          <p className="text-xl text-blue-100">
            Sign in to access your dashboard and manage your account
            securely.
          </p>

          <div className="mt-10">
            <img
              src="https://illustrations.popsy.co/white/work-from-home.svg"
              alt="Login"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/20 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white">
              Login
            </h2>
            <p className="text-blue-100 mt-2">
              Enter your credentials to continue
            </p>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-300 text-white text-sm rounded-lg p-3 mb-5">
              {error}
            </div>
          )}

          {/* Email */}
          <div className="mb-5">
            <label className="block text-white mb-2">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                placeholder="Enter your email"
                value={formData.emailId}
                onChange={(e) =>
                  setformData({
                    ...formData,
                    emailId: e.target.value,
                  })
                }
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-white mb-2">
              Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setformData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center gap-2 text-white text-sm">
              <input type="checkbox" />
              Remember Me
            </label>

            <button
              type="button"
              className="text-cyan-200 hover:text-white text-sm"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-blue-900 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg"
          >
            {loading ? "Logging In..." : "Login"}
          </button>
          <p className="text-center mt-4">
          Already have no an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold"
          >
            Register
          </Link>
        </p>
        </form>
      </div>
    </div>
  );
};

export default Login;