const initialstate = 0;
let user_store = [];
const changeTheNumber = (state = user_store, action) => {
  switch (action.type) {
    // case "DECREMENT": return state-1;
    // case "INCREMENT": return state+action.payload;
    case "user-info":
      var randomChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var result = "";
      for (var i = 0; i < 10; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      state.push({
        username: action.usernames,
        password: action.passwords,
        token: result,
      });
      return state;

    case "user-out":
      state = [];
      return state;

    default:
      return state;
  }
};
export default changeTheNumber;

export const SquareTheNumber = (state = initialstate, action) => {
  switch (action.type) {
    case "SQUARE":
      return action.payload * action.payload;
    default:
      return state;
  }
};
