import React, { Component } from 'react'
import { Modal } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActionCreators from '../redux/modules/modal'
import * as todosActionCreators from '../redux/modules/todos'
import { getDateOptionsArray } from '../helpers/utils'

function mapStateToProps ({modal, todos}) {
  const titleLength = modal.get('todoTitle').length
  const descriptionLength = modal.get('todoDescription').length

  return {
    isOpen: modal.get('isOpen'),
    isSubmitDisabled: titleLength === 0,
    isMarkAsCompleteDisabled: todos.get('editingTodo') === null || todos.getIn(['editingTodo', 'isDone']) === true,
    date: modal.get('date'),
    month: modal.get('month'),
    year: modal.get('year'),
    dateOptionsArray: modal.get('dateArray'),
    todoDescription: modal.get('todoDescription'),
    todoTitle: modal.get('todoTitle'),
    editingTodo: todos.get('editingTodo')
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...modalActionCreators,
    ...todosActionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)