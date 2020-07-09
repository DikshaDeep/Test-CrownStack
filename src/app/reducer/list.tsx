import { createReducer } from "reduxsauce";

import { Types } from "../action/actionCreator";

export interface IProps {
  parseListLoaded: boolean,
  listLoaded: boolean,
  list: string[],
  listId: string,
  error: boolean,
  errorMessage: string
}

export const INITIAL_STATE: IProps = {
  parseListLoaded: false,
  listLoaded: false,
  list: [],
  listId: "",
  error: false,
  errorMessage: ""
};

export const listRequest = (state = INITIAL_STATE as IProps, action: any) => ({
  ...state,
  parseListLoaded: false,
  listLoaded: false
});

export const removeFromList = (state = INITIAL_STATE as IProps, action: any) => {
  return {
    ...state,
    parseListLoaded: false,
    listLoaded: false
  }
}

export const listSuccess = (state = INITIAL_STATE as IProps, action: any) =>{   
  return({
  ...state,
  parseListLoaded: true,
  listLoaded: true,
  list: [...action.todoList],
  error: false
})};

export const listFailure = (state = INITIAL_STATE as IProps, action: any) => ({
  ...state,
  parseListLoaded: false,
  listLoaded: false,
  list: [],
  error: true,
  errorMessage: action.error
});


export const HANDLERS = {
  [Types.LIST_REQUEST]: listRequest,
  [Types.LIST_SUCCESS]: listSuccess,
  [Types.LIST_FAILURE]: listFailure,
  [Types.REMOVE_LIST]: removeFromList
};

export default createReducer(INITIAL_STATE, HANDLERS);
