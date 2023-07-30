import React from 'react';

const SignUp = () => {
  return (
    <div className="main">
      <div className="header w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-10 mb-4">Accounts</h1>
        <p>Thanks for choosing us!</p>
      </div>

      <div className="signUp flex flex-col gap-5 items-center mt-16">
        <div className="name flex gap-[20px]">
          <input
            type="text"
            placeholder="Name"
            className="border border-blueGray-700 px-4 py-2 rounded-md w-[130px]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-blueGray-700 px-4 py-2 rounded-md w-[130px]"
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="border border-blueGray-700 px-4 py-2 rounded-md w-[280px]"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-blueGray-700 px-4 py-2 rounded-md w-[280px]"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="border border-blueGray-700 px-4 py-2 rounded-md w-[280px]"
        />

        <div className="go flex gap-[15px] items-center w-[280px]">
          <div
            className="btn bg-green-600 hover:bg-green-500 transition duration-400 text-white text-lg w-20 h-10 flex items-center justify-center rounded-md cursor-pointer px-[10px] font-bold"
            onClick={() => {
              console.log('Sign-up button clicked!');
            }}
          >
            Register
          </div>
          <a href="./login" className="underline text-blue-700">Already have an account?</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

