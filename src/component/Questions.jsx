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
    <div className="md:w-1/2 h-fit space-y-2 overflow-y-auto h-full">
      <h1 className="font-semibold border-b border-gray-600 py-2 text-xl md:text-md text-center md:text-start text-black">questions</h1>
      {questions.map((prop, i) => (
        <div className="border-b border-[#14152A]" key={i}>
          <div className="flex space-x-2 px-2">
            <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-8 h-8 rounded-full object-cover object-center" />
            <div className="w-full">
              <h1 className="font-medium text-md">{prop.title}</h1>
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-light">{prop.description}</p>
                <div className="flex space-x-2">
                  <button onClick={() => onEdit(prop)}className="text-sm">
                    <FiEdit2 />
                  </button>
                  <button onClick={() => onDelete(prop.id)}>
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