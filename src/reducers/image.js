const initialState = {
  list: [
    {image: 'https://source.unsplash.com/random?v=1'},
    {image: 'https://source.unsplash.com/random?v=2'},
    {image: 'https://source.unsplash.com/random?v=3'},
    {image: 'https://source.unsplash.com/random?v=4'},
    {image: 'https://source.unsplash.com/random?v=5'},
    {image: 'https://source.unsplash.com/random?v=6'},
    {image: 'https://source.unsplash.com/random?v=7'},
    {image: 'https://source.unsplash.com/random?v=8'},
    {image: 'https://source.unsplash.com/random?v=9'},
    {image: 'https://source.unsplash.com/random?v=10'},
    {image: 'https://source.unsplash.com/random?v=11'},
    {image: 'https://source.unsplash.com/random?v=12'},
    {image: 'https://source.unsplash.com/random?v=13'},
    {image: 'https://source.unsplash.com/random?v=14'},
    {image: 'https://source.unsplash.com/random?v=15'},
  ],
  activedId: null
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

    default:
      return state;
  }
};

export default imageReducer;