import { Map, fromJS } from 'immutable'

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const UPDATE_IS_DONE = 'UPDATE_IS_DONE'
const UPDATE_EDITING_TODO = 'UPDATE_EDITING_TODO'
const EDIT_TODO = 'EDIT_TODO'
const CLEAR_EDITING_TODO = 'CLEAR_EDITING_TODO'

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

export function clearEditingTodo () {
  return {
    type: CLEAR_EDITING_TODO,
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
  allTodosArray: [],
  editingTodo: null,
})

export default function todos (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO :
      return state.merge({
        allTodosArray: state.get('allTodosArray').push(Map(action.todoObj))
      })
    case DELETE_TODO :
      let i = state.get('allTodosArray').findIndex(ele => ele.get('timeStamp') === action.todoObj.timeStamp)
      return state.merge({
        allTodosArray: state.get('allTodosArray').delete(i)
      })
    case UPDATE_IS_DONE :
      i = state.get('allTodosArray').findIndex(ele => ele.get('timeStamp') === action.todoObj.timeStamp)
      if (state.getIn(['allTodosArray', i, 'isDone']) === true) {
        return state.merge({
          allTodosArray: state.get('allTodosArray').update(i, obj => obj.merge({isDone: false})),
        })
      } else {
        return state.merge({
          allTodosArray: state.get('allTodosArray').update(i, obj => obj.merge({isDone: true})),
        })
      }
    case UPDATE_EDITING_TODO :
      return state.merge({
        editingTodo: Map(action.todoObj),
      })
    case CLEAR_EDITING_TODO :
      return state.merge({
        editingTodo: null,
      })
    case EDIT_TODO :
      i = state.get('allTodosArray').findIndex(ele => ele.get('timeStamp') === action.oldTodoObj.timeStamp)
      return state.merge({
        allTodosArray: state.get('allTodosArray').update(i, obj => obj.merge(action.newTodoObj))
      })
    default :
      return state
  }
}