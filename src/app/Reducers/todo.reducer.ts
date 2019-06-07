import { Action } from "@ngrx/store";

import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO
} from "../actionTypes";

export interface ActionsWithPayload<T> extends Action {
  payload: T;
}

export interface TodoPayload {
  index?: number;
  done?: boolean;
  value?: string;
  newValue?: string;
}

export function todoReducer(
  state = [{index: 1, value: 'test', done: false}],
  action: ActionsWithPayload<TodoPayload>
) {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];

    case REMOVE_TODO:
      return state.filter((item, index) => index !== action.payload.index);

    case UPDATE_TODO:
      return state.map((item, index) => {
        return index === action.payload.index
          ? { ...item, value: action.payload.newValue }
          : item;
      });

    case TOGGLE_TODO:
      return state.map((item, index) => {
        return index === action.payload.index
          ? { ...item, done: !action.payload.done }
          : item;
      });

    default:
      return state;
  }
}
