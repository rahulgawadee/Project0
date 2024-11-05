import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:3001/admin/login", { username, password });
            setLoading(false);
            if (res.data.success) {
                navigate("/admin/dashboard");
            } else {
                setError("Invalid credentials");
            }
        } catch (err) {
            setLoading(false);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white border-1 px-4">
            <form
                className="bg-gray-200 p-8 rounded-lg shadow-lg max-w-md w-full space-y-6"
                onSubmit={handleLogin}
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center">Admin Login</h2>
                
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border border-gray-300 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your username"
                        required
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                    type="submit"
                    className={`w-full p-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-colors duration-200 ${loading ? "opacity-70" : ""}`}
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
          
        </div>
    );
};

export default AdminLogin;










