import axios from "axios";
import { GET_ITEMS, DELETE_ITEM, ADD_ITEM, ITEMS_LOADING } from "./types";

export const addItem = item => dispatch => {
  axios.post("/api/items", item).then(res => {
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    });
  });
};

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then(res => {
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    });
  });
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res => {
    dispatch({
      type: DELETE_ITEM,
      payload: { id }
    });
  });
};

export function setItemsLoading() {
  return {
    type: ITEMS_LOADING
  };
}
