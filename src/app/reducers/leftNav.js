const leftNav = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LEFTNAV':
    	const newState = {
      	...state,
      	open: !state.open
      }
      return newState

    default:
      return state
  }
}

export default leftNav