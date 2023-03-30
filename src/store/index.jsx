import { createGlobalState } from "react-hooks-global-state";

const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
  questionModal: "scale-0",
  questions: [],


});


export { getGlobalState, useGlobalState, setGlobalState };
