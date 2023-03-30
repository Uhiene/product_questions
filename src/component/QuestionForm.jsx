import { setGlobalState} from "../store";

const QuestionForm = () => {
  return (
      <div className="w-1/2 h-full bg-cover bg-bottom p-5 bg-emerald-600 text-white space-y-10"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600")',
      }}
      >
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
