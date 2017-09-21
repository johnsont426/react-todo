import React from 'react'
import PropTypes from 'prop-types'
import { ModalContainer } from '../containers'

export default function Todos ({todos}) {
  return (
    <div className="todosContainer">
      <ModalContainer />
      <p>+ Add new todo</p>
      <ul>

      </ul>
    </div>
  )
}