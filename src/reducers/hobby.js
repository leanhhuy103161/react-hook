const initialState = {
  list: [],
  activedId: null
}

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HOBBY': {
      const newList = [...state.list];
      newList.push(action.payload)
      return {
        ...state,
        list: newList,
      }
    }

    case 'SET_ACTIVE_HOBBY': {
      const newActiveId = action.playload.id;

      return {
        ...state,
        activeId: newActiveId,
      }
    }

    default:
      return state;
  }
};

export default hobbyReducer;