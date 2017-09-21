import React, { Component } from 'react'
import { SidebarContainer, TodosContainer } from './'

class MainContainer extends Component {
  render () {
    return (
      <div className="main">
        <SidebarContainer />
        <TodosContainer />
      </div>
    )
  }
}

export default MainContainer