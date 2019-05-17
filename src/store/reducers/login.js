const INITIAL_STATE = {
  loading: false,
  user: {}
};
export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      return { ...state, loading: false, user: action.payload.user };

    case "LOGOUT":
      return state;
    default:
      return state;
  }
}
