import { put, takeLatest } from "redux-saga/effects";

import { snackbarError } from "../../../utils";
import { LOGIN } from "../type";

export function* loginSaga(action) {
  yield put({ type: LOGIN.REQUEST });

  try {
    yield put({ type: LOGIN.SUCCESS, payload: "abc" });
  } catch (err) {
    yield put({ type: LOGIN.FAILURE, payload: err.response.data.error });

    yield snackbarError(err);
  }
}

export default function* watcher() {
  yield takeLatest(LOGIN.START, loginSaga);
}
