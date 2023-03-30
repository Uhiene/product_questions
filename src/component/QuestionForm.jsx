import { setGlobalState} from "../store";
import { QuestionModal } from "./QuestionModal";

const QuestionForm = () => {
  return (
      <div className="w-1/2 h-2/5 p-5 bg-emerald-600 text-white rounded-lg space-y-10">
        <h1 className="text-2xl font-semibold">
          Click the button below to ask your questions
        </h1>
        <button
          className="bg-white p-4 w-24 rounded-md text-emerald-600 cursor-pointer"
          onClick={() => setGlobalState("questionModal", "scale-100")}
        >
          Click me
        </button>
      </div>
  );
};

export default QuestionForm;
