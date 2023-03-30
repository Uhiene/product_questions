import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { createQuestion } from "../services/firebase";
import { setGlobalState, useGlobalState } from "../store";

export const QuestionModal = () => {
  const [questionModal] = useGlobalState("questionModal");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    const params = {
      owner: "uhieneprincess@gmail.com",
      title,
      description,
      timeStamp: Date.now(),
      status: 1,
      upQuestion: 0,
      downQuestion: 0,
      questionaires: [],
    }



    await toast.promise(
      new Promise(async (resolve, reject) => {
        await createQuestion(params)
        .then(async () => {
          setGlobalState("questionModal", "scale-0")
          setTitle("")
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
      className={`fixed top-0 left-0 w-screen h-screen flex
      items-center justify-center bg-black bg-opacity-50
      transform transition-transform duration-300 ${questionModal}`}
    >
      <div
        className="bg-white  shadow-lg shadow-[#14ebff] rounded-xl
        w-11/12 md:w-2/5 h-7/12 p-6"
      >
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <p className="font-semibold ">Ask a question</p>
            <button
              onClick={() => setGlobalState("questionModal", "scale-0")}
              type="button"
              className="border-0 bg-transparent focus:outline-none text-black hover:text-red-500"
            >
              <FaTimes />
            </button>
          </div>

          <div
            className="flex justify-between items-center
          bg-white bg-opacity-70 shadow-sm shadow-[#14ebff] rounded-xl mt-5"
          >
            <input
              className="block w-full bg-transparent
              border-0 text-sm text-slate-500 focus:outline-none
              focus:ring-0"
              type="text"
              name="title"
              placeholder="Question title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div
            className="flex justify-between items-center
          bg-white bg-opacity-70 shadow-sm shadow-[#14ebff] rounded-xl mt-5"
          >
            <textarea
              className="block w-full bg-transparent
              border-0 text-sm text-slate-500 focus:outline-none
              focus:ring-0"
              type="text"
              name="description"
              placeholder="Question description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex flex-row justify-center items-center
              w-full text-white text-md py-2 px-5 rounded-full
              drop-shadow-xl hover:bg-transparent hover:text-[#ffffff]
              focus:outline-none focus:ring mt-5 bg-[#427f06] text-md font-bold
              hover:bg-[#14ebff]"
          >
            Submit Propose
          </button>
        </form>
      </div>
    </div>
  );
};
