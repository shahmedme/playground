import uuid from "uuid";
import {
  ADD_ITEM,
  GET_ITEMS,
  UPDATE_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from "../actions/types";

const initialState = {
  todos: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case GET_ITEMS:
      return {
        ...state,
        todos: action.payload,
        loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload.id)
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
