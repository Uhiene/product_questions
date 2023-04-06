import { ToastContainer } from "react-toastify";
import UpdateQuestionModal from "./component/UpdateQuestionModal";
import { setGlobalState, useGlobalState } from "./store";
import Page from "./views/Page";
import { Route, Routes } from "react-router-dom";
import SignUp from "./views/SignUp";
import Header from "./component/Header";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthGuard from "./utils/AuthGuard";

const App = () => {
  const [question] = useGlobalState("question");
  useEffect(async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setGlobalState("currentUser", user);
      } else {
        setGlobalState("currentUser", null);
      }
    });
  }, []);

  return (
    <div className="">
      <Header />
      <Routes>
        <Route element={<AuthGuard />}>
          <Route path={"/"} element={<Page />} />
        </Route>
        <Route path={"/signup"} element={<SignUp />} />
      </Routes>
      {question ? <UpdateQuestionModal /> : null}
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
};

export default App;
