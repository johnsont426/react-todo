import { Map, fromJS } from 'immutable'

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const UPDATE_IS_DONE = 'UPDATE_IS_DONE'
const UPDATE_EDITING_TODO = 'UPDATE_EDITING_TODO'
const EDIT_TODO = 'EDIT_TODO'

export function addTodo (todoObj) {
  return {
    type: ADD_TODO,
    todoObj,
  }
}

export function deleteTodo (todoObj) {
  return {
    type: DELETE_TODO,
    todoObj,
  }
}

export function updateIsDone (todoObj) {
  return {
    type: UPDATE_IS_DONE,
    todoObj,
  }
}

export function updateEditingTodo (todoObj) {
  return {
    type: UPDATE_EDITING_TODO,
    todoObj,
  }
}

export function editTodo (oldTodoObj, newTodoObj) {
  return {
    type: EDIT_TODO,
    oldTodoObj,
    newTodoObj,
  }
}

const initialState = fromJS({
  todosArray: [],
  isDoneArray: [],
})

export default function todos (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO :
      return state.merge({
        todosArray: state.get('todosArray').push(Map(action.todoObj))
      })
    case DELETE_TODO :
      let i = state.get('todosArray').findIndex(ele => ele.get('timeStamp') === action.todoObj.timeStamp)
      debugger
      return state.merge({
        todosArray: state.get('todosArray').delete(i)
      })
    case UPDATE_IS_DONE :
      i = state.get('todosArray').findIndex(ele => ele.get('timeStamp') === action.todoObj.timeStamp)
      if (state.getIn(['todosArray', i, 'isDone']) === true) {
        return state.merge({
          todosArray: state.get('todosArray').update(i, obj => obj.merge({isDone: false})),
          isDoneArray: state.get('isDoneArray').push(state.getIn(['todosArray', i]))
        })
      } else {
        return state.merge({
          todosArray: state.get('todosArray').update(i, obj => obj.merge({isDone: true})),
          isDoneArray: state.get('isDoneArray').push(state.getIn(['todosArray', i]))
        })
      }
    case UPDATE_EDITING_TODO :
      return state.merge({
        editingTodo: Map(action.todoObj),
      })
    case EDIT_TODO :
      i = state.get('todosArray').findIndex(ele => ele.get('timeStamp') === action.oldTodoObj.timeStamp)
      return state.merge({
        todosArray: state.get('todosArray').update(i, obj => obj.merge(action.newTodoObj))
      })
    default :
      return state
  }
}