import { combineReducers } from "redux";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  changeFilter,
} from "./phone-actions";
import { createReducer } from "@reduxjs/toolkit";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => {
    return payload;
  },
  [addContactsSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});
const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({ items, loading, filter });
