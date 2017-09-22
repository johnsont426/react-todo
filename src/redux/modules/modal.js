import { fromJS } from 'immutable'
import { todayDate, todayMonthName, todayYear, getDateOptionsArray, monthNameArray } from '../../helpers/utils'

const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const UPDATE_TODO_TITLE = 'UPDATE_TODO_TITLE'
const UPDATE_TODO_DESCRIPTION = 'UPDATE_TODO_DESCRIPTION'
const UPDATE_YEAR = 'UPDATE_YEAR'
const UPDATE_MONTH = 'UPDATE_MONTH'
const UPDATE_DATE = 'UPDATE_DATE'
const UPDATE_DATE_ARRAY = 'UPDATE_DATE_ARRAY'
const CLEAR_MODAL = 'CLEAR_MODAL'

export function openModal () {
  return {
    type: OPEN_MODAL,
  }
}

export function closeModal () {
  return {
    type: CLOSE_MODAL
  }
}

export function clearModal () {
  return {
    type: CLEAR_MODAL
  }
}

export function updateTodoDescription (todoDescription) {
  return {
    type: UPDATE_TODO_DESCRIPTION,
    todoDescription,
  }
}

export function updateTodoTitle (todoTitle) {
  return {
    type: UPDATE_TODO_TITLE,
    todoTitle,
  }
}

export function updateYear (year) {
  return {
    type: UPDATE_YEAR,
    year,
  }
}

export function updateMonth (month) {
  return {
    type: UPDATE_MONTH,
    month,
  }
}

export function updateDate (date) {
  return {
    type: UPDATE_DATE,
    date,
  }
}

export function updateDateArray (month, year) {
  return {
    type: UPDATE_DATE_ARRAY,
    dateArray: getDateOptionsArray(month, year)
  }
}

export function openAndFillOutModal (todoObj) {
  const d = new Date(todoObj.date)
  const date = d.getDate()
  const month = monthNameArray[d.getMonth()]
  const year = d.getFullYear()
  return function (dispatch, getState) {
    dispatch(openModal())
    dispatch(updateDate(date))
    dispatch(updateMonth(month))
    dispatch(updateYear(year))
    dispatch(updateTodoTitle(todoObj.todoTitle))
    dispatch(updateTodoDescription(todoObj.todoDescription))
  }
}

const initialState = fromJS({
  isOpen: false,
  todoDescription: '',
  todoTitle: '',
  date: todayDate,
  month: todayMonthName,
  year: todayYear,
  dateArray: getDateOptionsArray(todayMonthName, todayYear)
})

export default function modal (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL :
      return state.merge({
        isOpen: true,
      })
    case CLOSE_MODAL :
      return state.merge({
        isOpen: false,
      })
    case UPDATE_TODO_TITLE :
      return state.merge({
        todoTitle: action.todoTitle,
      })
    case UPDATE_DATE :
      return state.merge({
        date: action.date,
      })
    case UPDATE_MONTH :
      return state.merge({
        month: action.month,
      })
    case UPDATE_YEAR :
      return state.merge({
        year: action.year,
      })
    case UPDATE_TODO_DESCRIPTION :
      return state.merge({
        todoDescription: action.todoDescription,
      })
    case UPDATE_DATE_ARRAY :
      return state.merge({
        dateArray: action.dateArray
      })
    case CLEAR_MODAL :
      return initialState
    default :
      return state
  }
}