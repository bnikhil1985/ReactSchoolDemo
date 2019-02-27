

// action Creator
const actionCreator = (value) => {
  return {
    type: 'SEARCH_TERM',
    data: value
  }
};

// Reducer
const reducer = (state, action) => {
  if(action.type === 'SEARCH_TERM') {
  console.log('I am in the reducer', action, state);
    if(state && state.storeData) {
      return {storeData: [...state.storeData, action.data]};
    } else {
      return {storeData: [action.data]};
    }
  }

}

export default reducer;
export { actionCreator };