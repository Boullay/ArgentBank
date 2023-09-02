
const initialState = {
  status: 'void',
  user: null,
  token: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "REMOVE_TOKEN":
      return {
        ...state,
        token: null,
        user: null,
      }
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};