import React from 'react'
import PropTypes from 'prop-types'
import { ModalContainer, SingleTodoContainer } from '../containers'

export default function Todos ({todosArray, openModal, numbersOfTodos, clearModal, openSidebar, closeSidebar, isSidebarOpen, clearEditingTodo, activated}) {
	let hamburgerIconStyle = isSidebarOpen ? 'hamburgerIcon open' : 'hamburgerIcon'

  function handleClickAddNewTodo () {
    clearEditingTodo()
  	clearModal()
  	openModal()
  }

  function handleClickHamburgerIcon () {
  	if (isSidebarOpen === true) {
  		closeSidebar()
  	} else {
  		openSidebar()
  	}
  }

  return (
    <div className="todosContainer">
    	<div className={hamburgerIconStyle} onClick={handleClickHamburgerIcon}>
				<span></span>
				<span></span>
				<span></span>
			</div>
      <ModalContainer />
      <div className="todoListTitle">
        <h1>{activated}</h1>
        <div className="count">{todosArray.length}</div>
      </div>
      <ul className="singleTodoList">
        <li className="addNewTodo" onClick={handleClickAddNewTodo}><i className="fa fa-plus" aria-hidden="true"></i>Add new todo</li>
        {todosArray.map((todoObj) => {
        	return <SingleTodoContainer key={`${todoObj.timeStamp}`} todoObj={todoObj}/>
        })}
      </ul>
    </div>
  )
}