import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const SignUp = () => {
  const {createUser} = useContext(AuthContext)

  const handleRegister =(e)=> {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(err => console.log(err))
    

  }
    return (
        <div
  className="mx-auto flex min-h-screen w-full items-center justify-center  text-white"
>
  <section className="flex w-[30rem] flex-col space-y-10">
    <div className="text-center text-gray-900  text-4xl font-medium">Sign Up</div>

    <form onSubmit={handleRegister}>
    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mb-2"
    >
      <input
        type="text"
        name="name"
        placeholder="full name"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>
    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mb-2"
    >
      <input
        type="email"
        name="email"
        placeholder="Email or Username"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mb-2"
    >
      <input
        type="password"
        name='password'
        placeholder="Password"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <button
      className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
    >
      SIGN UP
    </button>
    </form>

    <Link to="" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
      >FORGOT PASSWORD?</Link>

    <p className="text-center text-gray-500 text-lg">
      have an account?
      <Link to="/signIn" className="font-medium text-indigo-500 underline-offset-4 hover:underline"
        > Sign In</Link>
    </p>
  </section>
</div>
    );
};

export default SignUp;