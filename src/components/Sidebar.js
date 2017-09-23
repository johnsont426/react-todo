import React from 'react'
import PropTypes from 'prop-types'
import { SidebarTabContainer } from '../containers'

export default function Sidebar ({isOpen, closeSidebar}) {
  let sidebarContainerStyle = isOpen ? 'sidebarContainer open' : 'sidebarContainer'

  function handleClick () {
    closeSidebar()
  }

  return (
    <div className={sidebarContainerStyle}>
      <div className="closeBtn" onClick={handleClick}>X</div>
      <div className="tabsContainer">
        <SidebarTabContainer tabName="All Todos" />
        <SidebarTabContainer tabName="Todos" />
        <SidebarTabContainer tabName="Completed" />
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
}