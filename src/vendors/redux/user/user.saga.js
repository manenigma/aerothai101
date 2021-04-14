import { takeLatest, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";

export function* isSetCurrentUser(user) {
	yield console.log(user);
}

export function* onSetCurrentUser() {
	yield takeLatest(UserActionTypes.SET_CURRENT_USER, isSetCurrentUser);
}

export function* userSaga() {
	yield all([call(onSetCurrentUser)]);
}
