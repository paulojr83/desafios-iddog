const INITIAL_STATE = {
  loading: false,
  error:{},
  user: {}
};
export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      return { ...state, loading: false, user: action.payload.user };

    case "LOGIN_ERROR":
      console.tron.log("reduce",action)
      return { ...state, loading: false, error: action.payload.error };

    case "LOGOUT":
      return state;
    default:
      return state;
  }
}
