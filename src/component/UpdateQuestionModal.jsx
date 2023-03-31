import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { updateQuestion } from "../services/firebase";
import { setGlobalState, useGlobalState } from "../store";

const UpdateQuestionModal = () => {
  const [question] = useGlobalState("question")
  const [user, setUser] = useState(question.user);
  const [description, setDescription] = useState(question.description);
  const [editquestionModal] = useGlobalState("editquestionModal");
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const params = {
      user,
      description,
    }



    await toast.promise(
      new Promise(async (resolve, reject) => {
        await updateQuestion(question.id, params)
        .then(async () => {
          setGlobalState("editquestionModal", "scale-0")
          resolve()
        })
        .catch((error) => reject(error))
      }),
      {
        pending: "updating",
        success: "Question updated",
        error: "ERROR! QUESTION NOT   UPDATED"
      }
    )
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex
      items-center justify-center bg-black bg-opacity-50
      transform transition-transform duration-300 ${editquestionModal}`}
    >
      <div
        className="bg-white  shadow-lg shadow-pink-300 rounded-xl
        w-11/12 md:w-2/5 h-7/12 p-6"
      >
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <p className="font-semibold ">Edit</p>
            <button
              onClick={() => setGlobalState("editquestionModal", "scale-0")}
              type="button"
              className="border-0 bg-transparent focus:outline-none text-black hover:text-red-500"
            >
              <FaTimes />
            </button>
          </div>

          <div
            className="flex justify-between items-center
          bg-white bg-opacity-70 shadow-sm shadow-pink-600 rounded-xl mt-5"
          >
            <input
              className="block w-full bg-transparent
              border-0 text-sm text-slate-500 focus:outline-none
              focus:ring-0"
              type="text"
              name="user"
              placeholder="Username"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
          </div>

          <div
            className="flex justify-between items-center
          bg-white bg-opacity-70 shadow-sm shadow-pink-600 rounded-xl mt-5"
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
              drop-shadow-xl hover:text-[#ffffff]
              focus:outline-none focus:ring mt-5 bg-pink-400 text-md font-bold
              hover:bg-pink-600"
          >
            Submit Propose
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateQuestionModal