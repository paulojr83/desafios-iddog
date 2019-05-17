import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { loginSuccess } from "../actions/login";

export function* login(action) {
  try {
    const response = yield call(api.post, "/signup", {
      email: action.payload.email
    });

    yield put(loginSuccess(response.data));
  } catch (e) {
    console.tron.log(e);
  }
}
