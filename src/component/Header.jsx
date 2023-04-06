import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import { setGlobalState, useGlobalState } from "../store";
import { toast } from "react-toastify";
import { LogOut } from "../services/firebase";

const Header = () => {
  const [currentUser] = useGlobalState("currentUser");
  const navigate = useNavigate()

  const handleLogOut = async () => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await LogOut()
          .then(() => {
            setGlobalState("currentUser", null )
            navigate("/signup")
            resolve();
          })
          .catch((error) => reject(error))
      }),
      {
        pending: "logging out",
        success: "logged out successful",
        error: "ERROR!"
      }
    )
  }

  return (
    <div className="flex justify-between w-full px-10 py-5">
      <Link to={"/"}>
        <h1 className="text-4xl">The Orignals </h1>
      </Link>

      <div className="space-x-5">
        {!currentUser ? ( 
          <Link
            to={"/signup"}
            className="p-2 border-2 border-pink-400 rounded-lg"
          >
            Login
          </Link>
        ) : (
          <button 
          onClick={(handleLogOut)}
          className="p-2 border-2 border-pink-400 rounded-lg">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
