const initialState = {
  list: [
    // {id: 1000, author: "lorem", image: 'https://source.unsplash.com/random?v=1'},
    // {id: 1001, author: "lorem", image: 'https://source.unsplash.com/random?v=2'},
    // {id: 1002, author: "lorem", image: 'https://source.unsplash.com/random?v=3'},
    // {id: 1003, author: "lorem", image: 'https://source.unsplash.com/random?v=4'},
    // {id: 1004, author: "lorem", image: 'https://source.unsplash.com/random?v=5'},
    // {id: 1005, author: "lorem", image: 'https://source.unsplash.com/random?v=6'},
    // {id: 1006, author: "lorem", image: 'https://source.unsplash.com/random?v=7'},
    // {id: 1007, author: "lorem", image: 'https://source.unsplash.com/random?v=8'},
    // {id: 1008, author: "lorem", image: 'https://source.unsplash.com/random?v=9'},
    // {id: 1009, author: "lorem", image: 'https://source.unsplash.com/random?v=10'},
    // {id: 1010, author: "lorem", image: 'https://source.unsplash.com/random?v=11'},
    // {id: 1011, author: "lorem", image: 'https://source.unsplash.com/random?v=12'},
    // {id: 1012, author: "lorem", image: 'https://source.unsplash.com/random?v=13'},
    // {id: 1013, author: "lorem", image: 'https://source.unsplash.com/random?v=14'},
    // {id: 1014, author: "lorem", image: 'https://source.unsplash.com/random?v=15'},
  ],
  load: false
}

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_IMAGE': {
      const newList = [...state.list];
      newList.push(action.payload)
      return {
        ...state,
        list: newList,
      }
    }

    case 'CHANGE_IMAGE': {
      return state;
    }

    case 'GET_IMAGE_FROM_API': {
      return {
        ...state,
        load: true,
      };
    }

    case 'GET_IMAGE_FROM_API_SUCCESS': {
      const data = action.payload;
      return {
        ...state,
        list: data,
        load: false,
      };
    }

    default:
      return state;
  }
};

export default imageReducer;