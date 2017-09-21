import React from 'react'
import PropTypes from 'prop-types'
import { default as ReactModal } from 'react-modal'
import { monthNameArray, yearArray, getDateOptionsArray } from '../helpers/utils'

const modalStyles = {
  content: {
    width: 500,
    margin: '0px auto',
    height: 350,
    padding: '0 30px 10px 30px',
  },
}

export default function Modal (props) {
	function addTodo () {
	}

	function handleChangeYear (e) {
		props.updateYear(e.target.value)
		props.updateDateArray(props.month, e.target.value)
	}

	function handleChangeMonth (e) {
		props.updateMonth(e.target.value)
		props.updateDateArray(e.target.value, props.year)
	}
  return (
    <ReactModal style={modalStyles} isOpen={props.isOpen} onRequestClose={props.closeModal}>
    	<div className="titleInputContainer">
    		<label>Title</label>
    		<input type='text' name="title" placeholder="Title" onChange={(e) => props.updateTodoTitle(e.target.value)}/>
    	</div>
    	<div className="datePickerContainer">
    		<label>Due Date</label>
        <select id="day" name="day" className="dateInput" onChange={(e) => props.updateDate(e.target.value)}>
        	{props.dateOptionsArray.map((date) => <option key={date}>{date}</option>)}
        </select>
	      <span>/</span>
        <select id="month" name="month" className="dateInput" defaultValue={props.month} onChange={handleChangeMonth}>
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
          onChange={(e) => props.updateTodoDescription(e.target.value)}
          value={props.todoText}
          maxLength={140}
          type='text'
          className="descriptionInput"
          placeholder="Description" />
      </div>
      <button
        onClick={addTodo}
        className="modalBtn"
        disabled={props.isSubmitDisabled}
        >
          {'Save'}
      </button>
      <button
        onClick={addTodo}
        className="modalBtn"
        disabled={props.isSubmitDisabled}
        >
          {'Mark As Complete'}
      </button>

    </ReactModal>
  )
}