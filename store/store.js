import { createStore } from "redux";

const listReducer = (state = { enteredValue: "", dummyLists: [] }, action) => {
  if (action.type === "onchange") {
    return {
      enteredValue: action.input,
      dummyLists: state.dummyLists,
    };
  }
  if (action.type === "onsubmit" && state.enteredValue !== "") {
    const result = state.dummyLists.filter(f => f.text === state.enteredValue);
    if (result.length !== 1) {
      const updatedState = {
        enteredValue: "",
        dummyLists: [
          { text: state.enteredValue, id: Math.random().toString() },
          ...state.dummyLists,
        ],
      };
      return updatedState;
    } 
    
  }
  if (action.type === "ondelete") {
    const deleteArrayItem = state.dummyLists.filter((f) => f.id !== action.id);

    return {
      enteredValue: state.enteredValue,
      dummyLists: deleteArrayItem,
    };
  }
  return state;
};

const store = createStore(listReducer);

export default store;
