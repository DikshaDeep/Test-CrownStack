import { all, fork } from "redux-saga/effects";

//  saga
import list from "./list";
import UpdatedWatcher from "./removeTodo";

// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(list),
    fork(UpdatedWatcher)
  ]);
};
