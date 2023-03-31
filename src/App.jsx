import { ToastContainer } from "react-toastify";
import UpdateQuestionModal from "./component/UpdateQuestionModal";
import { useGlobalState } from "./store";
import Page from "./views/Page";

const App = () => {
  const [question] = useGlobalState("question");
  return (
    <div className="">
      <Page/>
      {
        question ? <UpdateQuestionModal/> : null
      }
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
