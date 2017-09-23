import React, { Component } from 'react'
import { Todos } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActionCreators from '../redux/modules/modal'
import * as todosActionCreators from '../redux/modules/todos'
import * as sidebarActionCreators from '../redux/modules/sidebar'

function mapStateToProps ({todos, sidebar}) {
  function getTodosArray (tabName) {
    const allTodosArray = todos.get('allTodosArray')
    if (tabName === 'All Todos') {
      return allTodosArray.toJS()
    } else if (tabName === 'Completed') {
      return allTodosArray.filter((ele) => ele.get('isDone') === true).toJS()
    } else {
      return allTodosArray.filter((ele) => ele.get('isDone') === false).toJS()
    }
  }
  return {
    todosArray: getTodosArray(sidebar.get('activated')),
    numbersOfTodos: todos.get('allTodosArray').size,
    isSidebarOpen: sidebar.get('isOpen'),
    activated: sidebar.get('activated'),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...modalActionCreators,
    ...todosActionCreators,
  	...sidebarActionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)