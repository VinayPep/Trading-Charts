import { useState } from "react";
import PropTypes from "prop-types";

const LoginPage = ({ AuthenticationComponent }) => {
  const [error, setError] = useState("");
  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 text-center">
          <div className="mx-auto w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-6">
            <i className="fa-solid fa-chart-simple"></i>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Welcome to Trading Charts
          </h1>
          <p className="text-gray-500 mb-8">Sign in to access real-time trading analytics</p>
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
          <div className="space-y-4">
            <AuthenticationComponent setError={setError} />
          </div>
        </div>
        <div className="px-8 pb-8">
          <div className="text-center text-sm text-gray-500">
            By signing in, you agree to our{" "}
            <span className="text-blue-500 hover:text-blue-600">Terms of Service </span>
            and
            <span className="text-blue-500 hover:text-blue-600"> Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  AuthenticationComponent: PropTypes.func
};

export default LoginPage;
