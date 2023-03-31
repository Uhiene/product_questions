import { useState } from "react";
import { toast } from "react-toastify";
import { createQuestion } from "../services/firebase";
import { setGlobalState } from "../store";
import { BsFillArrowRightCircleFill } from "react-icons/bs"

export const QuestionModal = () => {
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    const params = {
      user,
      description,
    }



    await toast.promise(
      new Promise(async (resolve, reject) => {
        await createQuestion(params)
          .then(async () => {
            setGlobalState("questionModal", "scale-0")
            setUser("")
            setDescription("")
            resolve()
          })
          .catch((error) => reject(error))
      }),
      {
        pending: "posting",
        success: "Question posted",
        error: "ERROR! QUESTION NOT POSTED"
      }
    )
  }

  return (
    <div
      className="bg-white w-5/6  h-3/5 p-2"
    >
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-1">
          <label htmlFor="user" className="text-sm font-medium "> Username:</label>
          <input
            className="block w-full bg-transparent
               text-sm text-slate-500 focus:outline-none
              focus:ring-0 border-0 border-b border-pink-400 placeholder:text-xs"
            type="text"
            name="user"
            placeholder="Username"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
        </div>
        <div className="flex items-center space-x-1">
          <label htmlFor="description" className="text-sm font-medium "> Question:</label>
          <textarea
            className="block w-full bg-transparent
              text-sm text-slate-500 focus:outline-none
              focus:ring-0 border-0 border-pink-400 border-b placeholder:text-xs"
            type="text"
            rows={1}
            name="description"
            placeholder="Question description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="p-1 w-fit flex items-center space-x-2 px-4 rounded-md border border-pink-400 text-sm text-pink-400 cursor-pointer"
          >
            Submit
            <BsFillArrowRightCircleFill className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
};
