import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { loginSuccess, loginError } from "../actions/login";

export function* login(action) {
  
  try {
    console.tron.log("No saga:",action)
    const response = yield call(api.post, "/signup", {
      email: action.payload.email
    });    
    
    yield put(loginSuccess(response.data));

   
  } catch (e) {    
    const { data } = e.response
    console.tron.log("Error no saga:",data)
    yield put(loginError(data));
  }
}
