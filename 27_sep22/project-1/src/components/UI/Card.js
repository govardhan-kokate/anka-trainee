import React from 'react';
import './Card.css';
//import ExpenseItem from './ExpenseItem';

const Card = (props) => {
    //<ExpenseItem/>
    const classes = 'card' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;