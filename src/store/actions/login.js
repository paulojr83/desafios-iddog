export const loginRequest = email => ({
  type: "LOGIN_REQUEST",
  payload: { email }
});

// request -> Saga -> Chamada a api -> Success

export const loginSuccess = data => ({
  type: "LOGIN_SUCCESS",
  payload: { user: data.user }
});