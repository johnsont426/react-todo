import React, { Component } from 'react'
import { Todos } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActionCreators from '../redux/modules/modal'
import * as todosActionCreators from '../redux/modules/todos'
import * as sidebarActionCreators from '../redux/modules/sidebar'

function mapStateToProps ({todos, sidebar}) {
  return {
    todosArray: todos.get('todosArray').toJS(),
    numbersOfTodos: todos.get('todosArray').size,
    isSidebarOpen: sidebar.get('isOpen'),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...modalActionCreators,
    ...todosActionCreators,
  	...sidebarActionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)