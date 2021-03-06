import React from 'react'
import PropTypes from 'prop-types'
import { default as ReactModal } from 'react-modal'
import { monthNameArray, yearArray, getDateOptionsArray, getFormattedTodoObj } from '../helpers/utils'

export default function Modal (props) {
  const {updateYear, updateDateArray, updateMonth, isOpen, closeModal, updateTodoTitle,
    updateDate, dateOptionsArray, month, year, date, updateTodoDescription, todoDescription,
    todoTitle, isSubmitDisabled, isMarkAsCompleteDisabled, addTodo, editingTodo, editTodo } = props

  const submitButtonStyle = isSubmitDisabled ? 'modalBtn disabled' : 'modalBtn'
  const markAsCompleteButtonStyle = isMarkAsCompleteDisabled ? 'modalBtn disabled' : 'modalBtn'

	function handleClickSave () {
    if (editingTodo) {
      editTodo(editingTodo.toJS(), getFormattedTodoObj(month, date, year, todoTitle, todoDescription, editingTodo.get('isDone')))
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

  function handleClickMarkAsComplete () {
    editTodo(editingTodo.toJS(), getFormattedTodoObj(month, date, year, todoTitle, todoDescription, true))
    closeModal()
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={{
        base: 'modal',
        afterOpen: 'modalAfterOpen',
        beforeClose: 'modalBeforeClose'}}>
    	<div className="titleInputContainer">
    		<label>Title</label>
    		<input type='text' name="title" placeholder="Title" value={todoTitle} onChange={(e) => updateTodoTitle(e.target.value)}/>
    	</div>
    	<div className="datePickerContainer">
    		<label>Due Date</label>
        <select id="day" name="day" className="dateInput" value={date} onChange={(e) => updateDate(e.target.value)}>
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
        className={submitButtonStyle}
        disabled={isSubmitDisabled}
        >
          {'Save'}
      </button>
      <button
        onClick={handleClickMarkAsComplete}
        className={markAsCompleteButtonStyle}
        disabled={isMarkAsCompleteDisabled}
        >
          {'Mark As Complete'}
      </button>
    </ReactModal>
  )
}

const { func, string, number, bool, array } = PropTypes

Modal.propTypes = {
  updateYear: func.isRequired,
  updateDateArray: func.isRequired,
  updateMonth:func.isRequired,
  isOpen: bool.isRequired,
  closeModal: func.isRequired,
  updateTodoTitle: func.isRequired,
  updateDate: func.isRequired,
  dateOptionsArray: array.isRequired,
  month: string.isRequired,
  year: number.isRequired,
  date: number.isRequired,
  updateTodoDescription: func.isRequired,
  todoDescription: string.isRequired,
  todoTitle: string.isRequired,
  isSubmitDisabled: bool.isRequired,
  isMarkAsCompleteDisabled: bool.isRequired,
  addTodo: func.isRequired,
  editTodo: func.isRequired,
}