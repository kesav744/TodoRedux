import React from 'react';
import {useSelector} from 'react-redux';
import ListItems from './listIterm1';

import classes from './lower.module.css';

const Lower = () => {
    let belowList = useSelector(state => state.dummyLists);  
     
    return <ul className={classes.ul}>
        {belowList.map(li => <ListItems key={li.id} id={li.id}>{li.text}</ListItems>)}    
  </ul>;
};

export default Lower;
