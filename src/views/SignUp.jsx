import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { signInUser, signUpUser } from '../services/firebase'
import { setGlobalState } from '../store'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSignUp = async () => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await signUpUser(email, password)
          .then((currentUser) => {
            setGlobalState("currentUser", currentUser )
            setEmail("")
            setPassword("")
            navigate("/")
            resolve()
          })
          .catch((error) => reject(error))
      }),
      {
        pending: "signing up",
        success: "sign up successful",
        error: "ERROR!"
      }
    )
  }

  const handleSignIn = async () => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await signInUser(email, password)
          .then((currentUser) => {
            setGlobalState("currentUser", currentUser )
            setEmail("")
            setPassword("")
            navigate("/")
            resolve()
          })
          .catch((error) => reject(error))
      }),
      {
        pending: "signing in",
        success: "signed in successful",
        error: "ERROR!"
      }
    )
  }

  return (
    <div>
      <form action="" className='space-y-4'>
        <label htmlFor="email">
          email:
        </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="email">
          password:
        </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </form>
      <div className='space-x-5'>
        <button 
          onClick={handleSignIn}
        className='p-2 border-2 border-pink-400 rounded-lg'>
          Login
        </button>

        <button
        onClick={handleSignUp} className='p-2 border-2 border-pink-400 rounded-lg'>
          Signup
        </button>
      </div>
    </div>
  )
}

export default SignUp