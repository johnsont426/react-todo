import React from 'react'
import PropTypes from 'prop-types'
import { ModalContainer, SingleTodoContainer } from '../containers'

export default function Todos ({todosArray, openModal, numbersOfTodos, clearModal, openSidebar, isSidebarOpen}) {
	let hamburgerIconStyle = isSidebarOpen ? 'hamburgerIcon open' : 'hamburgerIcon'

  function handleClickAddNewTodo () {
  	clearModal()
  	openModal()
  }

  function handleClickHamburgerIcon () {
  	openSidebar()
  }

  return (
    <div className="todosContainer">
    	<div className="hamburgerIconStyle" onClick={handleClickHamburgerIcon}>
				<span></span>
				<span></span>
				<span></span>
			</div>
    	<p>{numbersOfTodos}</p>
      <ModalContainer />
      <ul className="singleTodoList">
        <li className="addNewTodo" onClick={handleClickAddNewTodo}><i className="fa fa-plus" aria-hidden="true"></i>Add new todo</li>
        {todosArray.map((todoObj) => {
        	return <SingleTodoContainer key={`${todoObj.date}${todoObj.todoTitle}`} todoObj={todoObj}/>
        })}
      </ul>
    </div>
  )
}