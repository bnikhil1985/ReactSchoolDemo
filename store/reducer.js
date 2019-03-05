

// action Creator
const searchActionCreator = (value) => {
  return {
    type: 'SEARCH_TERM',
    data: value
  }
};

const checkedActionCreator = (value) => {
  return {
    type: 'TOGGLE_CHECKED',
    data: value
  }

};

const initialState = { storeData: []};

// Reducer
const reducer = (state = initialState, action) => {

  switch(action.type) {
    case 'SEARCH_TERM':
      return {
        storeData: [
          ...state.storeData,
          {
            name : action.data,
            checked: false
          }
        ]
      };
    case 'TOGGLE_CHECKED':
      return {
        storeData: [
          ...state.storeData,
          {
            name : action.data,
            checked: true
          }
        ]
      };
    default:
      return state;
  }

}

export default reducer;
export { searchActionCreator, checkedActionCreator };