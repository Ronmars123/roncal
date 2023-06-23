import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-8 w-800">
        <h2 className="text-2xl text-center mb-6">Login</h2>
        <form action="" id="formvalidate">
          <div className="mb-4">
            <input
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none"
              name="userName"
              id="userName"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <input
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none"
              name="userPassword"
              id="userPassword"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            id="login"
            className="bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="rememberMe"
                type="checkbox"
                className="form-checkbox h-4 w-4 text-green-500"
              />
              <label htmlFor="rememberMe" className="ml-2 text">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-green-500 hover:text-green-600 text-sm">
              Forgot Password?
            </a>
          </div>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-gray-700 hover:text-green-500">
            Don't have an account? <span className="text-green-500">Create One</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
