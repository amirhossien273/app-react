import assign from 'object-assign';
export default (state = {category: [],create_category: {file: "",title: ""}}, action) => {
    switch (action.type) {
      case "GET_ALL_CATEGORY":  
        return assign({}, state, {
            category: assign([], state.category, {
                ...action.data
            })});
        case "ADD_DATA_TO_CREATE_CATEGORY": 
          let k = action.key;
          let create_category = state.create_category;
          create_category = assign({}, create_category, {[k]: action.name});
          return assign({}, state, {
            create_category: assign({}, { ...create_category})
          });
          return 
      default:
        return state;
    }
  };