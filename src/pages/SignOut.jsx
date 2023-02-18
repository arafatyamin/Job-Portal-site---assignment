import React from 'react';
import { Link } from 'react-router-dom';

const SignOut = () => {
    return (
        <div
  class="mx-auto flex min-h-screen w-full items-center justify-center  text-white"
>
  <section class="flex w-[30rem] flex-col space-y-10">
    <div class="text-center text-gray-900  text-4xl font-medium">SINE UP</div>

    <div
      class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
    >
      <input
        type="text"
        placeholder="Email or Username"
        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <div
      class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
    >
      <input
        type="password"
        placeholder="Password"
        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <button
      class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
    >
      SIGN UP
    </button>

    <Link to="" class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
      >FORGOT PASSWORD?</Link>

    <p class="text-center text-gray-500 text-lg">
      have an account?
      <Link to="/signIn" class="font-medium text-indigo-500 underline-offset-4 hover:underline"
        > Sign In</Link>
    </p>
  </section>
</div>
    );
};

export default SignOut;