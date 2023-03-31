import { FiEdit2 } from "react-icons/fi"
import { MdOutlineDelete } from "react-icons/md"
import { toast } from "react-toastify"
import { deleteQuestion } from "../services/firebase"
import { setGlobalState } from "../store"


const Questions = ({ questions }) => {

  const onDelete = async(id) => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await deleteQuestion(id)
          .then(() => resolve())
          .catch((error) => reject(error))
      }),
      {
        pending: "deleting",
        success: "Question deleted",
        error: "ERROR! QUESTION NOT DELETED"
      }
    )
  }

  const onEdit = (question) => {
    setGlobalState("question", question)
    setGlobalState("editquestionModal", "scale-100")
  }

  return (
    <div className="md:w-1/2 space-y-2 overflow-y-auto h-full">
      <h1 className="font-semibold border-b border-gray-600 p-2 text-2xl tracking-widest md:text-md text-black">Questions</h1>
      {questions.map((prop, i) => (
        <div className="border-b border-[#14152A]" key={i}>
          <div className="flex space-x-2 px-2">
          {prop.status == 1 ? (
              <img src="https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-8 h-8 rounded-full object-cover object-center border-1 border-pink-400" />
            ) : prop.status == 2 ? (
          
              <img src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-8 h-8 rounded-full object-cover object-center border-1 border-pink-400" />
            ) : (
              <img src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-8 h-8 rounded-full object-cover object-center border-1 border-pink-400" />
            )}
           
            <div className="w-full">
              <h1 className="font-medium text-md">{prop.user}</h1>
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-light">{prop.description}</p>
                <div className="flex space-x-1">
                  <button onClick={() => onEdit(prop)} className="text-sm text-sky-500">
                    <FiEdit2 />
                  </button>
                  <button onClick={() => onDelete(prop.id)} className="text-sm text-red-500">
                    <MdOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Questions