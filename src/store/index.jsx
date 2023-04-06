import { createGlobalState } from "react-hooks-global-state";

const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
  questionModal: "scale-0",
  editquestionModal: "scale-0",
  questions: [],
  question: null,
  currentUser: null,
  authed: false,
});

export { getGlobalState, useGlobalState, setGlobalState };
