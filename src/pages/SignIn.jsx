import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {

  const handleSubmit =(e)=>{
     e.preventDefault();
    console.log(e.target.email.value)
    console.log(e.target.password.value)

  }
    return (
        <div
  class="mx-auto flex min-h-screen w-full items-center justify-center  text-white"
>
  <section class="flex w-[30rem] flex-col space-y-10">
    <div class="text-center text-gray-900  text-4xl font-medium">Log In</div>

    <form onSubmit={handleSubmit}>
    <div
      class="w-full transform border-b-2 bg-transparent text-lg mb-2 duration-300 focus-within:border-indigo-500"
    >
      <input
        type="email"
        name="email"
        placeholder="Email or Username"
        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <div
      class="w-full transform border-b-2 bg-transparent text-lg duration-300 mb-2 focus-within:border-indigo-500"
    >
      <input
        type="password"
        name='password'
        placeholder="Password"
        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <button
      class="transform rounded-sm w-full bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
    >
      LOG IN
    </button>
    </form>

    <Link to="" class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
      >FORGOT PASSWORD?</Link>

    <p class="text-center text-gray-500 text-lg">
      No account?
      <Link to="/signUp" class="font-medium text-indigo-500 underline-offset-4 hover:underline"
        > Create One</Link>
    </p>
  </section>
</div>
    );
};

export default SignIn;