import axios from "axios";
import { GET_ITEMS, DELETE_ITEM, ADD_ITEM, ITEMS_LOADING } from "./types";

const data = [
  {
    _id: "5cd1ed17a9abac31580cd96a",
    name: "ddd",
    date: "2019-05-07T20:39:51.509Z",
    __v: 0
  },
  {
    _id: "5cd1ec97ad004f4c1c0a1e0d",
    name: "wow",
    date: "2019-05-07T20:37:43.008Z",
    __v: 0
  },
  {
    _id: "5cd1ec6554c0e24eac28d057",
    name: "hello",
    date: "2019-05-07T20:36:53.445Z",
    __v: 0
  },
  {
    _id: "5cd1ec47984c5c4a24f6014f",
    name: "how's goin on",
    date: "2019-05-07T20:36:23.192Z",
    __v: 0
  },
  {
    _id: "5cd1ebd6a61aa03f8c5c2453",
    name: "hwllo",
    date: "2019-05-07T20:34:30.221Z",
    __v: 0
  },
  {
    _id: "5cd1ebd1a61aa03f8c5c2452",
    name: "ok, it's work",
    date: "2019-05-07T20:34:25.048Z",
    __v: 0
  },
  {
    _id: "5cd1ebc8a61aa03f8c5c2451",
    name: "fasdfasdfa",
    date: "2019-05-07T20:34:16.290Z",
    __v: 0
  },
  {
    _id: "5cd1ebbea61aa03f8c5c2450",
    name: "fasdfasfda",
    date: "2019-05-07T20:34:06.865Z",
    __v: 0
  }
];

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

// export const getItems = () => {
//   console.log("hiddd");
//   return {
//     type: GET_ITEMS,
//     payload: data
//   };
// };

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
