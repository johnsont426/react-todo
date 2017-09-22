import { Map } from 'immutable'

const OPEN_SIDEBAR = 'OPEN_SIDEBAR'

export function openSidebar () {
  return {
    type: OPEN_SIDEBAR,
  }
}

const initialState = Map({
  isOpen: false,
})

export default function sidebar (state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDEBAR :
      return state.merge({
        isOpen: true,
      })
    default :
      return state
  }
}