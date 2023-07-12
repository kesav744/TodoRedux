import React from 'react';
import classes from './listItem.module.css';
import { useDispatch } from 'react-redux';
const ListItems = (props) => {

    const dispatch = useDispatch();

    const deleteHandler = () => {
        console.log(props.id);
       dispatch({ type: 'ondelete', id: props.id});
    };

  return <li className={classes.list}>
    <div>{props.children}</div><button onClick={deleteHandler}>DELETE</button>
  </li>
};

export default ListItems;
