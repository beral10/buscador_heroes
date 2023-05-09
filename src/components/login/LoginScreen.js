import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {

  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/marvel')
  };
  
  return (
    <div className="p-14">
      <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
      <hr className="h-1 bg-gray-400 mb-6"/>
      <button 
        className="text-white font-semibold text-xl bg-blue-600 hover:bg-blue-400 border border-gray-600 rounded-lg px-7 py-3" 
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};
