import React from 'react'
import PropTypes from 'prop-types'
import list from '../icons/list.svg'
import checked from '../icons/checked.svg'
import warning from '../icons/warning.svg'

function Icon ({tabName}) {
  if (tabName === 'All Todos') {
    return <img src={list} alt="list icon" />
  } else if (tabName === 'Completed') {
    return <img src={checked} alt="completed icon" />
  } else {
    return <img src={warning} alt="todos icon" />
  }
}

export default function SidebarTab ({tabName, updateActivated, todoCount, isActivated, closeSidebar}) {
  const tabStyle = isActivated ? 'tab activated' : 'tab'

  function handleClick () {
    updateActivated(tabName)
    closeSidebar()
  }

  return (
    <div onClick={handleClick} className={tabStyle}>
      <div className="tabContainer">
        <div className="iconAndTabName">
          <Icon tabName={tabName}/>
          <p className="tabName">{tabName}</p>
        </div>
        <div className="count">{todoCount}</div>
      </div>
    </div>
  )
}

const { string, func, number, bool } = PropTypes

SidebarTab.propTypes = {
  tabName: string.isRequired,
  updateActivated: func.isRequired,
  todoCount: number.isRequired,
  isActivated: bool.isRequired,
  closeSidebar:func.isRequired,
}