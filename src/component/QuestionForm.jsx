import {QuestionModal} from "./QuestionModal"

const QuestionForm = () => {
  return (
      <div className="md:w-1/2 md:h-full h-[50vh] bg-cover bg-bottom p-5 bg-pink-400 space-y-10"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600")',
      }}
      >
        <h1 className="text-2xl font-semibold text-white">
          Have any questions in mind?
        </h1>
        <QuestionModal/>
      </div>
  );
};

export default QuestionForm;
