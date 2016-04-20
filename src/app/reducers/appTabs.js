export default (state = {initIndex:0}, action) => {
  // console.debug("appTabs state:", state);
  switch (action.type) {
    case 'UPDATE_INDEX':
      const newState = {
        ...state, 
        initIndex: action.index,
      }
      console.debug("appTabs index:", newState.initIndex);
      return newState;

    default:
      return state;
  }
};