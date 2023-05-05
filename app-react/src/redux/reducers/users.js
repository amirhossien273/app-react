
import assign from 'object-assign';
export default (state = {users: {email: "a@a.com",password: "123"}}, action) => {
    switch (action.type) {
    
        case "SET_FORMVALUES_USERS":
            let k = action.key;
            let users = state.users;
            users = assign({}, users, {[k]: action.name});
            return assign({}, state, {
                users: assign({}, { ...users})
            });
      default:
        return state;
    }
  };