import { combineReducers } from "redux";

import list from "./list";

export const rootReducer = combineReducers({
  list
});

// export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
