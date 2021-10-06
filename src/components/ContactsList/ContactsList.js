import React, { useEffect } from "react";
import s from "./ContactList.module.css";
import { ContactsListItem } from "../ContactsListItem/ContactsListItem";
import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts } from "../../redux/contacts-selectors";
import contactOperations from "../../redux/phone-operations";
import authSelectors from "../../redux/auth-selectors";

function ContactsList() {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const logIn = useSelector((state) => authSelectors.getIsLoggedIn(state));

  useEffect(() => {
    if (!logIn) {
      return;
    }
    dispatch(contactOperations.fetchContacts());
  }, [dispatch, logIn]);

  let contacts = getVisibleContacts(state);
  if (!logIn) {
    contacts = [];
  }
  return (
    <>
      {!contacts || contacts.length === 0 ? (
        <p className="notifications">There are no any contacts...</p>
      ) : (
        <ul className={s.listContacts}>
          {contacts.map(({ id, name, number }) => (
            <ContactsListItem key={id} name={name} id={id} number={number} />
          ))}
        </ul>
      )}
    </>
  );
}

export default ContactsList;
