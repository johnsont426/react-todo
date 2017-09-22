import React from 'react'
import PropTypes from 'prop-types'
import { default as ReactModal } from 'react-modal'
import { monthNameArray, yearArray, getDateOptionsArray, getFormattedTodoObj } from '../helpers/utils'

const modalStyles = {
  content: {
    width: 500,
    margin: '0px auto',
    height: 350,
    padding: '0 30px 10px 30px',
  },
}

export default function Modal (props) {
  const {updateYear, updateDateArray, updateMonth, isOpen, closeModal, updateTodoTitle,
    updateDate, dateOptionsArray, month, year, date, updateTodoDescription, todoDescription,
    todoTitle, isSubmitDisabled, addTodo, isEditing, editTodo } = props

	function handleClickSave () {
    if (isEditing) {
      editTodo(isEditing, getFormattedTodoObj(month, date, year, todoTitle, todoDescription, false))
    } else {
      addTodo(getFormattedTodoObj(month, date, year, todoTitle, todoDescription, false))
    }
    closeModal()
	}

	function handleChangeYear (e) {
		updateYear(e.target.value)
		updateDateArray(month, e.target.value)
	}

	function handleChangeMonth (e) {
		updateMonth(e.target.value)
		updateDateArray(e.target.value, year)
	}

  return (
    <ReactModal style={modalStyles} isOpen={isOpen} onRequestClose={closeModal}>
    	<div className="titleInputContainer">
    		<label>Title</label>
    		<input type='text' name="title" placeholder="Title" value={todoTitle} onChange={(e) => updateTodoTitle(e.target.value)}/>
    	</div>
    	<div className="datePickerContainer">
    		<label>Due Date</label>
        <select id="day" name="day" className="dateInput" onChange={(e) => updateDate(e.target.value)}>
        	{dateOptionsArray.map((date) => <option key={date}>{date}</option>)}
        </select>
	      <span>/</span>
        <select id="month" name="month" className="dateInput" defaultValue={month} onChange={handleChangeMonth}>
          {monthNameArray.map((monthName) => <option key={monthName}>{monthName}</option>)}
        </select>
	      <span>/</span>
        <select id="year" name="year" className="dateInput" onChange={handleChangeYear}>
        	{yearArray().map((year) => <option key={year}>{year}</option>)}
        </select>
    	</div>
      <div className="descriptionInputContainer">
      	<label>Description</label>
        <textarea
          onChange={(e) => updateTodoDescription(e.target.value)}
          value={todoDescription}
          maxLength={140}
          type='text'
          className="descriptionInput"
          placeholder="Description" />
      </div>
      <button
        onClick={handleClickSave}
        className="modalBtn"
        disabled={isSubmitDisabled}
        >
          {'Save'}
      </button>
      <button
        onClick={addTodo}
        className="modalBtn"
        disabled={isSubmitDisabled}
        >
          {'Mark As Complete'}
      </button>

    </ReactModal>
  )
}