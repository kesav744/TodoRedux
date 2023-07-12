import React from "react";
import classes from "./upper.module.css";
import { useDispatch, useSelector } from "react-redux";

const Upper = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.enteredValue);

  const onChangeHandler = (event) => {    
    dispatch({ type: "onchange", input: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch({ type: "onsubmit", submittedValue: inputValue });
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <input type="text" value={inputValue} onChange={onChangeHandler} />
      <button>Add input</button>
    </form>
  );
};

export default Upper;
