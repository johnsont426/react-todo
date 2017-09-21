import { todayDate, todayMonthName, todayYear, getDateOptionsArray } from '../../helpers/utils'

const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const UPDATE_TODO_TITLE = 'UPDATE_TODO_TITLE'
const UPDATE_TODO_DESCRIPTION = 'UPDATE_TODO_DESCRIPTION'
const UPDATE_YEAR = 'UPDATE_YEAR'
const UPDATE_MONTH = 'UPDATE_MONTH'
const UPDATE_DATE = 'UPDATE_DATE'
const UPDATE_DATE_ARRAY = 'UPDATE_DATE_ARRAY'

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

const initialState = {
  isOpen: true,
  todoDescription: '',
  todoTitle: '',
  date: todayDate,
  month: todayMonthName,
  year: todayYear,
  dateArray: getDateOptionsArray(todayMonthName, todayYear)
}

export default function modal (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL :
      return {
        ...state,
        isOpen: true,
      }
    case CLOSE_MODAL :
      return {
        ...state,
        isOpen: false,
      }
    case UPDATE_TODO_TITLE :
      return {
        ...state,
        todoTitle: action.todoTitle,
      }
    case UPDATE_DATE :
      return {
        ...state,
        date: action.date,
      }
    case UPDATE_MONTH :
      return {
        ...state,
        month: action.month,
      }
    case UPDATE_YEAR :
      return {
        ...state,
        year: action.year,
      }
    case UPDATE_TODO_DESCRIPTION :
      return {
        ...state,
        todoDescription: action.todoDescription,
      }
    case UPDATE_DATE_ARRAY :
      return {
        ...state,
        dateArray: action.dateArray
      }
    default :
      return state
  }
}