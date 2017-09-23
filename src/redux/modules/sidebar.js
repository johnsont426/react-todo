import { Map } from 'immutable'

const OPEN_SIDEBAR = 'OPEN_SIDEBAR'
const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'
const UPDATE_ACTIVATED = 'UPDATE_ACTIVATED'

export function openSidebar () {
  return {
    type: OPEN_SIDEBAR,
  }
}

export function closeSidebar () {
  return {
    type: CLOSE_SIDEBAR,
  }
}

export function updateActivated (tabName) {
  return {
    type: UPDATE_ACTIVATED,
    tabName,
  }
}

const initialState = Map({
  isOpen: false,
  activated: 'All Todos',
})

export default function sidebar (state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDEBAR :
      return state.merge({
        isOpen: true,
      })
    case CLOSE_SIDEBAR :
      return state.merge({
        isOpen: false,
      })
    case UPDATE_ACTIVATED :
      return state.merge({
        activated: action.tabName
      })
    default :
      return state
  }
}