const initialState = {
  list: [],
  activedId: null
}

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HOBBY': {
      // const newList = [...state.list];
      // newList.push(action.payload)
      // return {
      //   ...state,
      //   list: newList,
      // }
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    }

    case 'SET_ACTIVE_HOBBY': {
      const newActiveId = action.payload.id;
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