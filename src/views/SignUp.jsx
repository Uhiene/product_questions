import React, { useState } from "react";
import { toast } from "react-toastify";
import { signInUser, signUpUser } from "../services/firebase";
import { setGlobalState } from "../store";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await signUpUser(email, password)
          .then((currentUser) => {
            setGlobalState("currentUser", currentUser);
            setEmail("");
            setPassword("");
            navigate("/");
            resolve();
          })
          .catch((error) => reject(error));
      }),
      {
        pending: "signing up",
        success: "sign up successful",
        error: "ERROR!",
      }
    );
  };

  const handleSignIn = async () => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await signInUser(email, password)
          .then((currentUser) => {
            setGlobalState("currentUser", currentUser);
            setEmail("");
            setPassword("");
            navigate("/");
            resolve();
          })
          .catch((error) => reject(error));
      }),
      {
        pending: "signing in",
        success: "signed in successful",
        error: "ERROR!",
      }
    );
  };

  return (
    <div
      className="flex justify-center items-center w-screen bg-no-repeat h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600")',
      }}
    >
      <div className=" bg-white w-1/2 h-1/2 bg-opacity-25 flex flex-col items-center">
        <form action="" className="space-y-4 ">
          <label htmlFor="email" className="mr-5">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-none outline-0 bg-slate-200"
          />
          <br />
          <label htmlFor="email" className="mr-5">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <div className="space-x-5 mt-10">
          <button
            onClick={handleSignIn}
            className="p-2 border-2 border-pink-400 hover:border-pink-300 cursor-pointer rounded-lg"
          >
            Login
          </button>

          <button
            onClick={handleSignUp}
            className="p-2 border-2 border-pink-400 hover:border-pink-300 cursor-pointer rounded-lg"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
