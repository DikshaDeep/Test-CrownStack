import { takeLatest, put, select } from "redux-saga/effects";

import ActionCreators, { Types } from "../action/actionCreator";

export function* getList(action: any) {
  const { listData } = action;
  if (listData) {
    const prevData = yield select((state) => state.list);
    yield put(ActionCreators.listSuccess([...prevData.list, listData]));
  } else {
    yield put(
      ActionCreators.listFailure("No List found")
    );
  }
}

export default function* listWatcher() {
  yield takeLatest(Types.LIST_REQUEST, getList);
}
