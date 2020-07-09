import { takeLatest, put, select } from "redux-saga/effects";

import ActionCreators, { Types } from "../action/actionCreator";

export function* getUpdatedList(action: any) {
  const { id } = action;
  if (id) {
    const prevData = yield select((state) => state.list);
    
    // eslint-disable-next-line array-callback-return
    const updateData = prevData.list.filter((x: string, i: number) => {if(i+1 !== id) return x});
    
    yield put(ActionCreators.listSuccess([...updateData]));
    
  } else {
    yield put(
      ActionCreators.listFailure("No List found")
    );
  }
  return action;
}

export default function* UpdatedWatcher() {
  yield takeLatest(Types.REMOVE_LIST, getUpdatedList);
}
