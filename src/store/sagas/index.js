import { all, takeLatest } from "redux-saga/effects";
import { login } from "./login";
import { feed } from "./dogs";

import { Types as LoginTypes } from "../ducks/login";
import { Types as DogTypes } from "../ducks/dogs";

export default function* rootSaga() {
  yield all([takeLatest(LoginTypes.LOGIN_REQUEST, login)]);
  yield all([takeLatest(DogTypes.DOG_FIND, feed)]);
}
