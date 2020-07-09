import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
  listRequest: ["listData"],
  removeList: ["id"],
  listSuccess: ["todoList"],
  listFailure: ["error"]
});

export default Creators;
