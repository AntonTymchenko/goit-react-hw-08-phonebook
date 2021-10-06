import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => {
  return state.contacts.items;
};

export const getFilter = (state) => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
