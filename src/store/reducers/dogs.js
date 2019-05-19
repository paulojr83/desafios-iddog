const INITIAL_STATE = {
  category: ["husky", "hound", "pug", "labrador"],
  dogs: []
};
export default function dogs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DOG_LIST":
      return {...state, dogs: action.data }

    default:
      return state;
  }
}
