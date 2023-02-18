import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const SignIn = () => {
  const {signIn} = useContext(AuthContext)
  const [loginError, setLoginError] = useState('')
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit =(e)=>{
     e.preventDefault();
     const email =e.target.email.value;
     const password = e.target.password.value;
     setLoginError('')
      signIn(email,password)
      .then(result => {
        const user = result.user;
        console.log(user)
        navigate(from, {replace: true})
      })
      .catch(error => {
        console.log(error.message.split('/')[1])
        setLoginError(error.message)
      })



  }
    return (
        <div
  className="mx-auto flex min-h-screen w-full items-center justify-center  text-white"
>
  <section className="flex w-[30rem] flex-col space-y-10">
    <div className="text-center text-gray-900  text-4xl font-medium">Log In</div>

    <form onSubmit={handleSubmit}>
    <div
      className="w-full transform border-b-2 bg-transparent text-lg mb-2 duration-300 focus-within:border-indigo-500"
    >
      <input
        type="email"
        name="email"
        placeholder="Email or Username"
        className="w-full text-black border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 mb-2 focus-within:border-indigo-500"
    >
      <input
        type="password"
        name='password'
        placeholder="Password"
        className="w-full text-black border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>
    {
      loginError && <p className='text-red-900 text-xl text-center'>{loginError.split('/')[1].split(')')[0]}</p>
    }

    <button
      className="transform rounded-sm w-full bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
    >
      LOG IN
    </button>
    </form>

    <Link to="" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
      >FORGOT PASSWORD?</Link>

    <p className="text-center text-gray-500 text-lg">
      No account?
      <Link to="/signUp" className="font-medium text-indigo-500 underline-offset-4 hover:underline"
        > Create One</Link>
    </p>
  </section>
</div>
    );
};

export default SignIn;