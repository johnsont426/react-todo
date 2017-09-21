const ADD_TODO = 'ADD_TODO'

function addTodo (todoObj) {
  return {
    type: ADD_TODO,
    todoObj,
  }
}

const initialState = {
  todos: [],
}

export default function todos (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO :
      return state.todos.push(action.todoObj)
    default :
      return state
  }
}