import { ToastContainer } from "react-toastify";
import { QuestionModal } from "./component/QuestionModal";
import Page from "./views/Page";

const App = () => {
  return (
    <div className="App">
      <Page/>
      <QuestionModal/>
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
