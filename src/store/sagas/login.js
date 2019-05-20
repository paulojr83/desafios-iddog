import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as LoginActions } from "../ducks/login";

export function* login(action) {
  try {
    const response = yield call(api.post, "/signup", {
      email: action.payload.email
    });

    yield put(LoginActions.loginSuccess(response.data));
  } catch (e) {
    const { error } = e.response.data;
    yield put(LoginActions.loginError(error));
  }
}
