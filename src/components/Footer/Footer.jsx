
import React from 'react';
import './Footer.css'
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter/TasksFilter'

function Footer ({todoCount, filter, onFilterGhange, deleteItems})  {
 

    return (
        <footer className="footer">
          <span className="todo-count">{todoCount} items left</span>
          <TasksFilter filter ={filter} onFilterGhange={onFilterGhange}/>
          <button  type='button'className="clear-completed" onClick={()=> deleteItems()}>Clear completed</button>
        </footer>
    );
 
};

export default Footer;

Footer.propTypes = {
 todoCount: PropTypes.number.isRequired,
 filter : PropTypes.func.isRequired,
 onFilterGhange: PropTypes.func.isRequired,
 deleteItems : PropTypes.func.isRequired
}