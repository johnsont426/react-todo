import React from 'react'
import PropTypes from 'prop-types'
import { SidebarTabContainer } from '../containers'

export default function Sidebar ({isOpen}) {
  let sidebarContainerStyle = isOpen ? 'sidebarContainer open' : 'sidebarContainer'
  return (
    <div className={sidebarContainerStyle}>
      <div className="tabsContainer">
        <SidebarTabContainer tabName="All Todos" />
        <SidebarTabContainer tabName="Todos" />
        <SidebarTabContainer tabName="Completed" />
      </div>
    </div>
  )
}