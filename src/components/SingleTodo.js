import React from 'react'
import PropTypes from 'prop-types'

export default function SingleTodo ({todoObj, deleteTodo, updateIsDone, updateEditingTodo, openAndFillOutModal}) {
  const style = todoObj.isDone ? 'singleTodo isDone' : 'singleTodo'

  function handleClickDelete () {
    deleteTodo(todoObj)
  }

  function handleClickCheck () {
    updateIsDone(todoObj)
  }

  function handleClickTodo () {
  	updateEditingTodo(todoObj)
  	openAndFillOutModal(todoObj)
  }

  return (
    <li className={style}>
    	{todoObj.isDone ? <i className="fa fa-check-square-o" aria-hidden="true" onClick={handleClickCheck}></i> : <i className="fa fa-square-o" aria-hidden="true" onClick={handleClickCheck}></i>}
      <span onClick={handleClickTodo} className="todoTitle">{todoObj.todoTitle}</span>
      <i className="fa fa-trash-o" aria-hidden="true" onClick={handleClickDelete}></i>
    </li>
  )
}

const { func, object } = PropTypes

SingleTodo.propTypes = {
  todoObj: object.isRequired,
  deleteTodo: func.isRequired,
  updateIsDone: func.isRequired,
  updateEditingTodo: func.isRequired,
  openAndFillOutModal: func.isRequired,
}
