import UUID from 'uuid/v4';

// action Creator
const searchActionCreator = (value) => {
  // const id = `${Math.random()}-${Math.random}`
  const id = UUID();
  return {
    type: 'SEARCH_TERM',
    data: {name: value, id}
  }
};

const checkedActionCreator = (name, id) => {
  // console.log('this is my vlaue', value);
  return {
    type: 'TOGGLE_CHECKED',
    data: {name, id}
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
            name : action.data.name,
            id: action.data.id,
            checked: false
          }
        ]
      };


    case 'TOGGLE_CHECKED': {
      const newStoreData = state.storeData.map(storedItem => {
        if (action.data.id === storedItem.id){
          return {
            ...storedItem,
            checked: !storedItem.checked,
          }

        }
        return storedItem;
      })
      return {
        storeData: newStoreData,
      };
    }
    default:
      return state;
  }

}

export default reducer;
export { searchActionCreator, checkedActionCreator };