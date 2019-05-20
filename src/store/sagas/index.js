import { all, takeLatest } from "redux-saga/effects";
import { login } from "./login";
import { Types as LoginTypes } from "../ducks/login";

export default function* rootSaga() {
  yield all([takeLatest(LoginTypes.LOGIN_REQUEST, login)]);
}
